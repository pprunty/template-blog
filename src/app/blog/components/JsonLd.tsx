// components/JsonLd.tsx
import React from 'react';
import Head from 'next/head';
import { AUTHOR, DEFAULT_SECTION } from '@/config'; // Import variables from config

// Define the Author interface
interface Author {
  name: string;
  url: string;
  publisherName: string;
  publisherLogo: string;
}

// Define the Props interface
interface JsonLdProps {
  type?: string; // Optional prop
  url: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string; // Optional prop
  author?: Author; // Optional author prop, defaulted to AUTHOR from config
  keywords?: string[] | string; // Optional: can be array of strings or a string
  articleBody: string;
}

// Define the component using React.FC with JsonLdProps
const JsonLd: React.FC<JsonLdProps> = ({
  type = 'BlogPosting', // default value for type
  url,
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = AUTHOR, // Use default author from config if not provided
  keywords,
  articleBody,
}) => {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': type,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: author.publisherName,
      logo: {
        '@type': 'ImageObject',
        url: author.publisherLogo,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished, // Use modified date if available
    articleBody: articleBody,
    keywords: keywords,
    articleSection: DEFAULT_SECTION, // Default section from config
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </Head>
  );
};

export default JsonLd;
