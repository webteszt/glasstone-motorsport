import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Glasstone Motorsport",
  description: "Pál Krisztián Rallycross versenyző hivatalos oldala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className="antialiased font-sans">
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center">
          <div className="text-xl font-bold italic tracking-tighter text-white/90 uppercase mb-2"> GLASSTONE MOTORSPORT</div>
          <div className="space-x-6 text-sm uppercase font-semibold tracking-widest">
            <Link href="/" className="text-red-600 font-black">Főoldal</Link>
            <Link href="/versenyek" className="text-red-600 font-black">Versenyek</Link>
            <Link href="/galeria" className="text-red-600 font-black">Galéria</Link>
            <Link href="/webshop" className="text-red-600 font-black">Webshop</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
