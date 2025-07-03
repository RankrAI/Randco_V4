import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Remove the largest images that are causing size issues
const IMAGES_TO_REMOVE = [
  // Remove the largest files (15-17MB each)
  'images/birthdays/IMG_4642.JPG',
  'images/birthdays/IMG_4644.JPG',
  'images/bridal-showers/DSC_2863.jpg',
  'images/bridal-showers/LandingPage.jpg', // 9.6MB
  'images/corporate/EIVQ6040.JPG',
  'images/corporate/20240617_192834.jpg',
  
  // Remove additional large files
  'images/birthdays/IMG_2192.JPG',
  'images/birthdays/IMG_2243.JPG',
  'images/birthdays/IMG_2255.JPG',
  'images/birthdays/IMG_2353.JPG',
  'images/birthdays/IMG_2583.JPG',
  'images/birthdays/IMG_2669.JPG',
  'images/birthdays/IMG_2710.JPG',
  'images/birthdays/IMG_2735.JPG',
  'images/birthdays/IMG_2862.JPG',
  'images/birthdays/IMG_2908.JPG',
  'images/birthdays/77E0D959-4DDB-4D6C-89FB-8D65667C40F1.jpg',
  'images/birthdays/4E4B437F-48E3-4169-9335-C8A235E90DD8.jpg',
  'images/birthdays/F78A3C15-B69F-4E7A-A6FF-B2A671A82497.jpg',
  'images/birthdays/8BAEF93C-FA38-4525-AC5C-2AB46D1CF355.jpg',
  'images/birthdays/0D617243-2B95-4F80-876D-148EF5266664.jpg',
  'images/birthdays/20250519_160529.jpg',
  'images/birthdays/20250519_160613.jpg',
  'images/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg',
  'images/baby-showers/20220731_185900.jpg',
  'images/corporate/IMG_2609.JPG',
  'images/corporate/20210512_115014.jpg',
  'images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg'
];

console.log('🗑️  Removing large images to reduce deployment size...');

let totalSizeRemoved = 0;
let filesRemoved = 0;

IMAGES_TO_REMOVE.forEach(imagePath => {
  const fullPath = path.join(__dirname, '..', imagePath);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeKB = Math.round(stats.size / 1024);
    
    fs.unlinkSync(fullPath);
    totalSizeRemoved += stats.size;
    filesRemoved++;
    
    console.log(`✅ Removed ${imagePath} (${sizeKB}KB)`);
  } else {
    console.log(`⚠️  File not found: ${imagePath}`);
  }
});

const totalMBRemoved = Math.round(totalSizeRemoved / (1024 * 1024) * 100) / 100;

console.log('\n📊 Compression Summary:');
console.log(`🗑️  Files removed: ${filesRemoved}`);
console.log(`📦 Size reduced by: ${totalMBRemoved}MB`);
console.log(`🎯 Estimated remaining size: ~${170 - totalMBRemoved}MB`);

if ((170 - totalMBRemoved) < 90) {
  console.log('✅ Project should now be under 100MB deployment limit!');
} else {
  console.log('⚠️  May still be too large. Consider removing more images.');
}