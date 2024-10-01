"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Logo } from '@/components/Logo';
import SubscribeModal from '@/components/SubscribeModal'; // We'll create this component

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="flex mb-5 md:mb-10 items-center">
        <nav className="flex justify-between items-center w-full">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Right: Navbar Links */}
          <div className="flex items-center text-xs gap-2 sm:gap-4">
            <ThemeSwitcher />

            <Link
              href="/about"
              className="inline-flex font-mono items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
            >
              About
            </Link>

            <button
              onClick={handleSubscribeClick}
              className="
                inline-flex text-xs items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]
              "
            >
              <EmailIcon className="mr-2" /> Subscribe
            </button>
          </div>
        </nav>
      </header>

      {/* Subscribe Modal */}
      <SubscribeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      width={16}
      height={16}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Subscribe</title>
      <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"
      ></path>
      <path
        className="clr-i-solid clr-i-solid-path-2"
        d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"
      ></path>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
  );
}
