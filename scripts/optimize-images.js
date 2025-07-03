import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image optimization script
const optimizeImages = () => {
  console.log('🖼️  Image Optimization Report');
  console.log('================================');
  
  const publicDir = path.join(__dirname, '../public');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  const scanDirectory = (dir, basePath = '') => {
    const items = fs.readdirSync(dir);
    let totalSize = 0;
    let imageCount = 0;
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const subResult = scanDirectory(fullPath, relativePath);
        totalSize += subResult.size;
        imageCount += subResult.count;
      } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
        const sizeKB = Math.round(stat.size / 1024);
        console.log(`📁 ${relativePath}: ${sizeKB}KB`);
        totalSize += stat.size;
        imageCount++;
      }
    });
    
    return { size: totalSize, count: imageCount };
  };
  
  if (fs.existsSync(publicDir)) {
    const result = scanDirectory(publicDir);
    const totalMB = Math.round(result.size / (1024 * 1024) * 100) / 100;
    
    console.log('================================');
    console.log(`📊 Total Images: ${result.count}`);
    console.log(`📦 Total Size: ${totalMB}MB`);
    console.log('================================');
    
    // Recommendations
    console.log('\n💡 Optimization Recommendations:');
    console.log('1. Use WebP format for 25-35% smaller files');
    console.log('2. Compress JPEG quality to 80-85%');
    console.log('3. Resize images to max 1920px width');
    console.log('4. Use lazy loading (already implemented)');
    console.log('5. Consider CDN hosting for faster delivery');
  } else {
    console.log('❌ Public directory not found');
  }
};

optimizeImages();