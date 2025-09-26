import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
// Updated import to use the new Substack library and type
import { getSubstackPostsViaRSS } from '@/lib/substack';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';
import { SubstackPost } from '@/types/substack';

// Use the base publication URL as required by the new function
const PUBLICATION_URL = process.env.SUBSTACK_PUBLICATION_URL;

export const metadata = {
    title: 'Blog | Covenant Community',
};

export default async function BlogPage() {
    // Use the new SubstackPost type
    let posts: SubstackPost[] = [];
    let errorMessage: string | null = null;

    try {
        if (!PUBLICATION_URL) {
            throw new Error('SUBSTACK_PUBLICATION_URL is not defined in environment variables.');
        }
        // Call the new function to fetch posts
        const fetchedPosts = await getSubstackPostsViaRSS(PUBLICATION_URL);
        if (fetchedPosts) {
            posts = fetchedPosts;
        } else {
            // Handle the case where the function returns null
            errorMessage = 'Could not load blog posts at this time. Please try again later.';
        }
    } catch (err) {
        // Log the full error to the server console for debugging
        console.error('Error fetching Substack posts:', err);
        // Set a user-friendly error message
        errorMessage = 'Could not load blog posts at this time. Please try again later.';
    }

    const blogPosts = posts.filter((post) => !post.title.includes('FWFU'));

    return (
        <>
            <PageHeader title="Blog" />
            <main className="container-max py-12">
                {errorMessage && (
                    <Alert variant="destructive" className="mb-8">
                        <AlertCircleIcon className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                )}

                {!errorMessage && blogPosts.length === 0 && (
                    <Alert>
                        <AlertCircleIcon className="h-4 w-4" />
                        <AlertTitle>No Posts Found</AlertTitle>
                        <AlertDescription>No blog posts were found. Please check back later.</AlertDescription>
                    </Alert>
                )}

                {blogPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.slug} className="flex flex-col">
                                <CardHeader>
                                    <div className="aspect-video relative mb-4">
                                        <Image src={post.cover_image.og || '/placeholder-image.png'} alt={post.title} fill className="object-cover rounded-lg" />
                                    </div>
                                    <CardTitle className="text-xl font-heading font-bold">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </CardTitle>
                                    <CardDescription>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-brown line-clamp-3">{post.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full">
                                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}