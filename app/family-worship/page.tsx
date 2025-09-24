import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { getAllPosts, type Post } from '@/lib/substack';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

const FEED_URL = `${process.env.SUBSTACK_PUBLICATION_URL}/feed`;

export const metadata = {
	title: 'Family Worship | Covenant Community',
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
            <PageHeader title="Family Worship Guides" />
            <main className="max-w-6xl mx-auto py-12 px-4">

				{/* Display an error message if the fetch failed */}
				{errorMessage && (
					<Alert variant="destructive">
						<AlertCircleIcon />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>
							<p>{errorMessage}</p>
						</AlertDescription>
					</Alert>
				)}

				{/* Display a message if fetch was successful but returned no posts */}
				{!errorMessage && posts.length === 0 && (
					<Alert>
						<AlertTitle>No Guides Found</AlertTitle>
						<AlertDescription>
							<p>No guides were found.</p>
						</AlertDescription>
					</Alert>
				)}

				{/* Render posts if available */}
				{posts.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
						{posts
							.filter(post => post.title.includes('FWFU'))
							.map((post) => (
								<Link key={post.slug} href={`/blog/${post.slug}`}>
									<Card className="mb-6">
										<CardHeader>
											<CardTitle>{post.title}</CardTitle>
											<CardDescription>{post.description}</CardDescription>
										</CardHeader>
										<CardFooter className="pt-0">
											<Button variant="link" className="p-0">
												Read More
											</Button>
										</CardFooter>
									</Card>
								</Link>
							))}
					</div>
				)}
			</main>
        </>
    );
}