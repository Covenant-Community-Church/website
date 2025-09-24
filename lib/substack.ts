import { XMLParser } from 'fast-xml-parser';
import { SubstackPost } from '@/types/substack';
import {
	getReadingTimeMinutes,
	getResizedImage,
	getRSSContentWordCount,
	getOGImageURL,
	formatCoverImageColorPaletteColor,
} from '../utils/helper';
import { getErrorMessage } from '@/utils/errors';

// =================================================================================
// Substack Unofficial API Functions
// Primary data source, providing rich metadata like likes, paywall status, etc.
// =================================================================================

/**
 * Fetches a list of posts from Substack's unofficial JSON API.
 * @param publicationURL The base URL of the Substack publication.
 * @param sortBy Sort order ('new' or 'top').
 * @param offset The number of posts to skip.
 * @param limit The maximum number of posts to return.
 * @returns A promise that resolves to an array of SubstackPost objects or null on failure.
 */
export async function getSubstackPostsViaAPI(
	publicationURL: string,
	sortBy: 'new' | 'top' = 'new',
	offset: number = 0,
	limit: number = 12
): Promise<SubstackPost[] | null> {
	try {
		const url = `${publicationURL}/api/v1/archive?sort=${sortBy}&offset=${offset}&limit=${limit}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`API fetch failed with status: ${response.status}`);
		}
		const data = (await response.json()) as any[];
		return data.map(
			(post: any): SubstackPost => ({
				slug: post.slug,
				url: post.canonical_url,
				title: post.title,
				description: post.description || post.subtitle || '',
				excerpt: post.truncated_body_text || null,
				body_html: null, // List view doesn't provide full body
				reading_time_minutes: getReadingTimeMinutes(post.wordcount || 0),
				audio_url: post.audio_items?.[0]?.audio_url || null,
				date: post.post_date,
				likes: post.reactions?.['❤'] || 0,
				paywall: post.audience !== 'everyone',
				cover_image: {
					original: post.cover_image || null,
					og: getOGImageURL(post.cover_image || null),
					small: getResizedImage(post.cover_image, 150),
					medium: getResizedImage(post.cover_image, 424),
					large: getResizedImage(post.cover_image, 848),
				},
				cover_image_color_palette: {
					vibrant: formatCoverImageColorPaletteColor(post.coverImagePalette?.Vibrant?.rgb),
					light_vibrant: formatCoverImageColorPaletteColor(post.coverImagePalette?.LightVibrant?.rgb),
					dark_vibrant: formatCoverImageColorPaletteColor(post.coverImagePalette?.DarkVibrant?.rgb),
					muted: formatCoverImageColorPaletteColor(post.coverImagePalette?.Muted?.rgb),
					light_muted: formatCoverImageColorPaletteColor(post.coverImagePalette?.LightMuted?.rgb),
					dark_muted: formatCoverImageColorPaletteColor(post.coverImagePalette?.DarkMuted?.rgb),
				},
				author: post.publishedBylines?.[0]?.name || '',
				author_image: {
					original: post.publishedBylines?.[0]?.photo_url || null,
					small: getResizedImage(post.publishedBylines?.[0]?.photo_url, 32),
					medium: getResizedImage(post.publishedBylines?.[0]?.photo_url, 72),
					large: getResizedImage(post.publishedBylines?.[0]?.photo_url, 192),
				},
			})
		);
	} catch (error) {
		console.error({ event: `failed_to_process_posts_via_api`, error: getErrorMessage(error) });
		return null;
	}
}

/**
 * Fetches a single post by its slug from Substack's unofficial JSON API.
 * @param publicationURL The base URL of the Substack publication.
 * @param slug The slug of the post to retrieve.
 * @returns A promise that resolves to a single SubstackPost object or null on failure.
 */
export async function getSubstackPostViaAPI(publicationURL: string, slug: string): Promise<SubstackPost | null> {
	try {
		const url = `${publicationURL}/api/v1/posts/${slug}`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`API fetch failed for slug "${slug}" with status: ${response.status}`);
		}
		const data = (await response.json()) as any;
		return {
			slug: data.slug,
			url: data.canonical_url,
			title: data.title,
			description: data.description || data.subtitle || '',
			excerpt: data.truncated_body_text || null,
			body_html: data.body_html || null,
			reading_time_minutes: getReadingTimeMinutes(data.wordcount || 0),
			audio_url: data.audio_items?.[0]?.audio_url || null,
			date: data.post_date,
			likes: data.reactions?.['❤'] || 0,
			paywall: data.audience !== 'everyone',
			cover_image: {
				original: data.cover_image || null,
				og: getOGImageURL(data.cover_image || null),
				small: getResizedImage(data.cover_image, 150),
				medium: getResizedImage(data.cover_image, 424),
				large: getResizedImage(data.cover_image, 848),
			},
			cover_image_color_palette: {
				vibrant: formatCoverImageColorPaletteColor(data.coverImagePalette?.Vibrant?.rgb),
				light_vibrant: formatCoverImageColorPaletteColor(data.coverImagePalette?.LightVibrant?.rgb),
				dark_vibrant: formatCoverImageColorPaletteColor(data.coverImagePalette?.DarkVibrant?.rgb),
				muted: formatCoverImageColorPaletteColor(data.coverImagePalette?.Muted?.rgb),
				light_muted: formatCoverImageColorPaletteColor(data.coverImagePalette?.LightMuted?.rgb),
				dark_muted: formatCoverImageColorPaletteColor(data.coverImagePalette?.DarkMuted?.rgb),
			},
			author: data.publishedBylines?.[0]?.name || '',
			author_image: {
				original: data.publishedBylines?.[0]?.photo_url || null,
				small: getResizedImage(data.publishedBylines?.[0]?.photo_url, 32),
				medium: getResizedImage(data.publishedBylines?.[0]?.photo_url, 72),
				large: getResizedImage(data.publishedBylines?.[0]?.photo_url, 192),
			},
		};
	} catch (error) {
		console.error({ event: `failed_to_process_post_via_api`, slug, error: getErrorMessage(error) });
		return null;
	}
}

// =================================================================================
// Substack RSS Feed Functions
// Fallback data source, providing basic post data with enhanced parsing.
// =================================================================================

type XmlFieldValue = string | { '#text'?: string; '@_href'?: string; [key: string]: unknown };
type RawPostItem = {
	title?: XmlFieldValue;
	link?: XmlFieldValue;
	guid?: XmlFieldValue;
	id?: XmlFieldValue;
	pubDate?: string;
	published?: string;
	updated?: string;
	description?: XmlFieldValue;
	summary?: XmlFieldValue;
	'content:encoded'?: XmlFieldValue;
	content?: XmlFieldValue;
	enclosure?: { '@_url'?: string };
	'dc:creator'?: string;
	creator?: string;
	author?: string;
};

// --- RSS Helper Functions ---

const decodeHtmlEntities = (str: string): string =>
	!str ? '' : str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const slugifyTitle = (title: string): string =>
	title.toLowerCase().trim().replace(/[\s_]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
const slugFromLink = (link: string, guid?: string): string => {
	try {
		const parts = new URL(link).pathname.split('/').filter(Boolean);
		if (parts.length > 0) return parts[parts.length - 1];
	} catch {}
	if (guid) return guid.replace(/[^a-zA-Z0-9-_]/g, '-');
	return encodeURIComponent(link).slice(0, 70);
};
const cleanPostContent = (htmlContent: string): string => {
	const boilerplate =
		'<p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do. Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.</p>';
	return htmlContent.replace(boilerplate, '').trim();
};
const extractValue = (field: XmlFieldValue | undefined): string => {
	if (typeof field === 'string') return field;
	if (field && typeof field === 'object') {
		const value = field['#text'] ?? field['@_href'] ?? Object.values(field)[0] ?? '';
		return String(value);
	}
	return '';
};

/**
 * Fetches and parses posts from a Substack RSS/Atom feed.
 * @param publicationURL The base URL of the Substack publication.
 * @returns A promise that resolves to an array of SubstackPost objects or null on failure.
 */
export async function getSubstackPostsViaRSS(publicationURL: string): Promise<SubstackPost[] | null> {
	try {
		const url = `${publicationURL}/feed`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`RSS feed fetch failed with status: ${response.status}`);
		}
		const xmlText = await response.text();

		const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', processEntities: true });
		const feed = parser.parse(xmlText);

		let itemsRaw: RawPostItem[] = [];
		if (feed?.rss?.channel?.item) {
			itemsRaw = Array.isArray(feed.rss.channel.item) ? feed.rss.channel.item : [feed.rss.channel.item];
		} else if (feed?.feed?.entry) {
			itemsRaw = Array.isArray(feed.feed.entry) ? feed.feed.entry : [feed.feed.entry];
		}

		const siteImageURL = feed?.rss?.channel?.image?.url || null;

		return itemsRaw.map((item: RawPostItem): SubstackPost => {
			const title = extractValue(item.title) || 'Untitled';
			const link = extractValue(item.link) || '';
			const guid = extractValue(item.guid ?? item.id);
			const pubDate = item.pubDate || item.published || item.updated;
			const description = item.description || item.summary;
			const content = item['content:encoded'] || item.content;
			const imageUrl = item.enclosure?.['@_url'] || "";
			const resolvedTitle = decodeHtmlEntities(title);
			const cleanedContent = content ? cleanPostContent(extractValue(content)) : null;

			return {
				slug: slugifyTitle(resolvedTitle) || slugFromLink(link, guid),
				url: link,
				title: resolvedTitle,
				description: description ? decodeHtmlEntities(extractValue(description)) : '',
				excerpt: null, // RSS doesn't provide a clean excerpt
				body_html: cleanedContent,
				reading_time_minutes: getReadingTimeMinutes(getRSSContentWordCount(cleanedContent || '')),
				audio_url: null,
				date: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
				likes: 0, // Not available in RSS
				paywall: false, // Not available in RSS
				cover_image: {
					original: imageUrl || null,
					og: getOGImageURL(imageUrl),
					small: getResizedImage(imageUrl, 150),
					medium: getResizedImage(imageUrl, 424),
					large: getResizedImage(imageUrl, 848),
				},
				cover_image_color_palette: {
					vibrant: null, light_vibrant: null, dark_vibrant: null, muted: null, light_muted: null, dark_muted: null,
				},
				author: item['dc:creator'] || item.creator || item.author || '',
				author_image: {
					original: siteImageURL,
					small: getResizedImage(siteImageURL, 32),
					medium: getResizedImage(siteImageURL, 72),
					large: getResizedImage(siteImageURL, 192),
				},
			};
		});
	} catch (error) {
		console.error({ event: `failed_to_process_posts_via_rss`, error: getErrorMessage(error) });
		return null;
	}
}

/**
 * Retrieves a single post by its slug from a Substack RSS feed.
 * @param publicationURL The base URL of the Substack publication.
 * @param slug The slug of the post to find.
 * @returns A promise that resolves to the matching Post object or null if not found.
 */
export async function getSubstackPostViaRSS(publicationURL: string, slug: string): Promise<SubstackPost | null> {
	try {
		const data = await getSubstackPostsViaRSS(publicationURL);
		return data?.find((post) => post.slug === slug) || null;
	} catch (error) {
		console.error({ event: `failed_to_process_post_via_rss`, slug, error: getErrorMessage(error) });
		return null;
	}
}