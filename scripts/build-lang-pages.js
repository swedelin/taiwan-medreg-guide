import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

// After Vite builds, ensure the correct files are in place for Netlify
console.log('Setting up language-specific HTML files for Netlify...');

try {
  // Copy the main index.html to index-en.html if it doesn't exist
  if (!fs.existsSync(path.join(distDir, 'index-en.html')) && fs.existsSync(path.join(distDir, 'index.html'))) {
    fs.copyFileSync(
      path.join(distDir, 'index.html'),
      path.join(distDir, 'index-en.html')
    );
    console.log('Created index-en.html from main index.html');
  }
  
  // List all files in dist for debugging
  const files = fs.readdirSync(distDir);
  console.log('Files in dist directory:', files);
  
  console.log('Build complete! Language-specific HTML files are ready for Netlify.');
} catch (error) {
  console.error('Error during post-build process:', error);
  process.exit(1);
}
