'use client'; // This file is a client component

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMDXComponents } from '../../../../mdx-components';

import { MDXRemote } from 'next-mdx-remote/rsc';

interface ClientMDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function ClientMDXContent({ source }: ClientMDXContentProps) {
  const MDXComponents = useMDXComponents();

  return <MDXRemote source={source} components={MDXComponents} />;
}
