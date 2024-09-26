import Link from "next/link";
import ThemeSwitcher from '@/components/ThemeSwitcher';
import {Logo} from "@/components/Logo";

export default function Header() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <header className="w-full">
        <nav className="flex justify-between items-center py-4 w-full">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Right: Navbar Links */}
          <div className="flex items-center text-xs gap-2 sm:gap-4">
            <ThemeSwitcher />

            <Link
              href="/post"
              className="inline-flex font-mono hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="inline-flex font-mono items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
            >
              About
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
