import PageTransition from '@/components/PageTransition';
import Image from 'next/image';

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Háttér textúra/effekt (később videóra cserélhető) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-40 z-10" />
      <div className="absolute inset-0 bg-[url('/auto.jpg')] bg-cover opacity-50 z-0" style={{ backgroundPosition: 'center 27%' }} />

      {/* Hero Tartalom */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-1 italic">
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

      {/* Social Ikonok a Hero alján */}
      <div className="absolute bottom-10 z-20 flex space-x-8 items-center border-t border-white/10 pt-6 px-10">
        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=61574814856526" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-8 h-8" />
        </a>

        {/* Youtube */}
        <a href="https://www.youtube.com/@gomorring8225/featured" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-10 h-10" />
        </a>

        {/* Instagram - Hamarosan (szürke) */}
        <div className="opacity-30 cursor-not-allowed group relative">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-8 h-8 grayscale" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-white text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Hamarosan</span>
        </div>

        {/* TikTok - Hamarosan (szürke) */}
        <div className="opacity-30 cursor-not-allowed group relative">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="w-8 h-8 grayscale text-white" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-white text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Hamarosan</span>
        </div>
      </div>
    </main>
    </PageTransition>
  );
}