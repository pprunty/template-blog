// import Image from 'next/legacy/image';

export default function Footer() {
  return (
    <footer className="flex text-md flex-col items-center pb-4">
     {/* <Image src="/images/line.svg" fill="currentColor" width="125" height="54" /> */}
      <div className="flex justify-center mt-10">
        <a
          className="transition hover:underline"
          href="https://github.com/mayandev/notion-avatar"
        >
          GitHub
        </a>
        <span className="mx-2">·</span>
        <a
          className="transition hidden md:inline-block hover:underline"
          href="https://dribbble.com/phillzou"
        >
          Dribbble
        </a>
        <span className="mx-2 hidden md:inline-block">·</span>
        <a className="hover:underline" href="https://twitter.com/phillzou">
          Twitter
        </a>
        <span className="mx-2">·</span>
        <a className="transition hover:underline" href="https://www.buymeacoffee.com/">
          Buy me a coffee
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">
        <a
          href="https://abstractlab.gumroad.com/l/noto-avatar"
          className="hover:underline"
        >
          &copy; Illustrations
        </a>
        Designed by
        <a href="https://twitter.com/felix12777" className="hover:underline">
          Felix Wong
        </a>
        under design
        <a
          className="hover:underline"
          href="https://creativecommons.org/publicdomain/zero/1.0/"
        >
          CC0 license
        </a>
      </div>
    </footer>
  );
}
