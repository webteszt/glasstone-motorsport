"use client"
import PageTransition from '@/components/PageTransition';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageTransition>
      <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#0a0a0a] text-white relative">
        
        {/* FIX HÁTTÉR - Ez nem mozog, nem homályosodik, stabil marad */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/auto.jpg')] bg-cover opacity-50" style={{ backgroundPosition: 'center 27%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-40" />
        </div>

        {/* 1. SZEKCIÓ: HERO */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden z-10">
          {/* Hero Tartalom */}
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-1">
              Glasstone <span className="text-red-600">Motorsport</span>
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest text-gray-300 uppercase">
              Pál Krisztián | Rallycross Driver
            </p>
            
            <div className="mt-10">
              <a href="/versenyek" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all uppercase tracking-wider shadow-lg shadow-red-600/20">
                Versenyek megtekintése
              </a>
            </div>
          </div>

          {/* Social Ikonok */}
          <div className="absolute bottom-10 z-20 flex space-x-8 items-center border-t border-white/10 pt-6 px-10">
            <a href="https://www.facebook.com/profile.php?id=61574814856526" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@gomorring8225/featured" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-10 h-10" />
            </a>
            <div className="opacity-30 cursor-not-allowed group relative text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-8 h-8" />
            </div>
            <div className="opacity-30 cursor-not-allowed group relative">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="w-8 h-8" />
            </div>
          </div>
        </section>

        {/* 2. SZEKCIÓ: KAPCSOLAT */}
        <section className="relative h-screen w-full flex items-center justify-center snap-start overflow-hidden z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 300 }} // Nagyobb eltolás az "átúszó" érzetért
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }} // Akkor indul az animáció, amikor majdnem ott van
            transition={{ 
              duration: 0.8, // Lassabb beúszás
              ease: "easeOut" 
            }}
            className="relative z-30 bg-black/90 backdrop-blur-md w-[90%] md:w-[80%] max-w-6xl p-8 md:p-16 border border-white/10 shadow-2xl rounded-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* BAL OLDAL: Adatok */}
              <div className="space-y-8">
                <h2 className="text-red-600 font-black uppercase italic tracking-[0.3em] text-sm underline decoration-2 underline-offset-8">
                  Kapcsolat
                </h2>
                
                <div className="space-y-6 text-left">
                  <div className="border-l-2 border-red-600/50 pl-6">
                    <p className="text-zinc-600 text-[10px] uppercase font-black tracking-widest mb-1">Cím</p>
                    <p className="text-white text-lg font-light italic text-zinc-300">3630 Putnok, Serényi Béla Út 5.</p>
                  </div>
                  <div className="border-l-2 border-red-600/50 pl-6">
                    <p className="text-zinc-600 text-[10px] uppercase font-black tracking-widest mb-1">Telefon</p>
                    <a href="tel:+36301234567" className="text-white text-lg font-bold italic hover:text-red-600 transition-colors">
                      +36 20 279 0408
                    </a>
                  </div>
                  <div className="border-l-2 border-red-600/50 pl-6">
                    <p className="text-zinc-600 text-[10px] uppercase font-black tracking-widest mb-1">E-mail</p>
                    <a href="mailto:info@glasstonemotorsport.hu" className="text-white text-lg font-light italic hover:text-red-600 transition-colors">
                      info@glasstone.hu
                    </a>
                  </div>
                </div>
              </div>

              {/* JOBB OLDAL: Kép */}
              <div className="relative">
                <img 
                  src="/muhely.jpg" 
                  alt="Workshop" 
                  className="w-full h-[300px] object-cover rounded-sm border border-white/10"
                />
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </PageTransition>
  );
}