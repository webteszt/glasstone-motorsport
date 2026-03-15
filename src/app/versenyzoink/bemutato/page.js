"use client"
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import drivers from '../../data/versenyzok.json';
import PageTransition from "@/components/PageTransition";

function BemutatoContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id');
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  // Az adott versenyzőre ugrás betöltéskor
  useEffect(() => {
    if (initialId && containerRef.current) {
      const index = drivers.findIndex(d => d.id === parseInt(initialId));
      if (index !== -1) {
        containerRef.current.scrollTo({ top: index * window.innerHeight });
      }
    }
  }, [initialId]);

  const scrollToSection = (index) => {
    containerRef.current.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' });
  };

  return (
    <main className="h-screen overflow-hidden bg-black text-white relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/auto.jpg')] bg-cover opacity-30 grayscale" style={{ backgroundPosition: 'center 27%' }} />
      </div>

      {/* Navigációs pöttyök */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
        {drivers.map((_, i) => (
          <div 
            key={i} 
            onClick={() => scrollToSection(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeSection === i ? 'bg-red-600 scale-150' : 'bg-white/20'}`} 
          />
        ))}
      </div>

      <div 
        ref={containerRef} 
        onScroll={(e) => setActiveSection(Math.round(e.target.scrollTop / window.innerHeight))}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth relative z-10"
      >
        {drivers.map((driver) => (
          <section key={driver.id} className="h-screen w-full snap-start flex items-center justify-center px-6 md:px-20">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-2xl text-red-600 font-black text-8xl italic block mb-[-40px]">{driver.szam}</span>
                <h2 className="text-6xl md:text-8xl font-black italic uppercase mb-6">{driver.nev}</h2>
                <p className="text-2xl text-red-600 font-bold uppercase italic mb-8">{driver.auto}</p>
                <p className="text-zinc-400 text-lg border-l border-red-600/30 pl-6 italic">{driver.leiras}</p>
              </motion.div>
              <div className="flex justify-center">
                <img src={driver.kep} className="max-w-[400px] aspect-[3/4] object-cover rounded shadow-2xl border border-white/10" />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default function BemutatoPage() {
  return (
    <Suspense fallback={<div className="bg-black h-screen" />}>
      <BemutatoContent />
    </Suspense>
  );
}