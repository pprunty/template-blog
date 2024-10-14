import fs from 'fs';
import path from 'path';

// Define the type for the 'postsDirectory'
const postsDirectory: string = path.join(__dirname, '..', 'src', 'posts');

// Read the directory and filter the results
const slugs: string[] = fs
  .readdirSync(postsDirectory)
  .filter((name: string) => !name.startsWith('.')) // Filter out hidden files
  .filter((name: string) =>
    fs.statSync(path.join(postsDirectory, name)).isDirectory()
  );

// Define the output path for the JSON file
const outputPath: string = path.join(__dirname, '..', 'src', 'posts', 'slugs.json');

// Write the slugs to a JSON file
fs.writeFileSync(outputPath, JSON.stringify(slugs, null, 2));

console.log(`Slugs saved to ${outputPath}`);