// src/app/blog/components/InlineCode.tsx
import React from 'react';

export function InlineCode({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  // Check if the code block has a language class (e.g., "language-js")
  const isInlineCode = !className;

  if (isInlineCode) {
    return (
      <code className="font-mono text-sm">
        {children}
      </code>
    );
  }

  // For code blocks, you might want to handle them differently
  return (
    <pre className="">
      <code className={className}>{children}</code>
    </pre>
  );
}
