import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import boxen, { Options } from 'boxen'; // Import boxen for styled logs
import { v4 as uuidv4 } from 'uuid';
import { AUTHOR, SITE_URL, GA_MEASUREMENT_ID, DEFAULT_KEYWORDS } from '../src/config'; // Import AUTHOR and SITE_URL from config
import { writeFile } from 'fs-extra'; // Import writeFile to modify JSON files
import manifest from '../public/manifest.prod.json'; // Import the manifest file (assuming it's JSON)

// Path to config file
const configPath = path.join(__dirname, '../src/config.ts');

// Define the BlogConfig interface based on the fields collected in prompts
interface BlogConfig {
  fullName: string;
  websiteURL: string;
  blogName: string;
  profileDescription: string;
  profileImage: string; // Logo image path
  counterId: string;
  googleAnalyticsId: string;
  keywords: string;
}

// Function to update the manifest.prod.json file
async function updateManifest(websiteURL: string, fullName: string, profileDescription: string): Promise<void> {
  const manifestPath = path.join(__dirname, '../public/manifest.prod.json');

  // Ensure the URL has a trailing slash
  const ensureTrailingSlash = (url: string) => url.endsWith('/') ? url : `${url}/`;

  // Prepare the updated manifest content
  const updatedManifest = {
    ...manifest, // Copy existing values
    name: `${fullName}'s Blog`, // Use fullName for the blog name
    short_name: fullName.replace(/\s+/g, ''), // Remove spaces for the short name
    description: profileDescription, // Use profile description for manifest description
    id: ensureTrailingSlash(websiteURL), // Ensure trailing slash on id
    scope: ensureTrailingSlash(websiteURL), // Ensure trailing slash on scope
    start_url: websiteURL,
  };

  // Write the updated manifest back to manifest.prod.json
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

// Display an initial prompt to the user to inform them about skipping inputs
console.log(
  boxen(
    '📝 Press "Enter" to skip any input.\nYou can change it manually later in the src/config.ts file!',
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round' as Options['borderStyle'], // Cast to valid type
    }
  )
);

// Function to update the config.ts file
async function updateConfig(): Promise<void> {

  try {
    // Prompt user for input
    const answers: BlogConfig = await inquirer.prompt([
      {
        type: 'input',
        name: 'fullName',
        message: 'Enter your full name:',
        default: AUTHOR.name || 'John Doe', // Default value
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
        default: AUTHOR.publisherName || 'My Blog', // Default value
      },
      {
        type: 'input',
        name: 'profileDescription',
        message: 'Enter your profile description:',
        default: AUTHOR.description || 'A brief description about yourself.', // Default value
      },
      {
        type: 'input',
        name: 'profileImage',
        message: 'Enter your profile image / blog logo (absolute path):',
        default: `${process.cwd()}/public/images/_placeholders/icon.png`, // Set default logo
      },
      {
        type: 'input',
        name: 'counterId',
        message: '📈 Enter your default counter ID [Default (auto UUID generated): ]:',
        default: uuidv4(), // Generate a UUID by default
      },
      {
        type: 'input',
        name: 'googleAnalyticsId',
        message: 'Enter your Google Analytics Measurement ID (Leave this blank if you do not have a GA ID):',
        default: GA_MEASUREMENT_ID || '', // Default value
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Enter your default keywords (comma-separated):',
        default: DEFAULT_KEYWORDS.join(', '), // Default value
      }
    ]);

    // Check if profileImage is empty or consists only of whitespace
    if (!answers.profileImage.trim()) {
      answers.profileImage = path.join(process.cwd(), 'public/images/placeholders/__icon.png');
    }

    // Prepare the new content for the config.ts file
    const configContent = `
export const SITE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "${answers.websiteURL}"; // Update this with your site URL from Vercel

export const AUTHOR = {
  name: "${answers.fullName}",
  url: \`\${SITE_URL}/about\`,
  publisherName: "${answers.blogName}",
  publisherLogo: \`\${SITE_URL}/icon.png\`,
  description: "${answers.profileDescription}",
  twitterHandle: "@pprunty_",
  twitterUrl: "https://twitter.com/pprunty_", // TODO: Update this with your Twitter URL
  stravaUrl: "https://www.strava.com/athletes/72636452", // TODO: Update this with your Strava URL
  githubUrl: "https://github.com/pprunty", // TODO: Update this with your GitHub URL
  linkedinUrl: "https://www.linkedin.com/in/patrickprunty/", // TODO: Update this with your LinkedIn URL
  redditUrl: "https://www.reddit.com/user/patrickprunty97/", // TODO: Update this with your Reddit URL
};

export const GA_MEASUREMENT_ID = "${answers.googleAnalyticsId}";
export const DEFAULT_COUNTER_ID = "${answers.counterId}";

export const DEFAULT_SECTION = "Blog"; // Can be updated based on your preference

export const DEFAULT_KEYWORDS = [${answers.keywords.split(',').map((kw: string) => `"${kw.trim()}"`).join(', ')}];
    `;

    // Write the new config content to the config.ts file
    fs.writeFileSync(configPath, configContent.trim(), { encoding: 'utf8', flag: 'w' });

    // Copy the logo image to the public directory and rename it to icon.png
    const logoDestinationPath = path.join(__dirname, '../public/icon.png');

    // Determine the logo source path
    const logoSourcePath = answers.profileImage === path.join(process.cwd(), 'public/images/placeholders/__icon.png') ?
      path.join(__dirname, '../public/images/_placeholders/icon.png') :
      answers.profileImage;

    try {
      // Check if the destination file exists
      if (fs.existsSync(logoDestinationPath)) {
        console.log(
          boxen(`ℹ️ The file ${logoDestinationPath} already exists and will be overwritten.`, {
            padding: 1,
            margin: 1,
            borderStyle: 'round' as Options['borderStyle'],
          })
        );
      }

      // Copy the logo image, overwriting if it exists
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

    // Call the function to update manifest.prod.json
    await updateManifest(answers.websiteURL, answers.fullName, answers.profileDescription);

    // Create a formal success message box combining all actions
    const successMessage = `
🎉 The blog configuration has been updated successfully.

The following actions have been completed:
- The configuration file (src/config.ts) has been updated with the provided details.
- The manifest file (manifest.prod.json) has been updated with the appropriate blog\nname, description, and URLs for PWA enablement.
- Your selected logo image has been successfully copied to the public directory as\nicon.png. This icon will be used your favicon, PWA icon, and Open Graph icon.

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

// Run the updateConfig function
updateConfig();
