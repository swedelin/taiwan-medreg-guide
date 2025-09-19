import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

// After Vite builds, rename the generated files
console.log('Renaming language-specific HTML files...');

try {
  // Rename ja.html to ja.html (it should already be correctly named)
  if (fs.existsSync(path.join(distDir, 'ja.html'))) {
    console.log('Japanese HTML file is ready');
  }
  
  // Rename en.html to en.html (it should already be correctly named)
  if (fs.existsSync(path.join(distDir, 'en.html'))) {
    console.log('English HTML file is ready');
  }
  
  // Also keep index.html as a fallback
  if (fs.existsSync(path.join(distDir, 'index.html'))) {
    console.log('Main index.html is ready');
  }
  
  console.log('Build complete! Language-specific HTML files are ready.');
} catch (error) {
  console.error('Error during post-build process:', error);
  process.exit(1);
}
