import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface LightboxProps {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev
}) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors duration-200 z-10"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors duration-200 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors duration-200 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="max-w-4xl max-h-full">
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Lightbox;