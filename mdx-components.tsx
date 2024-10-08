import { A as a } from "./src/app/blog/components/a";
import { P as p } from "./src/app/blog/components/p";
import { H1 as h1 } from "./src/app/blog/components/h1";
import { H2 as h2 } from "./src/app/blog/components/h2";
import { H3 as h3 } from "./src/app/blog/components/h3";
import { OL as ol } from "./src/app/blog/components/ol";
import { UL as ul } from "./src/app/blog/components/ul";
import { LI as li } from "./src/app/blog/components/li";
import { HR as hr } from "./src/app/blog/components/hr";
// import { Code as code } from "./src/app/blog/components/code";
// import { Tweet } from "./src/app/blog/components/tweet";
import Image from "next/image";
import { Figure } from "./src/app/blog/components/figure";
// import { Snippet } from "./src/app/blog/components/snippet";
import { Caption } from "./src/app/blog/components/caption";
import { YouTube } from "./src/app/blog/components/youtube";
import { Ref, FootNotes, FootNote } from "./src/app/blog/components/footnotes";
import { Blockquote as blockquote } from "./src/app/blog/components/blockquote";
import React from "react";
import 'highlight.js/styles/atom-one-dark.css';

// Memoized Image component to prevent re-renders unless props change
const MemoizedImage = React.memo(function MemoizedImage({
  src,
  alt,
  width,
  height,
  priority,
  loading = "eager"
}: {
  src: string;
  alt?: string;
  width: number;
  height: number;
  priority?: boolean;
  loading?: string
}) {
  return (
    <Image
      src={src}
      alt={alt || "Image"}
      width={width}
      height={height}
//       quality={90}
      priority
    />
  );
});

export function useMDXComponents(components?: { [component: string]: React.ComponentType }) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
//     code,
//     pre: Snippet,
//     img: Image,
    blockquote,
//     Tweet,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
          const { src, alt } = props;

          // Return null if src is undefined
          if (!src) {
            return null; // No image rendered
          }

          // Provide a numeric width and height to define the aspect ratio
          const width = 620; // Width in pixels
          const height = 400; // Height in pixels

          return (
            <MemoizedImage
              src={src}
              alt={alt || "Image"}
              width={width}
              height={height}
              loading={"lazy"}
            />
          );
        },
    Figure,
    Caption,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  };
}