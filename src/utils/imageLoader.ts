// Ultra-minimal image loader with only essential images for deployment
interface ImageInfo {
  path: string;
  name: string;
  category: string;
}

// Only the most essential images - under 50MB total
const CORE_IMAGES: ImageInfo[] = [
  // Baby Showers - 2 essential (keep smallest files)
  { path: '/images/baby-showers/IMG_0796.JPEG', name: 'IMG_0796.JPEG', category: 'baby-showers' },
  { path: '/images/baby-showers/BabyShower.jpg', name: 'BabyShower.jpg', category: 'baby-showers' },
  
  // Birthdays - 3 essential (keep smallest files)
  { path: '/images/birthdays/IMG_5429.JPG', name: 'IMG_5429.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2972.jpg', name: 'IMG_2972.jpg', category: 'birthdays' },
  { path: '/images/birthdays/20210905_143754.jpg', name: '20210905_143754.jpg', category: 'birthdays' },
  
  // Bridal Showers - 2 essential (keep smaller files)
  { path: '/images/bridal-showers/20220731_130944.jpg', name: '20220731_130944.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/20240811_105747.jpg', name: '20240811_105747.jpg', category: 'bridal-showers' },
  
  // Corporate - 2 essential (keep smaller files)
  { path: '/images/corporate/20210721_155342.jpg', name: '20210721_155342.jpg', category: 'corporate' },
  { path: '/images/corporate/20210816_183032.jpg', name: '20210816_183032.jpg', category: 'corporate' },
  
  // Holidays - 2 essential (keep smaller files)
  { path: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', name: '339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', category: 'holidays' },
  { path: '/images/holidays/20210511_193336.jpg', name: '20210511_193336.jpg', category: 'holidays' },
  
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
  return CORE_IMAGES
    .filter(img => img.category === category)
    .map(img => img.path);
};

// Get all available categories
export const getImageCategories = (): string[] => {
  const categories = [...new Set(CORE_IMAGES.map(img => img.category))];
  return categories.filter(cat => cat !== 'Logo');
};

// Check if image exists in our known list
export const imageExists = (path: string): boolean => {
  const cleanPath = getImageUrl(path);
  return CORE_IMAGES.some(img => img.path === cleanPath);
};

// Debug function
export const debugImages = () => {
  if (import.meta.env.DEV) {
    console.log('🔍 Core images loaded:', CORE_IMAGES.length);
  }
};

// Get random image from category
export const getRandomImageFromCategory = (category: string): string | null => {
  const images = getImagesByCategory(category);
  if (images.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};