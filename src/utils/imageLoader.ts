// Simple, reliable image loader with clean folder names (no spaces)
interface ImageInfo {
  path: string;
  name: string;
  category: string;
}

// Known images with actual folder names that exist
const KNOWN_IMAGES: ImageInfo[] = [
  // Baby Showers (renamed to baby-showers)
  { path: '/baby-showers/IMG_0796.JPEG', name: 'IMG_0796.JPEG', category: 'baby-showers' },
  { path: '/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg', name: 'C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg', category: 'baby-showers' },
  { path: '/baby-showers/20221015_175734.jpg', name: '20221015_175734.jpg', category: 'baby-showers' },
  { path: '/baby-showers/20220731_185900.jpg', name: '20220731_185900.jpg', category: 'baby-showers' },
  { path: '/baby-showers/BabyShower.jpg', name: 'BabyShower.jpg', category: 'baby-showers' },
  
  // Birthdays (fixed to match lowercase folder name)
  { path: '/birthdays/IMG_5429.JPG', name: 'IMG_5429.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2972.jpg', name: 'IMG_2972.jpg', category: 'birthdays' },
  { path: '/birthdays/IMG_2705.JPG', name: 'IMG_2705.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2939.JPG', name: 'IMG_2939.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2862.JPG', name: 'IMG_2862.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2854.JPG', name: 'IMG_2854.JPG', category: 'birthdays' },
  { path: '/birthdays/20210905_143754.jpg', name: '20210905_143754.jpg', category: 'birthdays' },
  { path: '/birthdays/IMG_4644.JPG', name: 'IMG_4644.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2583.JPG', name: 'IMG_2583.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2669.JPG', name: 'IMG_2669.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2710.JPG', name: 'IMG_2710.JPG', category: 'birthdays' },
  { path: '/birthdays/IMG_2908.JPG', name: 'IMG_2908.JPG', category: 'birthdays' },
  { path: '/birthdays/20231103_171244.jpg', name: '20231103_171244.jpg', category: 'birthdays' },
  
  // Bridal Showers (renamed to bridal-showers)
  { path: '/bridal-showers/LandingPage.jpg', name: 'LandingPage.jpg', category: 'bridal-showers' },
  { path: '/bridal-showers/20220731_130944.jpg', name: '20220731_130944.jpg', category: 'bridal-showers' },
  { path: '/bridal-showers/20240811_105747.jpg', name: '20240811_105747.jpg', category: 'bridal-showers' },
  { path: '/bridal-showers/DSC_2863.jpg', name: 'DSC_2863.jpg', category: 'bridal-showers' },
  
  // Corporate (fixed to match lowercase folder name)
  { path: '/corporate/20210721_155342.jpg', name: '20210721_155342.jpg', category: 'corporate' },
  { path: '/corporate/20210816_183032.jpg', name: '20210816_183032.jpg', category: 'corporate' },
  { path: '/corporate/IMG_1428.JPEG', name: 'IMG_1428.JPEG', category: 'corporate' },
  { path: '/corporate/IMG_2609.JPG', name: 'IMG_2609.JPG', category: 'corporate' },
  { path: '/corporate/EIVQ6040.JPG', name: 'EIVQ6040.JPG', category: 'corporate' },
  { path: '/corporate/20240617_192834.jpg', name: '20240617_192834.jpg', category: 'corporate' },
  { path: '/corporate/20210512_115014.jpg', name: '20210512_115014.jpg', category: 'corporate' },
  
  // Holidays (fixed to match lowercase folder name)
  { path: '/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg', name: '49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg', category: 'holidays' },
  { path: '/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', name: '339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', category: 'holidays' },
  { path: '/holidays/IMG_0232.JPEG', name: 'IMG_0232.JPEG', category: 'holidays' },
  { path: '/holidays/20210511_193336.jpg', name: '20210511_193336.jpg', category: 'holidays' },
  { path: '/holidays/20210509_113246.jpg', name: '20210509_113246.jpg', category: 'holidays' },
  
  // Logo
  { path: '/Logo_Simple.png', name: 'Logo_Simple.png', category: 'Logo' }
];

// Helper function to get clean image URL
export const getImageUrl = (path: string): string => {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
};

// Get images by category
export const getImagesByCategory = (category: string): string[] => {
  return KNOWN_IMAGES
    .filter(img => img.category === category)
    .map(img => img.path);
};

// Get all available categories
export const getImageCategories = (): string[] => {
  const categories = [...new Set(KNOWN_IMAGES.map(img => img.category))];
  return categories.filter(cat => cat !== 'Logo');
};

// Check if image exists in our known list
export const imageExists = (path: string): boolean => {
  const cleanPath = getImageUrl(path);
  return KNOWN_IMAGES.some(img => img.path === cleanPath);
};

// Pre-load critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Debug function to test image loading
export const debugImages = () => {
  console.log('🔍 Testing image loading...');
  console.log(`📋 Known images: ${KNOWN_IMAGES.length}`);
  console.log(`📂 Categories: ${getImageCategories().join(', ')}`);
  
  // Test a few sample images
  const testImages = KNOWN_IMAGES.slice(0, 8);
  
  console.log('\n🧪 Testing sample images:');
  testImages.forEach(imageInfo => {
    const url = getImageUrl(imageInfo.path);
    console.log(`${imageInfo.path} -> ${url}`);
    
    // Test if image loads
    const img = new Image();
    img.onload = () => console.log(`✅ ${imageInfo.path} loaded successfully`);
    img.onerror = () => console.error(`❌ ${imageInfo.path} failed to load`);
    img.src = url;
  });
};

// Get random image from category
export const getRandomImageFromCategory = (category: string): string | null => {
  const images = getImagesByCategory(category);
  if (images.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Preload images for a specific category
export const preloadCategoryImages = async (category: string, limit: number = 5): Promise<void> => {
  const images = getImagesByCategory(category);
  const imagesToPreload = images.slice(0, limit);
  
  const preloadPromises = imagesToPreload.map(path => preloadImage(getImageUrl(path)));
  
  try {
    await Promise.all(preloadPromises);
    console.log(`✅ Preloaded ${imagesToPreload.length} images from ${category}`);
  } catch (error) {
    console.warn(`⚠️ Some images failed to preload from ${category}:`, error);
  }
};