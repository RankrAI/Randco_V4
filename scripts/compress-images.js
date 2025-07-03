import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compressImage = async (inputPath, outputPath, quality = 80) => {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    // Skip if file is already small enough
    if (originalSize < 2 * 1024 * 1024) { // Less than 2MB
      console.log(`⏭️  ${path.basename(inputPath)}: Already optimized (${(originalSize/1024/1024).toFixed(1)}MB)`);
      return;
    }
    
    await sharp(inputPath)
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toFile(outputPath + '.tmp');
    
    // Replace original with compressed version
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message);
    // Clean up temp file if it exists
    try {
      fs.unlinkSync(outputPath + '.tmp');
    } catch {}
  }
};

const scanAndCompressImages = async () => {
  const imagesDir = path.join(__dirname, '../public/images');
  
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ Images directory not found at:', imagesDir);
    return;
  }
  
  console.log('🗜️  Scanning and compressing large images...\n');
  
  const scanDirectory = async (dir) => {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        await scanDirectory(fullPath);
      } else if (['.jpg', '.jpeg', '.JPG', '.JPEG'].includes(path.extname(item))) {
        const sizeInMB = stat.size / (1024 * 1024);
        
        // Compress files larger than 2MB
        if (sizeInMB > 2) {
          let quality = 75; // Default aggressive compression
          
          // Extra aggressive for very large files
          if (sizeInMB > 10) quality = 65;
          if (sizeInMB > 15) quality = 60;
          
          await compressImage(fullPath, fullPath, quality);
        }
      }
    }
  };
  
  await scanDirectory(imagesDir);
  
  console.log('\n✨ Image compression complete!');
  
  // Calculate total size after compression
  let totalSize = 0;
  const calculateSize = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        calculateSize(fullPath);
      } else {
        totalSize += stat.size;
      }
    });
  };
  
  calculateSize(imagesDir);
  console.log(`📦 Total size after compression: ${(totalSize/1024/1024).toFixed(1)}MB`);
};

scanAndCompressImages().catch(console.error);