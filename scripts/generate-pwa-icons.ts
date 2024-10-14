import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import boxen, { Options } from 'boxen'; // Import boxen for styled logs

const inputFile: string = path.join(__dirname, '..', 'public', 'icon.png');
const iconsDir: string = path.join(__dirname, '..', 'public', 'icons');

function ensureDirectoryExistence(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

ensureDirectoryExistence(iconsDir);

const sizes: number[] = [16, 32, 72, 96, 120, 128, 144, 152, 180, 192, 384, 512];

async function resizeAndSave(size: number): Promise<void> {
  const outputFile: string = path.join(iconsDir, `${size}x${size}.png`);

  // Check if file already exists
  const fileExists: boolean = fs.existsSync(outputFile);

  try {
    await sharp(inputFile)
      .resize({ width: size, height: size })
      .toFile(outputFile);
  } catch (error) {
    console.error(`❌ Error processing ${outputFile}:`, error);
  }
}

// Explicitly cast the borderStyle to the appropriate type
Promise.all(sizes.map(resizeAndSave))
  .then(() => {
    console.log(
      boxen('🎉 All PWA icons generated successfully (using public/icon.png)!', {
        padding: 1,
        margin: 1,
        borderStyle: 'round' as Options['borderStyle'], // Cast to valid type
        borderColor: 'green',
      })
    );
  })
  .catch((error: Error) => {
    console.error(
      boxen(`❌ Error generating icons: ${error.message}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'bold' as Options['borderStyle'], // Cast to valid type
        borderColor: 'red',
      })
    );
  });
