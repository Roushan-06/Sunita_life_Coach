import React from 'react';
import { Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const YoutubeCTA = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-red-50 via-rose-50 to-red-100 dark:from-red-950/20 dark:via-rose-950/10 dark:to-red-900/20 border-y border-red-100 dark:border-red-900/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 dark:bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/50 dark:border-white/10"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 mb-6 shadow-xl shadow-red-500/20 animate-bounce-slow">
            <Youtube className="w-10 h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora text-foreground mb-4">
            Awaken Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Shakti</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the community on YouTube! Get free weekly insights on brain rewiring, emotional healing, and manifesting abundance to transform your reality.
          </p>
          
          {/* YouTube Shorts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              "Lub1MHTcUSc",
              "pgFw-Rk6O-w",
              "8ucNohUaA3c",
              "KD8FqBBshLU"
            ].map((id, idx) => (
              <div key={idx} className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-red-100 dark:border-red-900/30 aspect-[9/16] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube Short ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <a
            href="https://youtube.com/@shaktiawakenswithsunita?si=OTBPoiHXmzOvq0gy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <Youtube className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              Subscribe to My Channel
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YoutubeCTA;
