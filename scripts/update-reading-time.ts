import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

// Define the directory where posts are located
const postsDirectory: string = path.join(__dirname, '..', 'src', 'posts');

// Function to read and update the metadata in the MDX file
function updateMetadata(content: string, readingTimeInMinutes: number): string {
  const metadataRegex = /export const metadata = ({[\s\S]*?});/;

  // Extract the existing metadata object from the file
  const match = content.match(metadataRegex);
  if (!match || match.length < 2) {
    throw new Error('Metadata not found in the MDX file.');
  }

  let metadataString = match[1].trim();

  // Check if `readingTime` already exists in the metadata
  if (metadataString.includes('readingTime')) {
    // Update the existing readingTime value
    metadataString = metadataString.replace(/readingTime:\s?\d+/, `readingTime: ${readingTimeInMinutes},\n`);
  } else {
    // Remove any trailing comma and whitespace before the closing }
    metadataString = metadataString.replace(/,?\s*}$/, `,readingTime: ${readingTimeInMinutes}}\n`);
  }

  // Replace the old metadata with the updated one in the content
  const updatedContent = content.replace(metadataRegex, `export const metadata = ${metadataString};`);
  return updatedContent;
}


// Function to get the MDX content, update metadata, and write the file back
function processMdxFile(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}/page.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found for slug: ${slug}`);
  }

  // Read the file contents
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Extract content without metadata to calculate reading time
  const contentWithoutMetadata = fileContents.replace(/export const metadata = {[\s\S]*?};/, '').trim();

  // Calculate reading time for the post
  const stats = readingTime(contentWithoutMetadata);
  const readingTimeInMinutes = Math.max(1, Math.ceil(stats.minutes));

  // Update the metadata with the new reading time
  const updatedContent = updateMetadata(fileContents, readingTimeInMinutes);

  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');

  console.log(`Updated reading time for ${slug}: ${readingTimeInMinutes} minutes`);
}

// Read the slugs.json file
const slugsFilePath: string = path.join(postsDirectory, 'slugs.json');
const slugs: string[] = JSON.parse(fs.readFileSync(slugsFilePath, 'utf-8'));

// Iterate through each slug and process its MDX file
slugs.forEach((slug) => {
  processMdxFile(slug);
});

console.log('Finished updating reading times for all posts.');
