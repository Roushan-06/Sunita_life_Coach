import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-lora leading-tight text-foreground text-center lg:text-left">
                Rewire Your Mind. Heal Your Energy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Create Your Reality.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center lg:text-left">
                For women, teens & professionals ready to break emotional blocks and step into clarity, confidence & abundance.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">NLP Practitioner</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Brain Rewiring Mentor</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Life Coach</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Law of Attraction Coach</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/book">Start Your Transformation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 p-0"
              >
                <a
                  href="/Awaken Your Shakti_ The Life Transformation Blueprint.pdf"
                  download="Awaken_Your_Shakti_The_Life_Transformation_Blueprint.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center px-8 py-4"
                >
                  Get Free Healing Toolkit
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground">
              <span className="text-center sm:text-left">💬 WhatsApp: +91-9279231459</span>
              <span className="text-center sm:text-left">✉️ theshaktiawakens@gmail.com</span>
              <span className="text-center sm:text-left">📍 Bangalore, India</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/images/hero2.jpg"
                alt="Sunita - Life Coach"
                className="relative rounded-3xl shadow-2xl max-w-lg w-full scale-110"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Lives Transformed</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Who I Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-28 relative"
        >
          <div className="text-center mb-12">
            <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-widest uppercase text-xs mb-3 block">Your Journey Begins Here</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-lora text-foreground">Who I Help Transform Their Lives</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative z-10">
            {/* Card 1 */}
            <div className="group p-6 sm:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10 shadow-sm">🎓</div>
              <h4 className="font-bold text-foreground text-sm sm:text-lg relative z-10">Students</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 relative z-10">Overcome anxiety & find clarity</p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 sm:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 relative z-10 shadow-sm">💼</div>
              <h4 className="font-bold text-foreground text-sm sm:text-lg relative z-10">Professionals</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 relative z-10">Beat burnout & accelerate career</p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 sm:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10 shadow-sm">🏠</div>
              <h4 className="font-bold text-foreground text-sm sm:text-lg relative z-10">Home Makers</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 relative z-10">Rediscover passion & identity</p>
            </div>

            {/* Card 4 */}
            <div className="group p-6 sm:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 relative z-10 shadow-sm">🌟</div>
              <h4 className="font-bold text-foreground text-sm sm:text-lg relative z-10">Seekers</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 relative z-10">Unlock your true potential</p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-24 relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl shadow-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-violet-500/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              <div className="flex flex-col items-center justify-center group p-4">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">8+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div className="flex flex-col items-center justify-center group p-4 border-l border-gray-200 dark:border-gray-700 md:border-l-0 lg:border-l">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">500+</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Lives Transformed</div>
              </div>
              <div className="flex flex-col items-center justify-center group p-4 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">ICF</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Certified Coach</div>
              </div>
              <div className="flex flex-col items-center justify-center group p-4 border-t border-l border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">MA</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Psychology</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;