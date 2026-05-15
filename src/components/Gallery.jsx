import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryFiles = [
  "WhatsApp Image 2026-05-08 at 7.01.09 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.09 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.09 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.09 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.10 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (10).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.11 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.12 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (10).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.13 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.14 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.14 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.14 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.14 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.01.14 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.08 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (10).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (11).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM (9).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.09 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.06.10 AM.jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (1).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (2).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (3).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (4).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (5).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (6).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (7).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM (8).jpeg",
  "WhatsApp Image 2026-05-08 at 7.08.54 AM.jpeg",
  "WhatsApp Video 2026-05-08 at 6.53.43 AM.mp4",
  "WhatsApp Video 2026-05-08 at 7.01.14 AM.mp4",
  "WhatsApp Video 2026-05-08 at 7.01.15 AM.mp4",
  "WhatsApp Video 2026-05-08 at 7.01.18 AM.mp4",
  "WhatsApp Video 2026-05-08 at 7.01.19 AM.mp4",
  "WhatsApp Video 2026-05-08 at 7.01.21 AM.mp4"
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryFiles.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < galleryFiles.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-lora mb-4 text-foreground">
            Moments & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Memories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[800px] overflow-y-auto pr-2 rounded-xl">
          {galleryFiles.map((file, index) => {
            const isVideo = file.endsWith('.mp4');
            const url = `/Sunita- Gallery/${file}`;
            
            return (
              <div 
                key={index} 
                className="relative aspect-square overflow-hidden rounded-xl bg-muted shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {isVideo ? (
                  <video 
                    controls 
                    src={url} 
                    onClick={(e) => {
                      // Prevent default to allow custom modal opening, or just rely on controls
                      // If we want modal for video too:
                      e.preventDefault();
                      setSelectedIndex(index);
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                ) : (
                  <img 
                    src={url} 
                    alt="Gallery item" 
                    loading="lazy" 
                    onClick={() => setSelectedIndex(index)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal (Lightbox) */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full transition-colors z-50"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <div className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {galleryFiles[selectedIndex].endsWith('.mp4') ? (
              <video 
                controls 
                autoPlay
                src={`/Sunita- Gallery/${galleryFiles[selectedIndex]}`} 
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl animate-in zoom-in-95 duration-300"
              />
            ) : (
              <img 
                src={`/Sunita- Gallery/${galleryFiles[selectedIndex]}`} 
                alt="Zoomed gallery item" 
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl animate-in zoom-in-95 duration-300"
              />
            )}
          </div>

          <button 
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full transition-colors z-50"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
