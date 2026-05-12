import { motion } from 'motion/react';

export default function FeaturedSections() {
  return (
    <section className="bg-white">
      {/* The Summer Edit */}
      <div id="couture" className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center p-12 md:p-32 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block font-medium">Vol. 01 / Collection</span>
            <h2 className="text-6xl md:text-8xl mb-8 leading-none">The <br /><span className="italic">Summer</span> Edit</h2>
            <p className="text-zinc-600 text-lg mb-12 max-w-md leading-relaxed">
              Breathable fabrics meet avant-garde silhouettes. A collection inspired by the Mediterranean coastline and the shifting sands of the Amalfi.
            </p>
            <a href="#" className="inline-flex items-center gap-4 group">
              <span className="uppercase tracking-widest text-xs font-bold">Discover Collection</span>
              <div className="w-12 h-[1px] bg-black group-hover:w-24 transition-all duration-500" />
            </a>
          </motion.div>
        </div>
        <div className="relative h-[60vh] md:h-auto overflow-hidden order-1 md:order-2">
          <img 
            src="https://picsum.photos/seed/fashion-edit-1/1200/1600" 
            alt="The Summer Edit" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-12 right-12 text-white/50 text-xs font-mono uppercase [writing-mode:vertical-rl]">
            Latitude 40.6333° N / Longitude 14.6027° E
          </div>
        </div>
      </div>

      {/* Couture Heritage */}
      <div id="heritage" className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t border-zinc-100">
        <div className="relative h-[60vh] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/heritage-1/1200/1600" 
            alt="Couture Heritage" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110 grayscale hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-maroon/20 mix-blend-multiply" />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-32 bg-maroon text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block font-medium">Since 1924 / Archive</span>
            <h2 className="text-6xl md:text-8xl mb-8 leading-none">Couture <br /><span className="italic font-light">Heritage</span></h2>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              Timeless craftsmanship passed down through generations. Every stitch tells a story of artistry, patience, and uncompromising luxury.
            </p>
            <button className="px-10 py-4 border border-white hover:bg-white hover:text-maroon transition-all duration-500 uppercase tracking-widest text-sm">
              Explore the Archive
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
