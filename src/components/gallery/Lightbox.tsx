import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import type { GalleryImage } from '../../config/hostelConfig';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  if (!currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider font-semibold bg-gold-500/20 text-gold-400 border border-gold-400/30 px-3 py-1 rounded-full">
            {currentImage.category}
          </span>
          <span className="text-xs text-slate-400">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4 select-none">
        {/* Navigation Previous */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-400"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="max-w-5xl max-h-[75vh] flex flex-col items-center">
          <img
            src={currentImage.imageUrl}
            alt={currentImage.altText}
            className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Navigation Next */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-400"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Title, Caption & Stock disclaimer */}
      <div className="max-w-3xl mx-auto text-center text-white space-y-1">
        <h4 className="text-base sm:text-lg font-bold">{currentImage.title}</h4>
        <p className="text-xs sm:text-sm text-slate-300">{currentImage.caption}</p>
        {currentImage.isStockPhoto && (
          <p className="text-[11px] text-amber-300/80 flex items-center justify-center gap-1 pt-1">
            <Info className="w-3 h-3" />
            <span>Sample representation photo for layout preview</span>
          </p>
        )}
      </div>
    </div>
  );
};
