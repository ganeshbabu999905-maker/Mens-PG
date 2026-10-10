import React, { useState } from 'react';
import { Info, Maximize2 } from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { Lightbox } from '../components/gallery/Lightbox';
import { GalleryItemSkeleton } from '../components/common/SkeletonLoader';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const categories = [
    'All',
    'Bedrooms',
    'Bathrooms',
    'Building Exterior',
    'Dining Area',
    'Common Areas'
  ];

  const filteredImages = HOSTEL_CONFIG.gallery.filter((img) => {
    if (activeCategory === 'All') return true;
    return img.category === activeCategory;
  });

  const handleImageLoad = (id: string) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Visual Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Take a visual tour of bedrooms, bathrooms, building exterior, dining space, and relaxation areas. Click any image to view in full-screen lightbox.
          </p>
        </div>

        {/* Photography Transparency Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-sm max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900">Photography Notice:</span> High-quality sample photographs are shown below to demonstrate room layouts, hygiene standards, and facility setups. Real on-site photographs of Ganesh Mens Hostel will replace these upon owner submission.
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs sm:text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => {
            const isLoaded = imagesLoaded[image.id];
            return (
              <div
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className="bg-white rounded-3xl border border-slate-200 shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {!isLoaded && <GalleryItemSkeleton />}
                  <img
                    src={image.imageUrl}
                    alt={image.altText}
                    onLoad={() => handleImageLoad(image.id)}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />

                  {/* Category tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-navy-950/80 backdrop-blur-sm text-white">
                      {image.category}
                    </span>
                  </div>

                  {/* Expand icon hover overlay */}
                  <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 text-navy-950 shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Caption bar */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{image.caption}</p>
                  </div>

                  {image.isStockPhoto && (
                    <div className="mt-2 text-[10px] text-amber-700/80 flex items-center gap-1">
                      <span>* Layout sample representation</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={() =>
            setSelectedImageIndex((prev) =>
              prev !== null ? (prev + 1) % filteredImages.length : 0
            )
          }
          onPrev={() =>
            setSelectedImageIndex((prev) =>
              prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
            )
          }
        />
      )}
    </div>
  );
};
