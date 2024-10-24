const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Set the input and output directories
const inputDir = './public/photography'; // Change this to your input directory path
const outputDir = './public/photos'; // Change this to your desired output directory

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read all files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  // Process each file
  files.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, `${path.parse(file).name}.webp`);

    // Use sharp to process the file, ensuring correct orientation
    sharp(inputFilePath)
      .rotate() // Automatically rotates the image based on EXIF metadata
      .webp({ quality: 100 }) // Adjust quality if needed
      .toFile(outputFilePath)
      .then(() => {
        console.log(`Converted: ${file} -> ${outputFilePath}`);
      })
      .catch((err) => {
        console.error(`Error converting ${file}:`, err);
      });
  });
});
