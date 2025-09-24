import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { getPostBySlug, type Post } from '@/lib/substack';

const FEED_URL = `${process.env.SUBSTACK_PUBLICATION_URL}/feed`;

type Props = {
  params: { slug: string };
};

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = (await params) as { slug: string };

  let post: Post | null = null;
  try {
    post = await getPostBySlug(FEED_URL, slug);
  } catch (err) {
    console.error('Error fetching Substack post:', err);
    return notFound();
  }

  if (!post) return notFound();

  return (
    <>
      <PageHeader title={post.title} />
      <main className="max-w-4xl mx-auto py-12 px-4">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">{formatDate(post.pubDate)}</div>
              <div className="flex items-center gap-3">
                <Link href="/blog" className="text-sm text-gray-700 hover:underline">← Back</Link>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-navy text-white rounded-2xl hover:bg-navy/90">Read on Substack</a>
              </div>
            </div>
            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content || post.description || '' }} />
          </div>
      </main>
    </>
  );
}