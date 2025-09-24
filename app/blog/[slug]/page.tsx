import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
// Updated imports to use the new Substack library and type
import { getSubstackPostsViaRSS, getSubstackPostViaRSS } from '@/lib/substack';
import { SubstackPost } from '@/types/substack';
import Image from 'next/image';

// Use the base publication URL as required by the new functions
const PUBLICATION_URL = process.env.SUBSTACK_PUBLICATION_URL;

type Props = {
	params: { slug: string };
};

/**
 * Formats an ISO date string into a more readable format.
 * @param dateStr The ISO date string to format.
 * @returns A formatted date string (e.g., "September 23, 2025").
 */
function formatDate(dateStr?: string) {
	if (!dateStr) return '';
	try {
		return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	} catch {
		return dateStr; // Fallback to the original string if parsing fails
	}
}

/**
 * Cleans the post's HTML content by removing the wrapper around the main image
 * while preserving the image and its caption.
 * @param htmlContent The HTML content of the post.
 * @returns Cleaned HTML content with the image and credit preserved.
 */
function cleanPostHTML(htmlContent: string | null | undefined): string {
	if (!htmlContent) return '';
	const regex = /<div class="captioned-image-container">.*<\/div>/g;
	return htmlContent.replace(regex, '');
}

/**
 * Generates static paths for all blog posts at build time.
 * This improves performance by pre-rendering each post page.
 */
export async function generateStaticParams() {
	if (!PUBLICATION_URL) {
		return [];
	}
	// Fetch all posts to generate a path for each one
	const posts = await getSubstackPostsViaRSS(PUBLICATION_URL);
	return posts?.map((post) => ({
		slug: post.slug,
	})) || [];
}

export default async function PostPage({ params }: Props) {
	const { slug } = await params;

	// Use the new SubstackPost type
	let post: SubstackPost | null = null;

	try {
		if (!PUBLICATION_URL) {
			throw new Error('SUBSTACK_PUBLICATION_URL is not defined in environment variables.');
		}
		post = await getSubstackPostViaRSS(PUBLICATION_URL, slug);
	} catch (err) {
		console.error(`Error fetching Substack post with slug "${slug}":`, err);
		return notFound();
	}

	if (!post) {
		return notFound();
	}

	const postContent = post.body_html || post.description;
	const cleanedHtml = cleanPostHTML(postContent);

	return (
		<>
			<PageHeader title={post.title} />
			<main className="max-w-4xl mx-auto py-12 px-4">
				<div className="p-6">
					<div className="flex items-center justify-between mb-4">
						{/* Updated to use post.date */}
						<div className="text-sm text-gray-600">{formatDate(post.date)}</div>
						<div className="flex items-center gap-3">
							<Link href="/blog" className="text-sm text-gray-700 hover:underline">
								← Back
							</Link>
							{/* Updated to use post.url */}
							<a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-navy text-white rounded-2xl hover:bg-navy/90">
								Read on Substack
							</a>
						</div>
					</div>
					<Image
						src={post.cover_image.og || "./placeholder-image.png"}
						alt={post.title || 'Blog Post Image'}
						className="w-full h-auto rounded-lg"
						height={100}
						width={200}
					/>
					<article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: cleanedHtml || '' }} />
				</div>
			</main>
		</>
	);
}

