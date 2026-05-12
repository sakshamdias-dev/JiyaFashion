import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-serif font-black text-white mb-8 tracking-tighter">JIYA</h2>
            <p className="text-zinc-400 max-w-xs leading-loose">
              Defining the future of luxury through avant-garde design and heritage craftsmanship.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Boutique</h4>
            <ul className="space-y-4">
              {['New In', 'All Clothing', 'Accessories', 'Evening Wear'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Discover</h4>
            <ul className="space-y-4">
              {['Our Story', 'Heritage', 'Couture', 'Journal'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Journal</h4>
            <p className="text-sm text-zinc-500 mb-6">Receive invitations to our exclusive events and early access to collections.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xs tracking-widest focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 group-hover:text-gold transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-8">
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={18} /></a>
          </div>
          <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
            © 2026 Jiya Fashion. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-[0.2em] text-zinc-600 hover:text-white transition-colors uppercase">Privacy</a>
            <a href="#" className="text-[10px] tracking-[0.2em] text-zinc-600 hover:text-white transition-colors uppercase">Terms</a>
          </div>
        </div>
      </div>
      
      {/* Gigantic Background Text */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02]">
        <h1 className="text-[30vw] font-serif font-black leading-none">JIYA</h1>
      </div>
    </footer>
  );
}
