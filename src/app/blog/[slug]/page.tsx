// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { SITE_URL } from '@/config';
// import { ReactNode } from 'react';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const { metadata } = await import(`@/posts/${slug}/page.mdx`);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${SITE_URL}/blog/${slug}`,
      images: metadata.images ? [{ url: `${SITE_URL}${metadata.image}` }] : [],
      type: metadata.openGraph.type,
      tags: metadata.openGraph.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: metadata.images ? [`${SITE_URL}${metadata.image}`] : [],
    },
    keywords: metadata.keywords
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const Content = (await import(`@/posts/${slug}/page.mdx`)).default;

  return (
    <div>
      <Content />
    </div>
  );
}
