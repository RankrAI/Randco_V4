import React, { useState } from 'react';
import { getOptimizedImageUrl, generatePlaceholder } from '../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  preset?: 'thumbnail' | 'gallery' | 'hero' | 'portfolio';
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width = 800,
  height = 600,
  quality = 85,
  preset,
  loading = 'lazy',
  style
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Apply preset if provided
  const finalWidth = preset ? 
    (preset === 'thumbnail' ? 300 : preset === 'hero' ? 1920 : preset === 'portfolio' ? 600 : 800) : width;
  const finalHeight = preset ? 
    (preset === 'thumbnail' ? 300 : preset === 'hero' ? 1080 : preset === 'portfolio' ? 400 : 600) : height;

  const optimizedSrc = getOptimizedImageUrl(src, {
    width: finalWidth,
    height: finalHeight,
    quality,
    format: 'webp'
  });

  const fallbackSrc = getOptimizedImageUrl(src, {
    width: finalWidth,
    height: finalHeight,
    quality,
    format: 'jpeg'
  });

  const placeholder = generatePlaceholder(finalWidth, finalHeight);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: finalWidth, height: finalHeight, ...style }}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />
      
      {/* Optimized image with WebP support */}
      <picture>
        <source srcSet={optimizedSrc} type="image/webp" />
        <img
          src={fallbackSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          width={finalWidth}
          height={finalHeight}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;