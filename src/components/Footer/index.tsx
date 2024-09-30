import { AUTHOR } from '@/config'; // Adjust the path to your config file

export default function Footer() {
  return (
    <footer className="flex text-md flex-col items-center pb-4 pt-4 mt-20 font-mono">
      {/* Parent container that sets the color */}
      <div className="w-[125px] h-[54px] text-black dark:text-white">
        {/* SVG using currentColor to inherit text color */}
        <svg
          width="126"
          height="55"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M117.397 6.569c-.93-.704-1.932-1.044-3.176-.603.898 1.49 2.132.53 3.176.603m-10.185-.603c-1.92-1.078-3.868-.539-5.812-.334l5.812.334m-48.83 42.26c2.905.69 5.275.147 7.421-1.908-2.802.576-4.95 1.953-7.42 1.907M50.25 16.513c-.329-.839-.877-.697-1.415-.471-1.347.565-2.354 1.786-3.878 2.03-.267.043-.355.404-.236.613.142.248.474.627.627.586.85-.227 2.358-.508 2.388-.873.14-1.723 1.615-1.385 2.514-1.885M99.388 5.57c-4.438-.64-8.91-.036-13.384.196-5.474.283-10.878 1.346-16.209 2.433-5.126 1.045-10.03 3.191-15.025 4.879-.414.14-1.208.156-.946.865.17.456.817.43 1.283.182 1.59-.846 3.306-1.36 4.971-2.015 8.829-3.472 18.087-4.847 27.427-5.79 3.946-.4 7.921-.509 11.883-.75M58.253 46.482c.957-.09 1.701-.133 2.438-.235 5.717-.796 10.795-7.284 7-13.643-2.777-4.655-6.478-8.348-10.493-11.856-1.294-1.13-2.398-.987-3.61-.331-1.832.99-3.608 2.09-5.376 3.195-1.025.64-2.375.967-2.945 2.078-.532 1.037-2.361.592-2.223 2.19-2.362.833-2.1 3.4-3.2 5.07-.33.505-1.301.908-.95 1.748.442 1.06.78 2.154 1.59 3.072 2.373 2.69 5.488 4.265 8.523 5.97 2.938 1.65 6.1 2.52 9.246 2.742m.961-28.707c4.857 3.716 8.562 7.92 11.338 12.847 2.323 4.125 4.021 8.503 2.89 13.442-1.012 4.42-3.962 7.08-7.836 9.005-4.98 2.475-9.826 1.448-14.376-.867-3.663-1.865-7.496-3.622-10.369-6.793-3.24-3.576-6.593-7.047-6.88-12.324-.237-4.325 1.496-7.729 4.393-10.745 2.847-2.966 6.18-5.283 9.651-7.416-1.93-2.837-5.651-2.148-7.734-4.55-.482-.557-2.075-.135-1.925-1.752.034-.37-.379-.264-.562-.124-1.794 1.375-3.208-.577-4.882-.587-1.54-.01-2.88-.965-4.131-1.968-.397-.318-1.221-.374-1.947-.346-1.535.06-3.205.716-4.583-.66-.333-.334-.838.037-1.248.136-.354.086-.668.365-1.062.14-.754-.428-.755-.428-1.042.466-2.29-1.868-4.992-1.446-7.631-1.408-1.715.025-3.487.6-5.097-.645-.17-.132-1.359-1.138-1.797.47-.245.894-3.344.264-3.745-.624-.197-.437-.209-.7.123-.963.309-.245.613-.059.834.165.77.78 1.412 1.508 2.078-.19.131-.334 1.43-.415 2.118-.269 1.085.231 1.294-.296 1.36-1.294.687.585 1.413.997 1.846 1.615.905 1.295 1.79.208 2.678.118.167-.017.453-.095.294-.327-.48-.705-.492-1.506.319-1.686 1.111-.246 2.372-.209 3.38.42.666.415.888.847 1.787.104 1.054-.872 2.475.188 3.76.19.376.001-.046.437-.135.691-.223.635.243.654.709.757.844.188.394-.312.33-.575-.137-.573.204-.627.622-.628 2.37-.004 4.588.868 6.894 1.234.7.111.238.844.309 1.505 1.016-1.22 2.031-2.071 2.722.1.074.231.24.5.533.209.157-.156.296-.545.379-.527.327.071.174.37.17.603-.005.313.202.492.481.385 2.923-1.12 5.06.74 7.097 2.19a36.287 36.287 0 0 0 6.947 3.901c.939.396 1.313.924 1.735 1.635 1.023-.748 2.232-.052 3.38-.545 3.26-1.399 6.575-2.706 9.954-3.778 7.969-2.53 16.187-3.668 24.506-4.31 5.553-.428 11.096-.25 16.644-.258 1.165-.002 2.334.21 3.498.345.536.062 1.285-.006 1.308.736.02.672-.892.186-1.196.7 1.72 1.018 3.586.268 5.489.731-.2-1.17-1.299-.934-1.726-1.706.948 0 1.841-.153 2.662.029 2.467.547 5.007.752 7.413 1.59.428.148 1.083-.08.428.834-.476.664.37.561.66.369.765-.505 1.547-.185 1.751.383.278.774 1.047 1.589.564 2.457-.287.517-.727 1.71-1.652.454-.147-.198-.445-.527-.534-.486-2.449 1.106-4.551-2.127-7.066-.55-.482.303-1.212-.134-1.814-.186-1.52-.134-3.045-1.217-4.608.059-.733.597-1.313-.493-2.156-.524-3.1-.116-6.003.878-9.004 1.276-.365.047-.751-.074-1.12-.036-3.176.33-6.465-.332-9.522 1.089-.89.414-1.729-.23-2.688-.166-3.15.209-6.116 1.528-9.311 1.387-.59-.026-1.338.316-1.787 1.06-.217.36-1.041.592-1.523.505-3.304-.59-6.111.948-9.038 1.997-1.281.458-2.572.888-4.307 1.484"
            fillRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex justify-center mt-10 text-xs">
        <a className="inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]" href={AUTHOR.githubUrl}>
          GitHub
        </a>
          <span className="mx-2 flex items-center">·</span>
        <a className="inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]" href={AUTHOR.twitterUrl}>
          Twitter
        </a>
  <span className="mx-2 flex items-center">·</span>
        <a className="inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]" href={AUTHOR.redditUrl}>
          Reddit
        </a>
  <span className="mx-2 flex items-center">·</span>
        <a className="inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]" href={AUTHOR.stravaUrl}>
          Strava
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center text-xs">
        Developed by{" "}
        <a href={AUTHOR.twitterUrl} className="hover:underline">
          Patrick Prunty
        </a>{" "}
        under{" "}
        <a className="hover:underline" href="https://opensource.org/license/mit">
          MIT license
        </a>
      </div>
    </footer>
  );
}
