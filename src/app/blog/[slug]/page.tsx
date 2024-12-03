import { Metadata } from 'next';
import { SITE_URL } from '@/config';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

// Adjust generateMetadata to handle async params
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
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
  } catch (error) {
    // Return default metadata or handle as needed
    return {
      title: 'Post Not Found',
      description: 'The requested post does not exist.',
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const postModule = await import(`@/posts/${slug}/page.mdx`);
    const Content = postModule.default;

    return (
      <article>
        <Content />
      </article>
    );
  } catch (error) {
    // Render the 404 page
    notFound();
  }
}
