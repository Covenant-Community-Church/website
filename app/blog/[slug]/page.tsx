import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSubstackPostsViaRSS, getSubstackPostViaRSS } from '@/lib/substack';
import { SubstackPost } from '@/types/substack';
import { Button } from '@/components/ui/button';

import { Separator } from '@/components/ui/separator';
import PageHeader from '@/components/PageHeader';

const PUBLICATION_URL = process.env.SUBSTACK_PUBLICATION_URL;

type Props = {
  params: { slug: string };
};

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function cleanPostHTML(htmlContent: string | null | undefined): string {
  if (!htmlContent) return '';
  // Remove captioned image containers
  let cleaned = htmlContent.replace(/<div class="captioned-image-container">.*?<\/div>/g, '');
  // Remove all script tags
  cleaned = cleaned.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  // Remove pencraft divs
  cleaned = cleaned.replace(/<div class="pencraft.*?">.*?<\/div>/g, '');
  return cleaned;
}

export async function generateStaticParams() {
  if (!PUBLICATION_URL) {
    return [];
  }
  const posts = await getSubstackPostsViaRSS(PUBLICATION_URL);
  return posts?.map((post) => ({ slug: post.slug })) || [];
}

export default async function PostPage({ params }: Props) {
  const { slug } = params;
  let post: SubstackPost | null = null;

  try {
    if (!PUBLICATION_URL) {
      throw new Error('SUBSTACK_PUBLICATION_URL is not defined');
    }
    post = await getSubstackPostViaRSS(PUBLICATION_URL, slug);
  } catch (err) {
    console.error(`Error fetching post with slug "${slug}":`, err);
    notFound();
  }

  if (!post) {
    notFound();
  }

  const postContent = post.body_html || post.description;
  const cleanedHtml = cleanPostHTML(postContent);

  return (
    <>
      <PageHeader title={post.title || 'Blog Post'} />
      <div className="w-full h-[400px] relative">
        <Image
          src={post.cover_image.og || "/placeholder-image.png"}
          alt={post.title || 'Blog Post Image'}
          fill
          className="object-cover"
        />
      </div>
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: cleanedHtml || '' }}
            />
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Published on</h3>
                <p className="text-gray-600">{formatDate(post.date)}</p>
              </div>
              <Separator />
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    Read on Substack
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog">← Back to Blog</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}