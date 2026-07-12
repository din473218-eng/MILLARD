import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ['All', 'Cakes', 'Bread', 'Cookies', 'Cupcakes', 'Interior & Craft'];

  const getFilterCategory = (itemCategory: string) => {
    if (itemCategory.toLowerCase() === 'bakery interior' || itemCategory.toLowerCase() === 'baking process') {
      return 'Interior & Craft';
    }
    return itemCategory;
  };

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Interior & Craft') {
      return item.category.toLowerCase() === 'bakery interior' || item.category.toLowerCase() === 'baking process';
    }
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <section id="gallery" className="py-24 bg-bakery-cream relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">The Millard Gallery</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            Visual Delights & Oven Moments
          </h2>
          <p className="text-sm text-bakery-brown/75 mt-3">
            A sneak peek into our baking sheets, flour clouds, custom cake creations, and the cozy local storefront where all the magic happens.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8" id="gallery-filters">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => { setActiveFilter(filter); setLightboxIndex(null); }}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-bakery-gold text-white shadow-sm'
                    : 'bg-white text-bakery-brown/70 hover:bg-bakery-beige-light hover:text-bakery-brown-dark border border-bakery-beige/25'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-bakery-beige/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual Hover Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-brown-dark/90 via-bakery-brown-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 text-left">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-bakery-gold uppercase font-bold tracking-wider">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white mt-1">
                        {item.title}
                      </h4>
                    </div>
                    <div className="p-2 bg-white/20 rounded-lg text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-10"
              id="close-lightbox"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-10"
              id="prev-lightbox"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-10"
              id="next-lightbox"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[80vh] w-full z-10 flex flex-col items-center"
              id="lightbox-container"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/15"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center text-white">
                <span className="text-[10px] text-bakery-gold uppercase font-bold tracking-widest block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-lg font-bold mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-white/60 mt-1 font-mono">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
