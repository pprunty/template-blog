"use client";

import sizeOf from "image-size";
import { join } from "path";
import { readFile } from "fs/promises";
import NextImage from "next/image";
import styled from "styled-components";
import { Caption } from "./caption"; // Assuming Caption is a styled component or another component

// Styled-components
const ImageWrapper = styled.span`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TypeScript types
interface ImageProps {
  src: string;
  alt?: string;
  width?: number | null;
  height?: number | null;
}

export async function Image({ src, alt: originalAlt, width = null, height = null }: ImageProps) {
  const isDataImage = src.startsWith("data:");

  if (isDataImage) {
    /* eslint-disable @next/next/no-img-element */
    return <img src={src} alt={originalAlt ?? ""} />;
  } else {
    if (width === null || height === null) {
      let imageBuffer: Buffer | null = null;

      if (src.startsWith("http")) {
        imageBuffer = Buffer.from(await fetch(src).then((res) => res.arrayBuffer()));
      } else {
        if (!process.env.CI && process.env.VERCEL_URL && process.env.NODE_ENV === "production") {
          imageBuffer = Buffer.from(
            await fetch(`https://${process.env.VERCEL_URL}${src}`).then((res) => res.arrayBuffer())
          );
        } else {
          imageBuffer = await readFile(
            new URL(join(import.meta.url, "..", "..", "..", "..", "public", src)).pathname
          );
        }
      }

      const computedSize = sizeOf(imageBuffer);
      if (computedSize.width === undefined || computedSize.height === undefined) {
        throw new Error("Could not compute image size");
      }

      width = computedSize.width;
      height = computedSize.height;
    }

    let alt: string | null = null;
    let dividedBy = 100;

    if (typeof originalAlt === "string") {
      const match = originalAlt.match(/(.*) (\[(\d+)%\])?$/);
      if (match != null) {
        alt = match[1];
        dividedBy = match[3] ? parseInt(match[3]) : 100;
      }
    } else {
      alt = originalAlt ?? null;
    }

    const factor = dividedBy / 100;

    return (
      <ImageWrapper>
        <NextImage
          width={width * factor}
          height={height * factor}
          alt={alt ?? ""}
          src={src}
        />
        {alt && <Caption>{alt}</Caption>}
      </ImageWrapper>
    );
  }
}
