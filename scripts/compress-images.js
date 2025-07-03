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
    
    await sharp(inputPath)
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% reduction)`);
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message);
  }
};

const compressLargeImages = async () => {
  const imagesDir = path.join(__dirname, '../public/images');
  
  // Large files that need compression
  const largeFiles = [
    'birthdays/IMG_4642.JPG',
    'birthdays/IMG_4644.JPG', 
    'bridal-showers/DSC_2863.jpg',
    'bridal-showers/LandingPage.jpg',
    'bridal-showers/20240811_105747.jpg',
    'corporate/20240617_192834.jpg',
    'corporate/EIVQ6040.JPG',
    'bridal-showers/20220731_130944.jpg',
    'birthdays/IMG_2939.JPG',
    'birthdays/IMG_2705.JPG',
    'birthdays/77E0D959-4DDB-4D6C-89FB-8D65667C40F1.jpg',
    'birthdays/4E4B437F-48E3-4169-9335-C8A235E90DD8.jpg'
  ];
  
  console.log('🗜️  Compressing large images...\n');
  
  for (const file of largeFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = inputPath; // Overwrite original
    
    if (fs.existsSync(inputPath)) {
      await compressImage(inputPath, outputPath, 75); // More aggressive compression
    }
  }
  
  console.log('\n✨ Image compression complete!');
};

compressLargeImages().catch(console.error);