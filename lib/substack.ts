import { XMLParser } from 'fast-xml-parser';

/**
 * Defines the structured format for a single post.
 */
export type Post = {
  title: string;
  link: string;
  slug: string;
  guid?: string;
  pubDate?: string;
  description?: string; // Short HTML content
  content?: string; // Full HTML content, if available
  image?: string; // URL for the post's cover image
};

/**
 * Decodes common HTML entities in a string.
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Creates a URL-friendly slug from a post's title.
 * @param title The title of the post.
 * @returns A sanitized, lowercase, dash-separated slug.
 */
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with dashes
    .replace(/[^a-z0-9-]/g, '') // Remove invalid characters
    .replace(/-+/g, '-') // Collapse consecutive dashes
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing dashes
}

/**
 * Creates a fallback slug from the post's link or GUID.
 * @param link The canonical link to the post.
 * @param guid The GUID of the post, if available.
 * @returns A generated slug.
 */
function slugFromLink(link: string, guid?: string): string {
  try {
    const url = new URL(link);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length > 0) {
      return parts[parts.length - 1];
    }
  } catch {
    // Fallback if link is not a valid URL
  }
  if (guid) {
    // Sanitize GUID to be used as a slug
    return guid.replace(/[^a-zA-Z0-9-_]/g, '-');
  }
  // As a last resort, encode the link
  return encodeURIComponent(link).slice(0, 70);
}

/**
 * Removes unwanted boilerplate text from the post content.
 * @param htmlContent The HTML content of the post.
 * @returns Cleaned HTML content.
 */
function cleanPostContent(htmlContent: string): string {
    const boilerplate = "<p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do. Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.</p>";
    return htmlContent.replace(boilerplate, "").trim();
}

/**
 * Fetches and parses posts from a Substack RSS/Atom feed.
 * @param feedUrl The URL of the RSS/Atom feed.
 * @returns A promise that resolves to an array of Post objects.
 */
async function fetchPostsFromRss(feedUrl: string): Promise<Post[]> {
  try {
    const response = await fetch(feedUrl, { next: { revalidate: 3600 } }); // Revalidate cache every hour
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }
    const xmlText = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      removeNSPrefix: false, // Keep namespaces for fields like 'content:encoded'
    });

    const feed = parser.parse(xmlText);

    // Handle both RSS (<rss><channel><item>) and Atom (<feed><entry>) formats
    let itemsRaw: any[] = [];
    if (feed?.rss?.channel?.item) {
      itemsRaw = Array.isArray(feed.rss.channel.item) ? feed.rss.channel.item : [feed.rss.channel.item];
    } else if (feed?.feed?.entry) {
      itemsRaw = Array.isArray(feed.feed.entry) ? feed.feed.entry : [feed.feed.entry];
    }

    return itemsRaw.map((item: any): Post => {
      // Helper to safely extract values which might be strings or objects
      const extractValue = (field: any): string => {
          if (typeof field === 'string') return field;
          if (field && typeof field === 'object') {
              return field['#text'] || field['@_href'] || Object.values(field)[0] || '';
          }
          return '';
      };

      const title = extractValue(item.title) || 'Untitled';
      const link = extractValue(item.link) || '';
      const guid = extractValue(item.guid ?? item.id);
      const pubDate = item.pubDate || item.published || item.updated;
      const description = item.description || item.summary;
      const content = item['content:encoded'] || item.content;
      
      // Extract image URL from the enclosure tag
      const imageUrl = item.enclosure?.['@_url'];

      const resolvedTitle = decodeHtmlEntities(title);
      const cleanedContent = content ? cleanPostContent(extractValue(content)) : undefined;

      return {
        title: resolvedTitle,
        link: decodeHtmlEntities(link),
        guid: guid ? decodeHtmlEntities(guid) : undefined,
        pubDate: pubDate ? String(pubDate) : undefined,
        description: description ? decodeHtmlEntities(extractValue(description)) : undefined,
        content: cleanedContent,
        slug: slugifyTitle(resolvedTitle) || slugFromLink(link, guid),
        image: imageUrl,
      };
    });
  } catch (err) {
     console.error(`Failed to fetch and parse RSS feed from ${feedUrl}:`, err);
     throw new Error(`Could not retrieve posts. ${String(err)}`);
  }
}

/**
 * Retrieves all posts from a Substack RSS feed, sorted by publication date descending.
 * @param feedUrl The public RSS feed URL for the Substack.
 * @returns A promise that resolves to a sorted array of all posts.
 */
export async function getAllPosts(feedUrl: string): Promise<Post[]> {
  const posts = await fetchPostsFromRss(feedUrl);
  
  // Sort by publication date, newest first
  posts.sort((a, b) => {
    if (a.pubDate && b.pubDate) {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    }
    return 0; // Maintain original order if dates are missing
  });

  return posts;
}

/**
 * Retrieves a single post by its slug from a Substack RSS feed.
 * @param feedUrl The public RSS feed URL for the Substack.
 * @param slug The slug of the post to find.
 * @returns A promise that resolves to the matching Post object or null if not found.
 */
export async function getPostBySlug(feedUrl: string, slug: string): Promise<Post | null> {
  const posts = await fetchPostsFromRss(feedUrl);
  return posts.find((p) => p.slug === slug) || null;
}