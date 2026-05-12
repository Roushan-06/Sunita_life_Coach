import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const galleryFiles = [
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

const FullGallery = () => {
  return (
    <section className="py-28 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-lora mb-4 text-foreground">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All our precious moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mb-8 flex justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/#gallery">← Back to Home</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img 
                    src={url} 
                    alt="Gallery item" 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FullGallery;
