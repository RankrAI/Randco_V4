import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

function scanDirectory(dir, images = []) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      scanDirectory(fullPath, images);
    } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
      // Found an image file
      const relativePath = path.relative('images', fullPath);
      images.push({
        path: `/images/${relativePath.replace(/\\/g, '/')}`, // Ensure forward slashes
        name: item,
        size: stat.size,
        category: path.dirname(relativePath).replace(/\\/g, '/'),
        lastModified: stat.mtime.toISOString()
      });
    }
  });
  
  return images;
}

// Scan the images directory
const imagesDir = path.join(__dirname, '../images');
const images = scanDirectory(imagesDir);

const manifest = {
  images,
  totalImages: images.length,
  totalSize: images.reduce((sum, img) => sum + img.size, 0),
  categories: [...new Set(images.map(img => img.category))].filter(cat => cat !== '.'),
  lastUpdated: new Date().toISOString()
};

// Before writing the file, ensure the directory exists
const outputPath = path.join(__dirname, '../images/image-manifest.json');
const outputDir = path.dirname(outputPath);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log('📋 Image Manifest Generated');
console.log(`📁 Total Images: ${manifest.totalImages}`);
console.log(`📦 Total Size: ${(manifest.totalSize / 1024 / 1024).toFixed(2)}MB`);
console.log(`📂 Categories: ${manifest.categories.join(', ')}`);
console.log(`💾 Manifest saved to: ${path.resolve(outputPath)}`);

// Log some sample paths for verification
console.log('\n📸 Sample image paths:');
images.slice(0, 5).forEach(img => {
  console.log(`  ${img.path} (${img.category})`);
});