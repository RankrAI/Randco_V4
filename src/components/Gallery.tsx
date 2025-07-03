import React, { useState, lazy, Suspense } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';

const Lightbox = lazy(() => import('./Lightbox'));

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: number;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, columns = 3, className = "" }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6 ${className}`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative overflow-hidden">
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lazy-loaded Lightbox */}
      {selectedImage !== null && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <Lightbox
            images={images}
            selectedIndex={selectedImage}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        </Suspense>
      )}
    </>
  );
};

export default Gallery;