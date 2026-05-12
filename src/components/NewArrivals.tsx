import { motion } from 'motion/react';
import { useRef } from 'react';

const products = [
  { id: 1, name: "Gold Silk Stole", price: "$450", image: "https://picsum.photos/seed/fashion-6/600/800" },
  { id: 2, name: "Maroon Velvet Gown", price: "$2,200", image: "https://picsum.photos/seed/fashion-7/600/800" },
  { id: 3, name: "Champagne Clutch", price: "$850", image: "https://picsum.photos/seed/fashion-8/600/800" },
  { id: 4, name: "Ivory Lace Dress", price: "$1,800", image: "https://picsum.photos/seed/fashion-9/600/800" },
  { id: 5, name: "Heritage Pearl Earrings", price: "$320", image: "https://picsum.photos/seed/fashion-10/600/800" },
  { id: 6, name: "Midnight Silk Scarf", price: "$280", image: "https://picsum.photos/seed/fashion-11/600/800" },
];

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="collections" className="py-32 bg-zinc-50">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">New <span className="italic text-maroon">Arrivals</span></h2>
            <p className="text-zinc-500 max-w-md">Our latest curation of high-fashion pieces designed for the modern avant-garde individual.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-4 border border-zinc-200 hover:border-gold transition-colors">
              <span className="uppercase text-[10px] tracking-widest">Discover All</span>
            </button>
          </div>
        </div>

        {/* Snapping Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 pb-12 cursor-grab active:cursor-grabbing"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="flex-none w-[80vw] md:w-[30vw] snap-start"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-widest text-xs">
                  Quick View
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-serif mb-1 group-hover:text-maroon transition-colors">{product.name}</h3>
                <p className="text-gold font-medium tracking-wider">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
