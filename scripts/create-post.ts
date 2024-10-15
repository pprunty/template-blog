import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import boxen, { Options } from 'boxen'; // Import boxen for styled logs
import { AUTHOR, SITE_URL } from '../src/config'; // Import AUTHOR and SITE_URL from config

// Utility function to format post title as slug
const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -

// Function to validate date format and provide a default if invalid
const validateOrDefaultDate = (input: string): string => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0]; // Get today's date
  if (dateRegex.test(input)) {
    return input; // If valid date, return it
  } else {
    console.log(
      boxen(`⚠️ Invalid date provided. Defaulting to today's date: ${currentDate}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'round' as Options['borderStyle'], // Cast to valid type
      })
    );
    return currentDate; // Default to current date if invalid
  }
};

interface PostAnswers {
  title: string;
  description: string;
  date: string;
  image: string;
  keywords: string;
  author: string;
  authorUrl: string;
}

async function createPost(): Promise<void> {
  // Get author and authorUrl from config file
  const defaultAuthor = AUTHOR.name || "John Doe";
  const defaultAuthorUrl = AUTHOR.url || "https://johndoe.com";

  // Prompt the user for post details
  const answers: PostAnswers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your post:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the description of your post:',
    },
    {
      type: 'input',
      name: 'date',
      message: "Enter the date of your post (YYYY-MM-DD) [Default: Today's date]:",
      default: new Date().toISOString().split('T')[0],
      filter: validateOrDefaultDate, // Use filter to modify invalid date input
    },
    {
      type: 'input',
      name: 'image',
      message: 'Enter the image for your post (absolute path):',
      default: 'placeholders/__placeholder.png',
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Enter keywords for your post (comma separated):',
    },
    {
      type: 'input',
      name: 'author',
      message: `Enter the author of your post [Default: ${defaultAuthor}]:`,
      default: defaultAuthor,
    },
    {
      type: 'input',
      name: 'authorUrl',
      message: `Enter the author's URL [Default: ${defaultAuthorUrl}]:`,
      default: defaultAuthorUrl,
    },
  ]);

  // Strip leading and trailing whitespace from inputs
  const cleanedAnswers = {
    title: answers.title.trim(),
    description: answers.description.trim(),
    date: answers.date, // No need to trim since it's already validated and formatted
    image: answers.image.trim(),
    keywords: answers.keywords.trim(),
    author: answers.author.trim(),
    authorUrl: answers.authorUrl.trim(),
  };

  // Generate the slug and directory
  const slug = slugify(cleanedAnswers.title);
  const postDir = path.join(process.cwd(), 'src', 'posts', slug); // Use process.cwd() for root directory

  // Create the directory for the post
  fs.ensureDirSync(postDir);

  // If the image is not the default, copy it to the public/images directory
  let imageName = path.basename(cleanedAnswers.image);
  const imageDestination = path.join(process.cwd(), 'public', 'images', imageName); // Use process.cwd() for root

console.log("cleaned image answers = " + cleanedAnswers.image)
  if (cleanedAnswers.image !== 'placeholders/__placeholder.png') {
    try {
      fs.copySync(cleanedAnswers.image, imageDestination);

      // Create a success message box
      const message = `✅ Image has been copied to ${imageDestination}`;
      console.log(
        boxen(message, {
          padding: 1,
          margin: 1,
          borderStyle: 'double' as Options['borderStyle'], // Cast to valid type
        })
      );
    } catch (err) {
      // Create an error message box
      const errorMessage = `❌ Failed to copy image: ${(err as Error).message}`;
      console.error(
        boxen(errorMessage, {
          padding: 1,
          margin: 1,
          borderStyle: 'double' as Options['borderStyle'], // Cast to valid type
        })
      );
    }
  } else {
    // Create an info message box
    const infoMessage = `ℹ️ Default image placeholder used, skipping image copy.\nYou can update metadata.image.url in your page.mdx later to add a custom image.`;
    imageName = cleanedAnswers.image;
    console.log(
      boxen(infoMessage, {
        padding: 1,
        margin: 1,
        borderStyle: 'double' as Options['borderStyle'], // Cast to valid type
      })
    );
  }

  // Define the MDX content
  const mdxContent = `import { SITE_URL } from '@/config';

export const metadata = {
  title: "${cleanedAnswers.title}",
  description: "${cleanedAnswers.description}",
  image: "/images/${imageName}",
  date: "${cleanedAnswers.date}",
  author: "${cleanedAnswers.author}",
  authorUrl: "${cleanedAnswers.authorUrl}",
  openGraph: {
    title: "${cleanedAnswers.title}",
    description: "${cleanedAnswers.description}",
    url: "/blog/${slug}",
    images: [
      {
        url: \`\${SITE_URL}/images/${imageName}\`,
        alt: "${cleanedAnswers.title}",
      },
    ],
    type: 'article',
    tags: [${cleanedAnswers.keywords.split(',').map((kw) => `"${kw.trim()}"`).join(', ')}],
  },
  twitter: {
    card: "summary_large_image",
    title: "${cleanedAnswers.title}",
    description: "${cleanedAnswers.description}",
    image: \`\${SITE_URL}/images/${imageName}\`,
  },
  keywords: [${cleanedAnswers.keywords.split(',').map((kw) => `"${kw.trim()}"`).join(', ')}],
  slug: "${slug}",
  readingTime: 1
};

Start adding your blog post content here...
`;

  // Write the MDX file
  const mdxFilePath = path.join(postDir, 'page.mdx');
  fs.writeFileSync(mdxFilePath, mdxContent, 'utf8');

  // Boxed log for post creation
  const combinedMessage = `✅ Your post "${cleanedAnswers.title}" has been created at:\n\n ${mdxFilePath}.\n\n` +
    `✏️ Reminder: Time to start writing great content!.\n`;
  console.log(
    boxen(combinedMessage, {
      padding: 1,
      margin: 1,
      borderStyle: 'double' as Options['borderStyle'], // Cast to valid type
    })
  );
}

// Run the function to create the post
createPost();
