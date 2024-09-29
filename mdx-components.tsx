import { A as a } from "./src/app/blog/(post)/components/a";
import { P as p } from "./src/app/blog/(post)/components/p";
import { H1 as h1 } from "./src/app/blog/(post)/components/h1";
import { H2 as h2 } from "./src/app/blog/(post)/components/h2";
import { H3 as h3 } from "./src/app/blog/(post)/components/h3";
import { OL as ol } from "./src/app/blog/(post)/components/ol";
import { UL as ul } from "./src/app/blog/(post)/components/ul";
import { LI as li } from "./src/app/blog/(post)/components/li";
import { HR as hr } from "./src/app/blog/(post)/components/hr";
// import { Code as code } from "./src/app/blog/(post)/components/code";
// import { Tweet } from "./src/app/blog/(post)/components/tweet";
import Image from "next/image";
import { Figure } from "./src/app/blog/(post)/components/figure";
// import { Snippet } from "./src/app/blog/(post)/components/snippet";
import { Caption } from "./src/app/blog/(post)/components/caption";
import { YouTube } from "./src/app/blog/(post)/components/youtube";
import { Ref, FootNotes, FootNote } from "./src/app/blog/(post)/components/footnotes";
import { Blockquote as blockquote } from "./src/app/blog/(post)/components/blockquote";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
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
          const width = 600; // Width in pixels
          const height = 400; // Height in pixels

          return (
            <Image
              src={src}
              alt={alt || "Image"}
              width={width}
              height={height}
              quality={90}
              priority={true}
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