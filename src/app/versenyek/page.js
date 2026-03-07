import PageTransition from '@/components/PageTransition';
import races from '../data/versenyek.json';
import Link from 'next/link';

export default function VersenyekPage() {
  return (
    <PageTransition>
        <main className="relative min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-20 overflow-hidden">
      
      {/* Háttér kép (Ugyanaz, mint a főoldalon) */}
      <div 
        className="fixed inset-0 z-0 opacity-30 grayscale shadow-inner" 
        style={{ 
          backgroundImage: "url('/auto.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center 60%' 
        }} 
      />
      
      {/* Sötétítő gradiens réteg */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />

      {/* Tényleges tartalom - fontos a relative és a z-20! */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <h1 className="text-5xl font-black italic uppercase mb-12 border-l-8 border-red-600 pl-6 drop-shadow-md">
          Versenynaptár & <span className="text-red-600">Eredmények</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {races.map((race) => (
            <div key={race.id} className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-red-600 transition-all duration-300 group shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={race.image} 
                  alt={race.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase italic shadow-lg">
                  {race.category}
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-2">{race.date}</p>
                <h2 className="text-2xl font-bold uppercase mb-4 tracking-tighter">{race.title}</h2>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{race.description}</p>
                
                <Link href={`/versenyek/${race.id}`} className="inline-block bg-white text-black font-black px-6 py-3 uppercase text-xs tracking-tighter hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1">
                  Beszámoló és képek →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </PageTransition>
  );
}