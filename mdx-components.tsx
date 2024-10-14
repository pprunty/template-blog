// Main file
import { A as a } from "@/app/blog/components/a";
import { P as p } from "@/app/blog/components/p";
import { H1 as h1 } from "@/app/blog/components/h1";
import { H2 as h2 } from "@/app/blog/components/h2";
import { H3 as h3 } from "@/app/blog/components/h3";
import { H4 as h4 } from "@/app/blog/components/h4";
import { OL as ol } from "@/app/blog/components/ol";
import { UL as ul } from "@/app/blog/components/ul";
import { LI as li } from "@/app/blog/components/li";
import { HR as hr } from "@/app/blog/components/hr";
import { Figure } from "@/app/blog/components/figure";
import { Caption } from "@/app/blog/components/caption";
import { YouTube } from "@/app/blog/components/youtube";
import { Ref, FootNotes, FootNote } from "@/app/blog/components/footnotes";
import { Blockquote as blockquote } from "@/app/blog/components/blockquote";
import 'highlight.js/styles/atom-one-dark.css';
import { InlineCode } from "@/app/blog/components/code";
import { Admonition } from '@/app/blog/components/admonition';
import { TableOfContents } from "@/app/blog/components/toc";

// Import MemoizedImage from the new file
import { MemoizedImage } from "@/components/MemoizedImage";

export function useMDXComponents(components?: { [component: string]: React.ComponentType }) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    h4,
    p,
    ol,
    ul,
    li,
    hr,
    code: InlineCode,
    blockquote,
    Admonition,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const { src, alt } = props;

      if (!src) return null; // No image rendered

      const width = 620;
      const height = 400;

      return (
        <MemoizedImage
          src={src}
          alt={alt || "Image"}
          width={width}
          height={height}
          loading="lazy"
          priority={false}
        />
      );
    },
    Figure,
    Caption,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
    TableOfContents,
  };
}
