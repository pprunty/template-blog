# blog.v2

[![Next.js](https://img.shields.io/badge/Next.js-15-blue?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-ready-green?style=flat-square&logo=pwa)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/pprunty/blog.v2?style=flat-square&logo=github)](https://github.com/pprunty/blog.v2/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/pprunty/blog.v2?style=flat-square&logo=github)](https://github.com/pprunty/blog.v2/network/members)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fpprunty%2Fblog.v2&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=true)](https://hits.seeyoufarm.com)
[![Lighthouse Accessibility Badge](./assets/lighthouse/lighthouse_accessibility.svg)](https://github.com/pprunty/blog.v2)
[![Lighthouse Best Practices Badge](./assets/lighthouse/lighthouse_best-practices.svg)](https://github.com/pprunty/blog.v2)
[![Lighthouse Performance Badge](./assets/lighthouse/lighthouse_performance.svg)](https://github.com/pprunty/blog.v2)
[![Lighthouse SEO Badge](./assets/lighthouse/lighthouse_seo.svg)](https://github.com/pprunty/blog.v2)

[blog.v2](https://github.com/pprunty/blog.v2) is a high-performance, minimalistic and feature-rich blog template built
with NextJS 15.

For an immersive experience with the `blog.v2` template, we recommend exploring
our [Guide to using the blog.v2 Template](https://blog-v2-template.vercel.app/blog/blog-v2-template-guide). This
comprehensive resource not only provides detailed documentation but also serves as a live demonstration of the
template's capabilities, allowing you to see its features in action.

![blog.v2 showcase 1](https://blog-v2-template.vercel.app/images/blog.v2-showcase.png)
<p align="center">Showcasing blog.v2 sleek, responsive design in dark and light modes.</p>

![blog.v2 showcase 2](https://blog-v2-template.vercel.app/images/blog.v2-showcase-2.png)
<p align="center">Showcasing blog.v2's Google Lighthouse 100% performance results on mobile devices and example blog post page.</p>

I created this blog template to address the need for a high-performance, minimalistic, yet feature-rich blogging
platform. The inspiration and journey behind creating this project are detailed in my
article: [New Blog. Who Dis?](https://patrickprunty.com/blog/new-blog-who-dis).

Here, you'll gain valuable insights into the template's creation process and also get to see the template in action on
my [personal blog](https://patrickprunty.com).

For commercial enquires regarding custom implementations, feature requests, or any questions you might have about using
this theme in a professional context, please contact me
at [patrickprunty.business@gmail.com](mailto:patrickprunty.business@gmail.com).

For single-click deployment of this template with [Vercel](https://vercel.com), click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pprunty/blog.v2)

## Feature Overview (#feature-overview)

- ⚡ Built with NextJS 15 for optimal performance
- 🔷 TypeScript support for enhanced type safety and developer experience
- 🌓 Dark mode/light mode switch with no flicker and automatic theme preference detection (based on user's OS settings)
- 📱 PWA (Progressive Web App) enabled using next-pwa and automatic script for generating icons using sharp
- 🎨 Styled with Tailwind CSS for easy customization
- 🔍 SEO optimized blog posts with automated sitemap generation, Open Graph, Twitter Card, and JSON-LD (Schema.org).
- 📝 MDX integration for writing blog posts in Markdown
- 🔗 Recommended posts section using metadata keywords and randomization
- 📊 Google Analytics integration
- 🖼️ Optimized images for faster loading
- 🚀 100% peformance, seo, accessibility, best practices score on Lighthouse out of the box on both mobile and desktop
  devices
- 📤 Native Share API for easy social sharing
- 📊 View counter for blog posts using CountAPI

## Quick Start (#quick-start)

### Deployment (#deployment)

I highly recommend supporting the innovative creators behind [NextJS](https://nextjs.org)
and [Vercel](https://vercel.com) by deploying this template using their infrastructure.

The `blog.v2` template offers a seamless, one-click deployment experience on [Vercel](https://vercel.com), completely
free of charge. This not only streamlines your workflow but also ensures optimal performance and reliability:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pprunty/blog.v2)

For deployment on other platforms, consult the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

After deployment, update the `src/app/config.ts` file with your site and personal information. Locate the config
file [here](./src/app/config.ts).

Vercel assigns a URL with a `.vercel.app` suffix. Update the `SITE_URL` in `src/app/config.ts` to match this URL. You
can modify the URL in the Vercel project dashboard to `<your_name>.vercel.app`.

Future pushes to this repository's branches will trigger deployments to Vercel.

### Development (#development)

1. Clone the repository you forked from this template via Vercel:

```
git clone https://github.com/<your_username>/<your_repository_name>.git
```

2. Navigate to the project directory:

```
cd <your_repository_name>
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The next steps are to configure your blog with your personal information and social media links.

## Configuration (#configuration)

Update the `src/app/config.ts` file with your site and personal information:

```typescript
export const SITE_URL = "https://yourdomain.vercel.app"; // TODO: Replace this with your site URL from Vercel

export const AUTHOR = {
  name: "Your Name", // TODO: Replace this with your name    
  url: `${SITE_URL}/about`,
  publisherName: "Your Blog Name", // TODO: Replace this with your blog name
  publisherLogo: `${SITE_URL}/logo.png`, // TODO: Replace this with your logo
  twitterUrl: "https://twitter.com/pprunty", // TODO: Replace this with your twitter URL
  stravaUrl: "https://www.strava.com/athletes/72636452", // TODO: Replace this with your strava URL (if you don't use strava, make update in @/app/components/Footer/index.tsx)
  githubUrl: "https://github.com/pprunty", // TODO: Replace this with your github URL
  linkedinUrl: "https://www.linkedin.com/in/pprunty", // TODO: Replace this with your linkedin URL
  redditUrl: "https://www.reddit.com/user/pprunty/", // TODO: Replace this with your reddit URL
};

export const GA_MEASUREMENT_ID = "YOUR-GA-MEASUREMENT-ID"; // TODO: Replace this with your Google Analytics Measurement ID
export const DEFAULT_COUNTER_ID = "your-counter-id"; // TODO: Replace this with your self-generated unique counter ID

export const DEFAULT_SECTION = "Your Default Section"; // TODO: Replace this with your default section name

export const DEFAULT_KEYWORDS = ["keyword1", "keyword2", "keyword3"]; // TODO: Replace this with your default keywords for SEO
```

- `SITE_URL`: Set this to your blog's main URL, provided by Vercel.
- `AUTHOR`: Replace all fields with your personal information and social media links.
- `GA_MEASUREMENT_ID`: Replace with your Google Analytics Measurement ID.
- `DEFAULT_COUNTER_ID`: Set a unique identifier for your default counter (used with CountAPI).
- `DEFAULT_SECTION`: Set the default section name for your blog posts.
- `DEFAULT_KEYWORDS`: Add an array of default keywords that describe your blog's content.
- `publisherLogo`: Replace the logo in the public/images folder with your own `logo.png`. Ensure you keep the same
  filename as this will be referenced for PWA manifest and SEO.

```admonish warning
Ensure you update the `DEFAULT_COUNTER_ID` with a unique identifier for your blog posts. If you do not, the view counter will be shared with other developers using this template and you will not be able to distinguish between views for your posts.
```

### Other Configurations

- Modify `next.config.js` for PWA settings and other Next.js configurations.
- Adjust Tailwind CxSS theme in `tailwind.config.js`.
- Update SEO settings in `src/app/layout.tsx` and other relevant components.

Remember to replace all placeholder values with your actual information before deploying your blog.

Now that you have your blog deployed and configured, it's time to start writing posts.

## Writing Posts

To add a new post, follow these steps:

1. Create a new `.mdx` file in the `src/posts` directory.
2. Add NextJS `metadata` at the top of the file for SEO metadata:

```admonish warning
The metadata object is required for rendering the blog post listing page and without this, your post will not be displayed on the blog page.
```

```typescript
import { SITE_URL, AUTHOR } from '@/config';

export const metadata = {
  title: "Your Post Title",
  image: `/images/post-image.jpg`,
  description: "A brief description of your post.",
  date: "YYYY-MM-DD",
  openGraph: {
    title: "Your Post Title",
    description: "A brief description of your post.",
    url: "/blog/your-post-slug", // TODO: Update this with the slug (your-post-slug) of your post located in src/posts/your-post-slug/page.mdx path
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/post-image.jpg`,
        alt: "An image related to the post",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Post Title",
    description: "A brief description of your post.",
    image: `${SITE_URL}/images/post-image.jpg`,
  },
  keywords: [
    "keyword1",
    "keyword2",
    "keyword3",
    "keyword4",
    "keyword5",
  ],
  metadataBase: new URL(SITE_URL)
};
```

Note: Ensure you have an `images` folder in the `public` directory with images related to your post. For reference, see
the [images](./public/images) folder in this repo and the example posts in the [posts](./src/posts) directory.

> See the [NextJS Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) documentation for
> more information on `metadata` and the available options.

3. Write your post content using Markdown syntax.

Here's an example of how your MDX content might look:

```md
import { SITE_URL, AUTHOR } from '@/config';

export const metadata = {
... your metadata here
};

# My First Post

This is a sample post written in MDX.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nulla facilisi.

## Code Example

Here's a simple code example:

```javascript
const greeting = "Hello, world!";
console.log(greeting);
\```

## Conclusion

In conclusion, this is a sample post written in MDX.
```

Once you have written your first port, you can add details to the About page to provide visitors with information about
you, your blog, or detail your projects.

### About Page

The About page is an important part of your blog, providing visitors with information about you or your blog. To create
or update the About page:

1. Navigate to `src/app/about/page.tsx`.
2. Edit the content of this file to include your personal information, blog purpose, or any other relevant details.
3. You can use JSX and Tailwind CSS classes to style your About page.

Example structure for the About page:

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about the author and this blog',
}

export default function About() {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1>About Me</h1>
      <p>Hello! I'm [Your Name], the author of this blog.</p>
      <p>Here you can add more information about yourself, your background, and the purpose of your blog.</p>
      {/* Add more sections as needed */}
    </div>
  )
}
```

## Features

### MDX Components

The `mdx-components.tsx` file is crucial for customizing how MDX content is rendered in your Next.js application. It
defines a set of React components that will be used to render different elements within your MDX files. Here's a
breakdown of how it works and how to use some common components:

#### How it works

1. The file imports various custom components for different HTML elements (e.g., `p`, `h1`, `a`, etc.).
2. The `useMDXComponents` function is exported, which takes an object of components and returns a new object that
   combines the default components with any custom ones.
3. Each HTML element is mapped to a custom React component, allowing for enhanced styling and functionality.

#### Editing Component Styles

To edit the style of a component:

1. Locate the component file in the `@/app/blog/components/` directory.
2. Open the file (e.g., `p.tsx` for paragraphs) and modify the component's JSX and CSS.
3. Use Tailwind CSS classes or custom CSS to style the component as needed.

#### Using Common Components in MDX

Here are examples of how to use some common components in your MDX files:

1. Paragraphs:
   ```mdx
   This is a paragraph.
   ```

2. Headings:
   ```mdx
   # H1 Heading
   ## H2 Heading
   ### H3 Heading
   ```

3. Links:
   ```mdx
   [Visit Google](https://www.google.com)
   ```

4. Lists:
   ```mdx
   - Unordered list item 1
   - Unordered list item 2

   1. Ordered list item 1
   2. Ordered list item 2
   ```

5. Images:
   ```mdx
   ![Alt text](/path/to/image.jpg)
   ```

6. Blockquotes:
   ```mdx
   > This is a blockquote.
   ```

7. YouTube Videos:
   ```mdx
   <YouTube videoId="dQw4w9WgXcQ" />
   ```

8. Footnotes:
   ```mdx
   This is a sentence with a footnote.<Ref id="1" />

   <FootNotes>
     <FootNote id="1">This is the footnote content.</FootNote>
   </FootNotes>
   ```

9. Horizontal Rule:
   ```mdx
   ---
   ```

10. Figure with Caption:
    ```mdx
    <Figure src="/path/to/image.jpg" alt="Description">
      <Caption>This is the caption for the image.</Caption>
    </Figure>
    ```

Remember that you can always refer to the individual component files in the `@/modules/mdx/components/` directory for
more detailed usage instructions and to customize their appearance and behavior.

> See the [MDX Documentation](https://mdxjs.com/getting-started/next/) for more information on writing posts in MDX.

### PWA (Progressive Web App)

This blog template is a PWA (Progressive Web App) and is enabled using the `next-pwa` library. This allows your blog to
be installed on your device's home screen, desktop, and be accessible even when offline.

To enable PWA features, you will need to update the `public/manifest.json` and `public/manifest.prod.json` files with
your PWA settings.

```json
{
  "name": "Your Blog Name",
  "short_name": "YourBlog",
  "description": "A brief description of your blog",
  "display": "standalone",
  "orientation": "any",
  "id": "/",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "icons/72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icons/96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "icons/128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icons/144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "icons/192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "icons/512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "icons/512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

In order to add a PWA icon for your blog, you will need to generate icons for your images. I recommend using an online
tool like [Manifest Generator](https://www.mridul.tech/tools/manifest-generator#google_vignette) to generate the icons
and manifest file you need.

Ensure your uploaded image is named "icon" and is at least 512x512 pixels for best results.

Doing this, all you need to do is download the icons and replace the existing ones in the `public/icons` directory. The
reference to the icons in the manifest should map to the name of your files,
i.e `512x512.png`, `192x192.png`, etc.

After generating the icons, you will need to replace the icons in the `public/icons` folder with the icons you
generated.

```admonish tip
The reference to the icons in the manifest should map to the name of your files, 
i.e `512x512.png`, `192x192.png`, etc. 
```

> See the [next-pwa documentation](https://github.com/shadowwalker/next-pwa) for more information on PWA settings and
> options.

### Related Posts (Recommended Posts)

The recommended posts are a feature of the blog template that allows you to add a list of posts that are related to the
current post. This is useful for recommending other posts to the reader.

The `components/RecommendedPosts.tsx` file is used to display the recommended posts.

This file uses basic keyword matching to find posts that are related to the current post. It matches the keywords in
the `metadata.keywords` array with three other posts. Additionally, it adds a random post to the list of recommended
posts. If there are no keyword matches with other posts, it will fill the remaining slots with random posts.

### Dark Mode

The dark mode is enabled via tailwindcss and the `src/app/components/ThemeSwitcher/theme-effect.tsx` file. The theme is
stored in `src/app/globals.css` and the theme toggle is in the `src/components/Header/index.tsx` file and
the `src/components/ThemeSwitcher/ThemeSwitcher.tsx` file.

The colors for the themes are:

* Dark Mode: #000 / #000000
* Light Mode: #fcfcfc

The theme will be set automatically based on the user's system settings on first load. The theme will be set
in `localStorage` so it will persist the user's theme choice.

#### Updating the Theme Colors

Currently, the easiest way to update the colors is to do a global search for `#000` (or `#000000`) and `#fcfcfc` and
replace them with your new colors.

## Code Highlighting

This blog template uses `highlight.js` for code highlighting in rendered markdown. The theme for the code highlighting
is `atom-one-dark.css`. You can find the `highlight.js` library [here](https://github.com/highlightjs/highlight.js).

To update the theme, you will need to:

1. Replace the `highlight.js` library with your preferred library.
2. Or simply replace the `import 'highlight.js/styles/atom-one-dark.css';` in the `mdx-components.tsx` file with your
   preferred theme's css file. To see the list of themes, see
   the [highlight.js themes](https://github.com/highlightjs/highlight.js/tree/main/src/styles)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Professional Use

If you're using this theme professionally or considering it for your business, I'd be thrilled to hear about your
experience. Your insights can help shape future updates and features. Please feel free to reach out via:

- Email: [your-email@example.com](mailto:your-email@example.com)
- Twitter: [@yourtwitter](https://twitter.com/yourtwitter)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/yourprofile)

I'm always open to discussions about custom implementations, feature requests, or any questions you might have about
using this theme in a professional context.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-pwa](https://github.com/shadowwalker/next-pwa)
- [MDX](https://mdxjs.com/)
- [CounterPI](https://github.com/counterpi/counterpi) - A lightweight analytics tool

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/pprunty/blog.v2](https://github.com/pprunty/blog.v2)