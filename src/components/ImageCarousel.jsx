// src/components/ImageCarousel.jsx
import { useState, useEffect } from 'react';

const ImageCarousel = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when carousel opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length, onClose]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 text-3xl p-2"
        aria-label="Close carousel"
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 text-white hover:text-gray-300 text-4xl p-2 hover:bg-black hover:bg-opacity-50 rounded-full transition-all duration-200"
          aria-label="Previous image"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 z-10 text-white hover:text-gray-300 text-4xl p-2 hover:bg-black hover:bg-opacity-50 rounded-full transition-all duration-200"
          aria-label="Next image"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] mx-4">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
            <p className="text-center text-lg">{images[currentIndex].caption}</p>
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full">
            <span className="text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-white scale-110'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Dots (Alternative for many images) */}
      {images.length > 8 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-gray-400 hover:bg-gray-200'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm opacity-75">
          Use ← → arrow keys or click the arrows to navigate • Press ESC to close
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
