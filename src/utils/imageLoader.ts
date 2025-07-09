// Full image loader with WebP images and rotation data
interface ImageInfo {
  path: string;
  name: string;
  category: string;
  rotation?: number; // degrees to rotate if needed
}

// All verified existing WebP images from the file system
const ALL_IMAGES: ImageInfo[] = [
  // Baby Showers - converted to WebP
  { path: '/images/baby-showers/20220731_185900.webp', name: '20220731_185900.webp', category: 'baby-showers' },
  { path: '/images/baby-showers/20221015_175734.webp', name: '20221015_175734.webp', category: 'baby-showers' },
  { path: '/images/baby-showers/BabyShower.webp', name: 'BabyShower.webp', category: 'baby-showers' },
  { path: '/images/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.webp', name: 'C47AB584-B5E7-4C9A-98BB-521B34F10F71.webp', category: 'baby-showers' },
  { path: '/images/baby-showers/IMG_0796.webp', name: 'IMG_0796.webp', category: 'baby-showers' },

  // Birthdays - converted to WebP
  { path: '/images/birthdays/0D617243-2B95-4F80-876D-148EF5266664.webp', name: '0D617243-2B95-4F80-876D-148EF5266664.webp', category: 'birthdays' },
  { path: '/images/birthdays/20210905_143754.webp', name: '20210905_143754.webp', category: 'birthdays' },
  { path: '/images/birthdays/20231103_171244.webp', name: '20231103_171244.webp', category: 'birthdays' },
  { path: '/images/birthdays/20250519_160529.webp', name: '20250519_160529.webp', category: 'birthdays' },
  { path: '/images/birthdays/20250519_160613.webp', name: '20250519_160613.webp', category: 'birthdays' },
  { path: '/images/birthdays/38CE3FD0-E73C-4455-84DD-177AD3C1B0A2.webp', name: '38CE3FD0-E73C-4455-84DD-177AD3C1B0A2.webp', category: 'birthdays' },
  { path: '/images/birthdays/4E39CAB8-F5BA-49DA-AD59-2E7AF800C045.webp', name: '4E39CAB8-F5BA-49DA-AD59-2E7AF800C045.webp', category: 'birthdays' },
  { path: '/images/birthdays/4E4B437F-48E3-4169-9335-C8A235E90DD8.webp', name: '4E4B437F-48E3-4169-9335-C8A235E90DD8.webp', category: 'birthdays' },
  { path: '/images/birthdays/4E67466A-2F9A-4BEF-8275-59611D0D6679.webp', name: '4E67466A-2F9A-4BEF-8275-59611D0D6679.webp', category: 'birthdays' },
  { path: '/images/birthdays/77E0D959-4DDB-4D6C-89FB-8D65667C40F1.webp', name: '77E0D959-4DDB-4D6C-89FB-8D65667C40F1.webp', category: 'birthdays' },
  { path: '/images/birthdays/8BAEF93C-FA38-4525-AC5C-2AB46D1CF355.webp', name: '8BAEF93C-FA38-4525-AC5C-2AB46D1CF355.webp', category: 'birthdays' },
  { path: '/images/birthdays/9E3BD036-9995-4285-885A-76C705C38329.webp', name: '9E3BD036-9995-4285-885A-76C705C38329.webp', category: 'birthdays' },
  { path: '/images/birthdays/AJYE6187.webp', name: 'AJYE6187.webp', category: 'birthdays' },
  { path: '/images/birthdays/D8DA01B9-7A82-4CCB-BDE0-FAE3E5421C6E.webp', name: 'D8DA01B9-7A82-4CCB-BDE0-FAE3E5421C6E.webp', category: 'birthdays' },
  { path: '/images/birthdays/F78A3C15-B69F-4E7A-A6FF-B2A671A82497.webp', name: 'F78A3C15-B69F-4E7A-A6FF-B2A671A82497.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_0259.webp', name: 'IMG_0259.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_1326.webp', name: 'IMG_1326.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2192.webp', name: 'IMG_2192.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2243.webp', name: 'IMG_2243.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2255.webp', name: 'IMG_2255.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2339.webp', name: 'IMG_2339.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2353.webp', name: 'IMG_2353.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2583.webp', name: 'IMG_2583.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2669.webp', name: 'IMG_2669.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2705.webp', name: 'IMG_2705.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2710.webp', name: 'IMG_2710.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2735.webp', name: 'IMG_2735.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2854.webp', name: 'IMG_2854.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2862.webp', name: 'IMG_2862.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2908.webp', name: 'IMG_2908.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2939.webp', name: 'IMG_2939.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_2972.webp', name: 'IMG_2972.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_4642.webp', name: 'IMG_4642.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_4644.webp', name: 'IMG_4644.webp', category: 'birthdays' },
  { path: '/images/birthdays/IMG_5429.webp', name: 'IMG_5429.webp', category: 'birthdays' },

  // Bridal Showers - converted to WebP
  { path: '/images/bridal-showers/20221015_175734.webp', name: '20221015_175734.webp', category: 'bridal-showers' },
  { path: '/images/bridal-showers/DSC_2863.webp', name: 'DSC_2863.webp', category: 'bridal-showers' },
  { path: '/images/bridal-showers/LandingPage.webp', name: 'LandingPage.webp', category: 'bridal-showers' },

  // Corporate - converted to WebP
  { path: '/images/corporate/20210512_115014.webp', name: '20210512_115014.webp', category: 'corporate' },
  { path: '/images/corporate/20210721_155342.webp', name: '20210721_155342.webp', category: 'corporate' },
  { path: '/images/corporate/20210816_183032.webp', name: '20210816_183032.webp', category: 'corporate' },
  { path: '/images/corporate/20220731_130944.webp', name: '20220731_130944.webp', category: 'corporate' },
  { path: '/images/corporate/20240617_192834.webp', name: '20240617_192834.webp', category: 'corporate' },
  { path: '/images/corporate/EIVQ6040.webp', name: 'EIVQ6040.webp', category: 'corporate' },
  { path: '/images/corporate/IMG_1428.webp', name: 'IMG_1428.webp', category: 'corporate' },
  { path: '/images/corporate/IMG_1431.webp', name: 'IMG_1431.webp', category: 'corporate' },
  { path: '/images/corporate/IMG_2609.webp', name: 'IMG_2609.webp', category: 'corporate' },

  // Holidays - converted to WebP
  { path: '/images/holidays/20210509_113246.webp', name: '20210509_113246.webp', category: 'holidays' },
  { path: '/images/holidays/20210511_193336.webp', name: '20210511_193336.webp', category: 'holidays' },
  { path: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.webp', name: '339661EC-7B8C-4F55-BD25-280CF2E61A29.webp', category: 'holidays' },
  { path: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.webp', name: '49C24FD0-D7BB-4870-ACA3-32B6C2476B29.webp', category: 'holidays' },
  { path: '/images/holidays/IMG_0232.webp', name: 'IMG_0232.webp', category: 'holidays' },
  { path: '/images/holidays/IMG_6725.webp', name: 'IMG_6725.webp', category: 'holidays' },

  // Logo (keeping PNG for logo)
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

// Get image with rotation info
export const getImageInfo = (path: string): ImageInfo | undefined => {
  const cleanPath = getImageUrl(path);
  return ALL_IMAGES.find(img => img.path === cleanPath);
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
    console.log('🔍 All WebP images loaded:', ALL_IMAGES.length);
    console.log('📂 Categories:', getImageCategories());
    console.log('✅ Verified existing WebP images only');
  }
};

// Get random image from category
export const getRandomImageFromCategory = (category: string): string | null => {
  const images = getImagesByCategory(category);
  if (images.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};