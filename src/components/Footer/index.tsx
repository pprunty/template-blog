import Image from 'next/legacy/image';

export default function Footer() {
  return (
    <footer className="flex text-md flex-col items-center pb-4">
      <Image src="/images/line.svg" fill="currentColor" width="125" height="54" />
      <div className="flex justify-center mt-10">
        <a
          className="transition hover:underline"
          href="https://github.com/mayandev/notion-avatar"
        >
          GitHub
        </a>
        <span className="mx-2">·</span>
        <a
          className="hover:underline"
          href="https://twitter.com/phillzou"
        >
          Twitter
        </a>
        <span className="mx-2">·</span>
        <a
          className="transition hover:underline"
          href="https://www.buymeacoffee.com/"
        >
          Buy me a coffee
        </a>
        <span className="mx-2">·</span>
        <a
          className="transition hover:underline"
          href="https://www.strava.com/athletes/72636452"
        >
          Strava
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">
        Developed by{" "}
        <a
          href="https://twitter.com/felix12777"
          className="hover:underline"
        >
          Patrick Prunty
        </a>{" "}
        under{" "}
        <a
          className="hover:underline"
          href="https://opensource.org/license/mit"
        >
          MIT license
        </a>
      </div>
    </footer>
  );
}