// Full image loader with all original images restored
interface ImageInfo {
  path: string;
  name: string;
  category: string;
}

// All original images restored from the manifest
const ALL_IMAGES: ImageInfo[] = [
  // Baby Showers
  { path: '/images/baby-showers/20220731_185900.jpg', name: '20220731_185900.jpg', category: 'baby-showers' },
  { path: '/images/baby-showers/20221015_175734.jpg', name: '20221015_175734.jpg', category: 'baby-showers' },
  { path: '/images/baby-showers/BabyShower.jpg', name: 'BabyShower.jpg', category: 'baby-showers' },
  { path: '/images/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg', name: 'C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg', category: 'baby-showers' },
  { path: '/images/baby-showers/IMG_0796.JPEG', name: 'IMG_0796.JPEG', category: 'baby-showers' },

  // Birthdays - All restored
  { path: '/images/birthdays/0D617243-2B95-4F80-876D-148EF5266664.jpg', name: '0D617243-2B95-4F80-876D-148EF5266664.jpg', category: 'birthdays' },
  { path: '/images/birthdays/20210905_143754.jpg', name: '20210905_143754.jpg', category: 'birthdays' },
  { path: '/images/birthdays/20250519_160529.jpg', name: '20250519_160529.jpg', category: 'birthdays' },
  { path: '/images/birthdays/20250519_160613.jpg', name: '20250519_160613.jpg', category: 'birthdays' },
  { path: '/images/birthdays/4E39CAB8-F5BA-49DA-AD59-2E7AF800C045.jpg', name: '4E39CAB8-F5BA-49DA-AD59-2E7AF800C045.jpg', category: 'birthdays' },
  { path: '/images/birthdays/4E4B437F-48E3-4169-9335-C8A235E90DD8.jpg', name: '4E4B437F-48E3-4169-9335-C8A235E90DD8.jpg', category: 'birthdays' },
  { path: '/images/birthdays/4E67466A-2F9A-4BEF-8275-59611D0D6679.JPEG', name: '4E67466A-2F9A-4BEF-8275-59611D0D6679.JPEG', category: 'birthdays' },
  { path: '/images/birthdays/77E0D959-4DDB-4D6C-89FB-8D65667C40F1.jpg', name: '77E0D959-4DDB-4D6C-89FB-8D65667C40F1.jpg', category: 'birthdays' },
  { path: '/images/birthdays/8BAEF93C-FA38-4525-AC5C-2AB46D1CF355.jpg', name: '8BAEF93C-FA38-4525-AC5C-2AB46D1CF355.jpg', category: 'birthdays' },
  { path: '/images/birthdays/9E3BD036-9995-4285-885A-76C705C38329.jpg', name: '9E3BD036-9995-4285-885A-76C705C38329.jpg', category: 'birthdays' },
  { path: '/images/birthdays/AJYE6187.JPG', name: 'AJYE6187.JPG', category: 'birthdays' },
  { path: '/images/birthdays/D8DA01B9-7A82-4CCB-BDE0-FAE3E5421C6E.jpg', name: 'D8DA01B9-7A82-4CCB-BDE0-FAE3E5421C6E.jpg', category: 'birthdays' },
  { path: '/images/birthdays/F78A3C15-B69F-4E7A-A6FF-B2A671A82497.jpg', name: 'F78A3C15-B69F-4E7A-A6FF-B2A671A82497.jpg', category: 'birthdays' },
  { path: '/images/birthdays/IMG_0259.JPEG', name: 'IMG_0259.JPEG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_1326.JPEG', name: 'IMG_1326.JPEG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2192.JPG', name: 'IMG_2192.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2243.JPG', name: 'IMG_2243.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2255.JPG', name: 'IMG_2255.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2353.JPG', name: 'IMG_2353.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2583.JPG', name: 'IMG_2583.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2669.JPG', name: 'IMG_2669.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2705.JPG', name: 'IMG_2705.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2710.JPG', name: 'IMG_2710.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2735.JPG', name: 'IMG_2735.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2862.JPG', name: 'IMG_2862.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2908.JPG', name: 'IMG_2908.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2939.JPG', name: 'IMG_2939.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2972.jpg', name: 'IMG_2972.jpg', category: 'birthdays' },
  { path: '/images/birthdays/IMG_4642.JPG', name: 'IMG_4642.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_4644.JPG', name: 'IMG_4644.JPG', category: 'birthdays' },
  { path: '/images/birthdays/IMG_5429.JPG', name: 'IMG_5429.JPG', category: 'birthdays' },

  // Bridal Showers - All restored
  { path: '/images/bridal-showers/20220731_130944.jpg', name: '20220731_130944.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/20221015_175737.jpg', name: '20221015_175737.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/20240811_105747.jpg', name: '20240811_105747.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/DSC_2863.jpg', name: 'DSC_2863.jpg', category: 'bridal-showers' },
  { path: '/images/bridal-showers/LandingPage.jpg', name: 'LandingPage.jpg', category: 'bridal-showers' },

  // Corporate - All restored
  { path: '/images/corporate/20210512_115014.jpg', name: '20210512_115014.jpg', category: 'corporate' },
  { path: '/images/corporate/20210721_155342.jpg', name: '20210721_155342.jpg', category: 'corporate' },
  { path: '/images/corporate/20210816_183032.jpg', name: '20210816_183032.jpg', category: 'corporate' },
  { path: '/images/corporate/20240617_192834.jpg', name: '20240617_192834.jpg', category: 'corporate' },
  { path: '/images/corporate/EIVQ6040.JPG', name: 'EIVQ6040.JPG', category: 'corporate' },
  { path: '/images/corporate/IMG_1428.JPEG', name: 'IMG_1428.JPEG', category: 'corporate' },
  { path: '/images/corporate/IMG_2609.JPG', name: 'IMG_2609.JPG', category: 'corporate' },

  // Holidays - All restored
  { path: '/images/holidays/20210509_113246.jpg', name: '20210509_113246.jpg', category: 'holidays' },
  { path: '/images/holidays/20210511_193336.jpg', name: '20210511_193336.jpg', category: 'holidays' },
  { path: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', name: '339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg', category: 'holidays' },
  { path: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg', name: '49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg', category: 'holidays' },
  { path: '/images/holidays/IMG_0232.JPEG', name: 'IMG_0232.JPEG', category: 'holidays' },

  // Logo
  { path: '/images/Logo_Simple.png', name: 'Logo_Simple.png', category: 'logo' }
];

// Helper function to get clean image URL
export const getImageUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
};

// Get images by category
export const getImagesByCategory = (category: string): string[] => {
  return ALL_IMAGES
    .filter(img => img.category === category)
    .map(img => img.path);
};

// Get all available categories
export const getImageCategories = (): string[] => {
  const categories = [...new Set(ALL_IMAGES.map(img => img.category))];
  return categories.filter(cat => cat !== 'logo');
};

// Check if image exists in our known list
export const imageExists = (path: string): boolean => {
  const cleanPath = getImageUrl(path);
  return ALL_IMAGES.some(img => img.path === cleanPath);
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
    console.log('🔍 All images loaded:', ALL_IMAGES.length);
    console.log('📂 Categories:', getImageCategories());
  }
};

// Get random image from category
export const getRandomImageFromCategory = (category: string): string | null => {
  const images = getImagesByCategory(category);
  if (images.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};