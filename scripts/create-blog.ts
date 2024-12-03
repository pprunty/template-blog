// src/components/Showcase.tsx

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import boxen, { Options } from 'boxen';
import { v4 as uuidv4 } from 'uuid';
import { AUTHOR, SITE_URL, GA_MEASUREMENT_ID, DEFAULT_KEYWORDS } from '../src/config';
import { writeFile } from 'fs-extra';
import manifest from '../public/manifest.prod.json';
import sharp from 'sharp';

const configPath = path.join(__dirname, '../src/config.ts');

interface BlogConfig {
  fullName: string;
  websiteURL: string;
  blogName: string;
  profileDescription: string;
  profileImage: string;
  counterId: string;
  googleAnalyticsId: string;
  keywords: string;
}

async function updateManifest(websiteURL: string, fullName: string, profileDescription: string): Promise<void> {
  const manifestPath = path.join(__dirname, '../public/manifest.prod.json');
  const ensureTrailingSlash = (url: string) => url.endsWith('/') ? url : `${url}/`;
  const updatedManifest = {
    ...manifest,
    name: `${fullName}'s Blog`,
    short_name: fullName.replace(/\s+/g, ''),
    description: profileDescription,
    id: ensureTrailingSlash(websiteURL),
    scope: ensureTrailingSlash(websiteURL),
    start_url: websiteURL,
  };

  try {
    await writeFile(manifestPath, JSON.stringify(updatedManifest, null, 2), 'utf8');
  } catch (error) {
    console.error(
      boxen(`❌ Error updating manifest.prod.json: ${(error as Error).message}`, {
        padding: 1,
        margin: 1,
        borderColor: 'red',
        borderStyle: 'round' as Options['borderStyle'],
      })
    );
  }
}

console.log(
  boxen(
    '📝 Press "Enter" to skip any input.\nYou can change it manually later in the src/config.ts file!',
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round' as Options['borderStyle'],
    }
  )
);

async function updateConfig(): Promise<void> {

  try {
    const answers: BlogConfig = await inquirer.prompt([
      {
        type: 'input',
        name: 'fullName',
        message: 'Enter your Full Name:',
        default: AUTHOR.name || 'John Doe',
      },
      {
        type: 'input',
        name: 'websiteURL',
        message: 'Enter your Vercel provided production website URL (https://<your_name>.vercel.app):',
      },
      {
        type: 'input',
        name: 'blogName',
        message: 'Enter your blog name:',
        default: AUTHOR.publisherName || 'My Blog',
      },
      {
        type: 'input',
        name: 'profileDescription',
        message: 'Enter your profile description:',
        default: AUTHOR.description || 'A brief description about yourself.',
      },
      {
        type: 'input',
        name: 'profileImage',
        message: 'Enter your profile image / blog logo (absolute path):',
        default: `${process.cwd()}/public/images/_placeholders/icon.webp`,
      },
      {
        type: 'input',
        name: 'counterId',
        message: '📈 Enter your default counter ID [Default (auto UUID generated): ]:',
        default: uuidv4(),
      },
      {
        type: 'input',
        name: 'googleAnalyticsId',
        message: 'Enter your Google Analytics Measurement ID (Leave this blank if you do not have a GA ID):',
        default: GA_MEASUREMENT_ID || '',
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Enter your default keywords (comma-separated):',
        default: DEFAULT_KEYWORDS.join(', '),
      }
    ]);

    // Set default website URL based on full name if not provided
    if (!answers.websiteURL.trim()) {
      const defaultURL = `https://${answers.fullName.toLowerCase().replace(/\s+/g, '')}.vercel.app`;
      answers.websiteURL = defaultURL;

      console.log(
        boxen(`ℹ️ No URL provided. Defaulting to ${defaultURL}`, {
          padding: 1,
          margin: 1,
          borderColor: 'yellow',
          borderStyle: 'round' as Options['borderStyle'],
        })
      );
    }

    const configContent = `
export const SITE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "${answers.websiteURL}";

export const AUTHOR = {
  name: "${answers.fullName}",
  url: \`\${SITE_URL}/about\`,
  publisherName: "${answers.blogName}",
  publisherLogo: \`\${SITE_URL}/icon.webp\`,
  description: "${answers.profileDescription}",
  twitterHandle: "@pprunty_",
  twitterUrl: "https://twitter.com/pprunty_",
  stravaUrl: "https://www.strava.com/athletes/72636452",
  githubUrl: "https://github.com/pprunty",
  linkedinUrl: "https://www.linkedin.com/in/patrickprunty/",
  redditUrl: "https://www.reddit.com/user/patrickprunty97/",
};

export const GA_MEASUREMENT_ID = "${answers.googleAnalyticsId}";
export const DEFAULT_COUNTER_ID = "${answers.counterId}";
export const DEFAULT_SECTION = "Blog";
export const DEFAULT_KEYWORDS = [${answers.keywords.split(',').map((kw: string) => `"${kw.trim()}"`).join(', ')}];
    `;

    fs.writeFileSync(configPath, configContent.trim(), { encoding: 'utf8', flag: 'w' });

    const logoDestinationPath = path.join(__dirname, '../public/icon.webp');
    const logoSourcePath = answers.profileImage === path.join(process.cwd(), 'public/images/placeholders/icon.webp') ?
      path.join(__dirname, '../public/images/_placeholders/icon.webp') :
      answers.profileImage;

    try {
      if (fs.existsSync(logoDestinationPath)) {
        console.log(
          boxen(`ℹ️ The file ${logoDestinationPath} already exists and will be overwritten.`, {
            padding: 1,
            margin: 1,
            borderStyle: 'round' as Options['borderStyle'],
          })
        );
      }

      await sharp(answers.profileImage)
        .toFormat('webp')
        .toFile(logoDestinationPath);

      fs.copySync(logoSourcePath, logoDestinationPath);

    } catch (err) {
      console.error(
        boxen(`❌ Failed to copy logo image: ${(err as Error).message}`, {
          padding: 1,
          margin: 1,
          borderStyle: 'round' as Options['borderStyle'],
        })
      );
    }

    await updateManifest(answers.websiteURL, answers.fullName, answers.profileDescription);

    const successMessage = `
🎉 The blog configuration has been updated successfully.
- The configuration file (src/config.ts) has been updated with the provided details.
- The manifest file (manifest.prod.json) has been updated with the appropriate blog
  name, description, and URLs for PWA enablement.
- Your selected logo image has been successfully copied to the public directory as
  icon.webp. This icon will be used for your favicon, PWA icon, and Open Graph icon.

You may manually edit the src/config.ts file if further adjustments are necessary.
    `;

    console.log(
      boxen(successMessage.trim(), {
        padding: 1,
        margin: 1,
        borderColor: 'green',
        borderStyle: 'double' as Options['borderStyle'],
      })
    );
  } catch (error) {
    // Create an error message box for config update errors
    const errorMessage = `❌ Error updating config: ${(error as Error).message}`;
    console.error(
      boxen(errorMessage, {
        padding: 1,
        margin: 1,
        borderColor: 'red',
        borderStyle: 'round' as Options['borderStyle'],
      })
    );
  }
}

updateConfig();
