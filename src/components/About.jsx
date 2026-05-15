import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-stretch">
          {/* About Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start h-full"
          >
            <div className="relative w-full h-full min-h-[400px] lg:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="/images/main.jpg" 
                alt="Sunita Singh - Life Coach" 
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover max-w-md mx-auto lg:mx-0"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-lora text-foreground text-center lg:text-left">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Sunita</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              Hi, I'm Sunita, a certified Life Coach, NLP Practitioner, Brain Rewiring Mentor, and Law of Attraction Coach. My mission is to empower individuals to unlock their true potential and achieve their goals.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              I've helped students, working professionals, and home makers overcome challenges and achieve peak performance. I'm passionate about helping people rewire their minds, heal emotionally, and create the life they deserve.
            </p>

            <p className="text-base sm:text-lg text-foreground font-medium text-center lg:text-left">
              Let's work together to unlock your full potential!
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl border border-violet-100 dark:border-violet-800/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-xl shadow-inner">
                    🎯
                  </div>
                  <h3 className="font-bold text-foreground text-lg">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To empower individuals to break through emotional barriers, rewire their mindset, and unlock their true potential for a deeply fulfilling life.
                </p>
              </div>
              <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xl shadow-inner">
                    👁️
                  </div>
                  <h3 className="font-bold text-foreground text-lg">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To create a world where everyone lives with crystal-clear clarity, unshakeable confidence, and true abundance, manifesting their dreams.
                </p>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-foreground text-sm sm:text-base">Certified Life Coach</span>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-foreground text-sm sm:text-base">NLP Practitioner</span>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-foreground text-sm sm:text-base">Brain Rewiring Mentor</span>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-foreground text-sm sm:text-base">Law of Attraction Coach</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 text-center lg:text-left">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-6 sm:px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Start Your Transformation Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;