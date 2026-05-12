import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} id="hero" className="relative h-[150vh] overflow-hidden bg-white">
      {/* Parallax Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.h1 
          style={{ y: textY }}
          className="text-[30vw] font-black text-maroon/5 font-serif select-none tracking-tighter"
        >
          JIYA
        </motion.h1>
      </div>

      {/* Main Hero Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center p-8 md:p-24">
        <div className="relative w-full max-w-7xl h-full flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 z-20 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-gold font-medium tracking-[0.3em] uppercase mb-4">Couture Excellence</p>
              <h2 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight">
                Refining <br />
                <span className="italic text-maroon">Elegance</span>
              </h2>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <button className="px-10 py-4 bg-maroon text-white border border-maroon hover:bg-transparent hover:text-black transition-all duration-500 uppercase tracking-widest text-sm">
                  View Collection
                </button>
                <button className="px-10 py-4 border border-black hover:bg-black hover:text-white transition-all duration-500 uppercase tracking-widest text-sm">
                  Our Story
                </button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Container */}
          <motion.div 
            style={{ y: imageY }}
            className="flex-1 h-[70vh] md:h-[85vh] w-full relative z-10 order-1 md:order-2"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-maroon relative overflow-hidden"
            >
              <img 
                src="https://picsum.photos/seed/fashion-hero-1/1000/1500" 
                alt="Luxury Fashion Hero"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply" />
            </motion.div>
            
            {/* Floating Info */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 border border-gold/20 shadow-2xl hidden lg:block max-w-xs">
              <p className="font-serif text-2xl italic mb-4">"Fashion is the armor to survive the reality of everyday life."</p>
              <p className="text-xs uppercase tracking-widest text-gold">— Bill Cunningham</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
