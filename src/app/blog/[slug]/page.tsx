import { Metadata } from 'next';
import { SITE_URL } from '@/config';

// Define params type as a promise
type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

// Adjust generateMetadata to handle async params
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postModule = await import(`@/posts/${slug}/page.mdx`);

  const { metadata } = postModule;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${SITE_URL}/blog/${slug}`,
      images: metadata.image ? [{ url: `${SITE_URL}${metadata.image}` }] : [],
      type: metadata.openGraph?.type,
      tags: metadata.openGraph?.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: metadata.image ? [`${SITE_URL}${metadata.image}`] : [],
    },
    keywords: metadata.keywords,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const postModule = await import(`@/posts/${slug}/page.mdx`);

  const Content = postModule.default;

  return (
    <article>
      <Content />
    </article>
  );
}
