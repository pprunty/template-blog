'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const MIN_ITEMS_TO_SHOW = 2;

function getHeadersFromDOM(): TOCItem[] {
  const headers = Array.from(
    document.querySelector('article')?.querySelectorAll('h1, h2, h3, h4') || [],
  );
  headers.forEach((header) => {
    header.classList.add('scroll-offset');
  });

  return headers
    .map((header) => {
      const anchor = header.querySelector('a[id]');
      const id = anchor?.getAttribute('id') || '';
      const fullText = header.textContent || '';
      const text = fullText.split('[#')[0].replace(/^#\s*/, '').trim();
      const level = parseInt(header.tagName[1]);
      return { id, text, level };
    })
    .filter((item) => item.id && item.text);
}

export function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const headers = getHeadersFromDOM();
      setToc(headers);
    }
  }, [mounted]);

  useEffect(() => {
    if (!mounted || toc.length === 0) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.querySelector('a[id]')?.getAttribute('id');
          if (id) setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -35% 0px',
    });

    document
      .querySelectorAll('article h1, article h2, article h3, article h4')
      .forEach((header) => {
        observer.observe(header);
      });

    return () => observer.disconnect();
  }, [toc, mounted]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(`a[id="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      router.push(`#${id}`, { scroll: false });
      setIsOpen(false);
    }
  };

  const generateNumbering = (tocItems: TOCItem[], index: number) => {
    const numberingArray: number[] = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i <= index; i++) {
      const { level } = tocItems[i];
      numberingArray[level - 1] += 1;
      for (let j = level; j < numberingArray.length; j++) {
        numberingArray[j] = 0;
      }
    }

    return numberingArray
      .filter((num) => num !== 0)
      .map((num) => `${num}.`)
      .join('');
  };

  if (!mounted || !toc || toc.length < MIN_ITEMS_TO_SHOW) return null;

  return (
    <div className="w-full bg-[#fcfcfc] dark:bg-[#000] pt-4 pb-1 sticky top-0 z-50">
      <div className="container mx-auto relative">
        {/* Menu Button with Blur Effect */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-2 py-2 rounded-lg border dark:border-[#313131] border-gray-200 bg-transparent transition ease-in-out duration-200 hover:backdrop-blur-md hover:bg-opacity-80"
          aria-label="Toggle table of contents"
        >
          <span className="flex items-center">
            {/* Menu Icon */}
            <div className="mr p-2 rounded-lg transition ease-in-out duration-200 hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424]">
              <svg
                data-testid="geist-icon"
                height="16"
                width="16"
                viewBox="0 0 16 16"
                className="text-gray-600 dark:text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 4C3.19036 4 3.75 3.44036 3.75 2.75C3.75 2.05964 3.19036 1.5 2.5 1.5C1.80964 1.5 1.25 2.05964 1.25 2.75C1.25 3.44036 1.80964 4 2.5 4ZM2.5 9.25C3.19036 9.25 3.75 8.69036 3.75 8C3.75 7.30964 3.19036 6.75 2.5 6.75C1.80964 6.75 1.25 7.30964 1.25 8C1.25 8.69036 1.80964 9.25 2.5 9.25ZM3.75 13.25C3.75 13.9404 3.19036 14.5 2.5 14.5C1.80964 14.5 1.25 13.9404 1.25 13.25C1.25 12.5596 1.80964 12 2.5 12C3.19036 12 3.75 12.5596 3.75 13.25ZM6.75 2H6V3.5H6.75H14.25H15V2H14.25H6.75ZM6.75 7.25H6V8.75H6.75H14.25H15V7.25H14.25H6.75ZM6.75 12.5H6V14H6.75H14.25H15V12.5H14.25H6.75Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            {/* Circular Progress Indicator */}
            <svg height="16" width="16" className="mx-2 transform -rotate-90">
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                stroke="currentColor"
                className="text-gray-400 dark:text-gray-400"
                strokeWidth="2"
              />
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                stroke="currentColor"
                className="text-blue-400 dark:text-blue-400"
                strokeWidth="2"
                strokeDasharray="37.7"
                strokeDashoffset={37.7 - (scrollProgress * 37.7) / 100}
                style={{ transition: 'stroke-dashoffset 0.3s ease' }}
              />
            </svg>

            {/* Contents Text */}
            <span className="font-mono p-2 text-xs text-gray-700 dark:text-gray-300">
              Contents
            </span>
          </span>

          {/* Scroll to Top Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="ml-2 p-2 rounded-lg transition ease-in-out duration-200 hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424]"
          >
            <svg
              fill="currentColor"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="text-gray-600 dark:text-gray-300"
            >
              <path
                d="M19.71,9.29l-7-7a1,1,0,0,0-1.42,0l-7,7a1,1,0,0,0,1.42,1.42L11,5.41V21a1,1,0,0,0,2,0V5.41l5.29,5.3a1,1,0,0,0,1.42,0A1,1,0,0,0,19.71,9.29Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div
            className="absolute left-0 w-full mt-2 border border-gray-200 dark:border-[#313131] bg-[#fcfcfc] dark:bg-[#000] rounded-lg shadow-xl z-50 transition-transform transform duration-300 ease-in-out"
            style={{
              transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
              opacity: isOpen ? 1 : 0,
            }}
          >
            <div className="max-h-[calc(80vh-8rem)] overflow-y-auto">
              <div className="p-4">
                <ul className="space-y-2">
                  {toc.map((item, index) => (
                    <li
                      key={index}
                      style={{ paddingLeft: `${(item.level - 1) * 1.5}rem` }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleClick(e, item.id)}
                        className={`block text-xs font-mono hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                          activeId === item.id
                            ? 'text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {generateNumbering(toc, index)} {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
