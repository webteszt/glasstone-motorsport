"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import races from "../../data/versenyek.json";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";

export default function VersenyReszletek() {
  const params = useParams();
  const id = params.id;

  

  // Megkeressük a versenyt az ID alapján
  const race = useMemo(() => {
    if (!params?.id) return null;
    return races.find((r) => r.id === params.id);
  }, [params?.id]);

  // Ha nincs ilyen verseny (vagy rossz az ID)
  if (!race) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">A verseny nem található</h1>
          <Link href="/versenyek" className="text-red-600 hover:underline">Vissza a listához</Link>
        </div>
      </main>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Vissza gomb */}
          <Link href="/versenyek" className="text-zinc-500 hover:text-white transition-colors mb-8 inline-block uppercase text-xs tracking-widest font-bold">
            ← Vissza a versenyekhez
          </Link>

          {/* Fejléc kép */}
          <div className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden border border-white/10">
            <img 
              src={race.image} 
              alt={race.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase italic mb-4 inline-block">
                {race.category}
              </span>
              <h1 className="text-5xl font-black italic uppercase drop-shadow-lg leading-tight">
                {race.title}
              </h1>
            </div>
          </div>

          {/* Adatok rács */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Beszámoló</h2>
              <p className="text-zinc-400 leading-relaxed text-lg italic">
                {race.description}
              </p>
            </div>
            
            <div className="bg-zinc-900/50 p-8 border-l-4 border-red-600 rounded-r-xl">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/50">Részletek</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">Dátum</p>
                  <p className="font-bold">{race.date}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">Helyszín</p>
                  <p className="font-bold">{race.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}