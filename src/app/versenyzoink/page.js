"use client";
import Link from 'next/link';
import drivers from '../data/versenyzok.json';
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function VersenyzokGrid() {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-black text-white pt-32 pb-20 px-6">
        
        {/* FIX HÁTTÉR */}
        <div 
          className="fixed inset-0 z-0 opacity-20 grayscale pointer-events-none" 
          style={{ backgroundImage: "url('/auto.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 27%' }} 
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-5xl font-black italic uppercase mb-12 border-l-8 border-red-600 pl-6 text-white leading-none">
            Versenyzőink
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {drivers.map((driver) => (
              <Link href={`/versenyzoink/bemutato?id=${driver.id}`} key={driver.id} className="block group">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  /* BRUTE FORCE MAGASSÁG: 340px - Ez nem tud eltűnni */
                  style={{ height: '340px' }}
                  className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950"
                >
                  {/* A KÉP */}
                  <img 
                    src={driver.kep} 
                    alt={driver.nev} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                  />
                  
                  {/* FELSŐ SÖTÉTÍTŐ GRADIENS */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none" />

                  {/* A SÁV */}
                  <div className="absolute top-0 left-0 w-full z-20 bg-black/90 backdrop-blur-2xl border-b border-white/5 p-5 flex items-center justify-between transition-all duration-300 group-hover:bg-red-600">
                    
                    <div className="transition-transform duration-300 group-hover:scale-125 origin-left">
                      <span className="text-3xl font-black italic text-white leading-none tracking-tighter drop-shadow-lg">
                        {driver.szam}
                      </span>
                    </div>

                    <span className="text-sm font-bold uppercase tracking-widest text-white leading-none drop-shadow-lg">
                      {driver.nev}
                    </span>

                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}