import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image?: string;
  placeholder: string;
}

interface ImageSliderProps {
  images: GalleryImage[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Calculate number of slides (2 images per slide)
  const imagesPerSlide = 2;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);
  
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const getCurrentImages = () => {
    const startIndex = currentSlide * imagesPerSlide;
    return images.slice(startIndex, startIndex + imagesPerSlide);
  };

  return (
    <div className="w-full">
      {/* Slider Container */}
      <div className="relative bg-white rounded-xl overflow-hidden">
        {/* Images Grid - 2 per slide */}
        <div className="flex items-center justify-center gap-6 p-8 min-h-[500px]">
          {getCurrentImages().map((image) => (
            <div key={image.id} className="flex-1 flex justify-center">
              {/* Mobile Phone Frame */}
              <div className="relative w-40 h-72 rounded-3xl border-6 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden flex-shrink-0">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-800 rounded-b-2xl z-10"></div>
                
                {/* Screen Content */}
                <div className={`${image.placeholder} w-full h-full flex items-center justify-center relative overflow-hidden`}>
                  {image.image ? (
                    <img src={image.image} alt={image.title} className="w-full h-full object-cover" />
                  ) : null}
                </div>
                
                {/* Phone Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))}
          
          {/* Handle odd number of images - show placeholder */}
          {getCurrentImages().length === 1 && (
            <div className="flex-1 flex justify-center">
              <div className="w-40 h-72 rounded-3xl border-6 border-gray-200 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400 text-center text-sm">Fin de la galerie</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A2540] rounded-full p-2 transition shadow-lg z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A2540] rounded-full p-2 transition shadow-lg z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dot Navigation */}
      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#00C4B4] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {totalSlides > 1 && (
        <p className="text-center text-sm text-gray-600 mt-4">
          Slide {currentSlide + 1} / {totalSlides}
        </p>
      )}
    </div>
  );
}
