import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { getAllPosts, type Post } from '@/lib/substack';

const FEED_URL = `${process.env.SUBSTACK_PUBLICATION_URL}/feed`;

export const metadata = {
	title: 'Blog',
};

export default async function BlogPage() {
	let posts: Post[] = [];
	let errorMessage: string | null = null;

	try {
		posts = await getAllPosts(FEED_URL);
	} catch (err) {
		// Log the full error to the server console for debugging
		console.error('Error fetching Substack posts:', err);
		// Set a user-friendly error message
		errorMessage = 'Could not load blog posts at this time. Please try again later.';
	}

	return (
		<>
			<PageHeader title="Blog" />
			<main className="max-w-6xl mx-auto py-12 px-4">

				{/* Display an error message if the fetch failed */}
				{errorMessage && (
					<p className="text-center text-red-600 bg-red-100 p-4 rounded-md">{errorMessage}</p>
				)}

				{/* Display a message if fetch was successful but returned no posts */}
				{!errorMessage && posts.length === 0 && (
					<p className="text-center text-gray-700">No blog posts found.</p>
				)}

				{/* Render posts if available */}
				{posts.length > 0 && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
						{posts.map((post) => (
							<article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
								<div className="p-6 flex-grow">
									<h3 className="text-lg font-bold text-gray-800 mb-2">
										<Link href={`/blog/${post.slug}`} className="hover:underline">
											{post.title}
										</Link>
									</h3>
									<div className="text-sm text-gray-500 mb-4">
										{post.pubDate ? new Date(post.pubDate).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										}) : ''}
									</div>
									{post.description && (
										<div
											className="text-sm text-gray-600 line-clamp-3"
											dangerouslySetInnerHTML={{ __html: post.description }}
										/>
									)}
								</div>
								<div className="p-6 pt-0 mt-auto">
									<Link href={`/blog/${post.slug}`} className="font-semibold text-blue-600 hover:text-blue-800">
										Read More &rarr;
									</Link>
								</div>
							</article>
						))}
					</div>
				)}
			</main>
		</>
	);
}