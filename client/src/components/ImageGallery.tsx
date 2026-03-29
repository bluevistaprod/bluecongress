import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image?: string; // URL de l'image réelle
  placeholder: string; // Placeholder color or pattern
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
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
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer group"
          >
            <div className={`${image.placeholder} rounded-lg h-64 flex items-center justify-center overflow-hidden relative`}>
              {image.image ? (
                <img src={image.image} alt={image.title} className="w-full h-full object-cover" />
              ) : null}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 rounded-full p-3">
                    <ChevronRight size={24} className="text-black" />
                  </div>
                </div>
              </div>
              {!image.image && <p className="text-white text-center px-4 font-semibold">{image.title}</p>}
            </div>
            <p className="text-sm text-muted-foreground mt-3">{image.description}</p>
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
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className={`${images[selectedIndex].placeholder} rounded-lg h-96 md:h-[500px] flex items-center justify-center relative overflow-hidden`}>
              {images[selectedIndex].image ? (
                <img src={images[selectedIndex].image} alt={images[selectedIndex].title} className="w-full h-full object-cover" />
              ) : (
                <p className="text-white text-center px-4 font-semibold text-xl">
                  {images[selectedIndex].title}
                </p>
              )}
            </div>

            {/* Image Info */}
            <div className="bg-card rounded-b-lg p-6 border border-t-0 border-border">
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300 transition"
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
