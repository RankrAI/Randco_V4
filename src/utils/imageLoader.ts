// Simplified image loader with only essential images
interface ImageInfo {
  path: string;
  name: string;
  category: string;
}

// Essential images only - reduced from 30+ to 16 core images
const ESSENTIAL_IMAGES: ImageInfo[] = [
  // Baby Showers - 3 essential
  { path: '/images/baby-showers/IMG_0796.JPEG', name: 'IMG_0796.JPEG', category: 'baby-showers' },
  { path: '/images/baby-showers/BabyShower.jpg', name: 'BabyShower.jpg', category: 'baby-showers' },
  { path: '/images/baby-showers/20220731_185900.jpg', name: '20220731_185900.jpg', category: 'baby-showers' },
  
  // Birthdays - 4 essential
  { path: '/images/birthdays/IMG_5429.JPG', name: 'IMG_5429.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2972.jpg', name: 'IMG_2972.jpg', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2705.JPG', name: 'IMG_2705.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2939.JPG', name: 'IMG_2939.JPG', category: 'birthdays' },
  
  // Bridal Showers - 3 essential
  { path: '/images/bridal-showers/LandingPage.jpg', name: 'LandingPage.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/20220731_130944.jpg', name: '20220731_130944.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/20240811_105747.jpg', name: '20240811_105747.jpg', category: 'bridal-showers' },
  
  // Corporate - 3 essential
  { path: '/images/corporate/20210721_155342.jpg', name: '20210721_155342.jpg', category: 'corporate' },
  { path: '/images/corporate/20210816_183032.jpg', name: '20210816_183032.jpg', category: 'corporate' },
  { path: '/images/corporate/IMG_1428.JPEG', name: 'IMG_1428.JPEG', category: 'corporate' },
  
  // Holidays - 2 essential
  { path: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg', name: '49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg', category: 'holidays' },
  { path: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', name: '339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', category: 'holidays' },
  
  // Logo
  { path: '/images/Logo_Simple.png', name: 'Logo_Simple.png', category: 'Logo' }
];

// Helper function to get clean image URL
export const getImageUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
};

// Get images by category
export const getImagesByCategory = (category: string): string[] => {
  return ESSENTIAL_IMAGES
    .filter(img => img.category === category)
    .map(img => img.path);
};

// Get all available categories
export const getImageCategories = (): string[] => {
  const categories = [...new Set(ESSENTIAL_IMAGES.map(img => img.category))];
  return categories.filter(cat => cat !== 'Logo');
};

// Check if image exists in our known list
export const imageExists = (path: string): boolean => {
  const cleanPath = getImageUrl(path);
  return ESSENTIAL_IMAGES.some(img => img.path === cleanPath);
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
  if (import.meta.env.DEV) {
    console.log('🔍 Essential images loaded:', ESSENTIAL_IMAGES.length);
  }
};

// Get random image from category
export const getRandomImageFromCategory = (category: string): string | null => {
  const images = getImagesByCategory(category);
  if (images.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};