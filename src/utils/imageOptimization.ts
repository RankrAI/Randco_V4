// Image optimization utilities
export interface OptimizedImage {
  src: string;
  webp?: string;
  placeholder: string;
  width: number;
  height: number;
}

// CDN configuration - you can replace with your preferred CDN
const CDN_BASE_URL = process.env.VITE_CDN_URL || '';

export const getOptimizedImageUrl = (
  originalPath: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpeg' | 'png';
  } = {}
): string => {
  // If using a CDN like Cloudinary, ImageKit, or similar
  if (CDN_BASE_URL) {
    const { width = 800, height, quality = 85, format = 'webp' } = options;
    
    // Example for Cloudinary (adjust for your CDN)
    const transformations = [
      `w_${width}`,
      height ? `h_${height}` : '',
      `q_${quality}`,
      `f_${format}`
    ].filter(Boolean).join(',');
    
    return `${CDN_BASE_URL}/image/upload/${transformations}${originalPath}`;
  }
  
  // Fallback to original path
  return originalPath;
};

export const generatePlaceholder = (width: number, height: number): string => {
  // Generate a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#F3F4F6"/>
      <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)/8}" fill="#E5E7EB"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Image presets for different use cases
export const IMAGE_PRESETS = {
  thumbnail: { width: 300, height: 300, quality: 80 },
  gallery: { width: 800, height: 600, quality: 85 },
  hero: { width: 1920, height: 1080, quality: 90 },
  portfolio: { width: 600, height: 400, quality: 85 }
};