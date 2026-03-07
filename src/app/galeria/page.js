"use client";

import { useState } from 'react';
import images from '../data/galeria.json';
import PageTransition from "@/components/PageTransition";

export default function Galeria() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <PageTransition>
        <main className="relative min-h-screen bg-black text-white pt-32 pb-20 px-6">
      
      {/* Háttér (ugyanaz a konzisztencia miatt) */}
      <div 
        className="fixed inset-0 z-0 opacity-20 grayscale" 
        style={{ backgroundImage: "url('/auto.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-black italic uppercase mb-12 border-l-8 border-red-600 pl-6">
          Galéria
        </h1>

        {/* Kép rács */}
        {/* Kép rács */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
  {images.map((img) => (
    <div 
  key={img.id} 
  className="relative transition-all duration-500 ease-in-out hover:scale-110 hover:z-50 group"
>
  {/* Ez itt az eredeti kódod, szinte érintetlenül */}
  <div 
    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer border border-white/5 group-hover:border-red-600 transition-all duration-300"
    onClick={() => setSelectedImg(img.src)}
  >
    <img 
      src={img.src} 
      alt={img.title} 
      className="w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
      style={{ 
        objectPosition: img.pos || 'center'
      }}
    />
    
    {/* Sötétítő réteg - HOVERRE ELTŰNIK */}
    <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity duration-500" />
    
    {/* Felirat réteg - HOVERRE MEGJELENIK */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{img.title}</p>
    </div>
  </div>
</div>
  ))}
</div>
      </div>

      {/* Lightbox - Nagyított kép */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImg} 
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
              alt="Nagyított kép"
            />
            <button className="absolute top-0 right-0 text-white text-5xl p-4 transition-transform hover:scale-110 font-light">&times;</button>
          </div>
        </div>
      )}
    </main>
    </PageTransition>
  );
}