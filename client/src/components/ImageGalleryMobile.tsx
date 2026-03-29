import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image?: string;
  placeholder: string;
}

interface ImageGalleryMobileProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGalleryMobile({ images, title }: ImageGalleryMobileProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedIndex(null);
  };

  return (
    <div>
      {title && <h3 className="text-2xl font-bold mb-6">{title}</h3>}
      
      {/* Gallery Grid - Carousel Style for Mobile Screenshots */}
      <div className="flex overflow-x-auto gap-4 pb-4 scroll-smooth">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer group flex-shrink-0"
          >
            {/* Mobile Phone Frame */}
            <div className="relative w-48 h-96 rounded-3xl border-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-3xl z-10"></div>
              
              {/* Screen Content */}
              <div className={`${image.placeholder} w-full h-full flex items-center justify-center relative overflow-hidden`}>
                {image.image ? (
                  <img src={image.image} alt={image.title} className="w-full h-full object-cover" />
                ) : null}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-3">
                      <ChevronRight size={24} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
            </div>
            
            {/* Image Info Below Phone */}
            <div className="mt-4 w-48">
              <p className="text-sm font-semibold text-foreground truncate">{image.title}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Mobile Phone Frame - Large */}
            <div className="relative w-full max-w-sm mx-auto rounded-3xl border-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-7 bg-gray-800 rounded-b-3xl z-10"></div>
              
              {/* Screen Content */}
              <div className={`${images[selectedIndex].placeholder} w-full aspect-[9/16] flex items-center justify-center relative overflow-hidden`}>
                {images[selectedIndex].image ? (
                  <img src={images[selectedIndex].image} alt={images[selectedIndex].title} className="w-full h-full object-cover" />
                ) : (
                  <p className="text-white text-center px-4 font-semibold text-xl">
                    {images[selectedIndex].title}
                  </p>
                )}
              </div>
              
              {/* Phone Home Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
            </div>

            {/* Image Info */}
            <div className="bg-card rounded-lg p-6 border border-border mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">{images[selectedIndex].title}</h3>
              <p className="text-muted-foreground mb-4">{images[selectedIndex].description}</p>
              <p className="text-sm text-muted-foreground">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 text-white hover:text-gray-300 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 text-white hover:text-gray-300 transition"
                  aria-label="Next image"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
