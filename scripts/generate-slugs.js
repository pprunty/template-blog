const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(__dirname, '..', 'src', 'posts');
const slugs = fs
  .readdirSync(postsDirectory)
  .filter((name) => !name.startsWith('.'))
  .filter((name) =>
    fs.statSync(path.join(postsDirectory, name)).isDirectory()
  );

const outputPath = path.join(__dirname, '..', 'src', 'posts', 'slugs.json');
fs.writeFileSync(outputPath, JSON.stringify(slugs, null, 2));
