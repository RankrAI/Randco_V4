import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image compression recommendations
const compressImages = () => {
  console.log('🗜️  Image Compression Recommendations');
  console.log('=====================================');
  
  const imagesDir = path.join(__dirname, '../public/images');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG'];
  
  const scanDirectory = (dir, basePath = '') => {
    const items = fs.readdirSync(dir);
    let totalSize = 0;
    let imageCount = 0;
    const largeFiles = [];
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const subResult = scanDirectory(fullPath, relativePath);
        totalSize += subResult.size;
        imageCount += subResult.count;
        largeFiles.push(...subResult.largeFiles);
      } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
        const sizeKB = Math.round(stat.size / 1024);
        const sizeMB = Math.round(stat.size / (1024 * 1024) * 100) / 100;
        
        if (stat.size > 1024 * 1024) { // Files larger than 1MB
          largeFiles.push({
            path: relativePath,
            size: sizeMB,
            sizeBytes: stat.size
          });
        }
        
        totalSize += stat.size;
        imageCount++;
      }
    });
    
    return { size: totalSize, count: imageCount, largeFiles };
  };
  
  if (fs.existsSync(imagesDir)) {
    const result = scanDirectory(imagesDir);
    const totalMB = Math.round(result.size / (1024 * 1024) * 100) / 100;
    
    console.log(`📊 Total Images: ${result.count}`);
    console.log(`📦 Current Size: ${totalMB}MB`);
    console.log('================================');
    
    // Show large files that need compression
    console.log('\n🔍 Large Files (>1MB) that need compression:');
    result.largeFiles
      .sort((a, b) => b.sizeBytes - a.sizeBytes)
      .forEach(file => {
        console.log(`📁 ${file.path}: ${file.size}MB`);
      });
    
    // Calculate potential savings
    const potentialSavings = result.largeFiles.reduce((total, file) => {
      return total + (file.sizeBytes * 0.7); // Assume 70% compression
    }, 0);
    
    const newTotalMB = Math.round((result.size - potentialSavings) / (1024 * 1024) * 100) / 100;
    const savedMB = Math.round(potentialSavings / (1024 * 1024) * 100) / 100;
    
    console.log('\n💡 Compression Recommendations:');
    console.log(`🎯 Target Size: ${newTotalMB}MB (${savedMB}MB saved)`);
    console.log('📋 Actions needed:');
    console.log('   1. Resize images to max 1920px width');
    console.log('   2. Compress JPEG quality to 80%');
    console.log('   3. Convert large PNGs to JPEG');
    console.log('   4. Use WebP format where possible');
    
    if (totalMB > 50) {
      console.log('\n⚠️  WARNING: Current size may cause deployment issues');
      console.log('   Consider using a CDN for images or further compression');
    }
    
  } else {
    console.log('❌ Images directory not found at public/images');
  }
};

compressImages();