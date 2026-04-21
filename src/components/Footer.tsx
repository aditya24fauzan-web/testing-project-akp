import { useState } from 'react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-dark border-t border-primary/20 pt-20 pb-10">
      <div className="container mx-auto px-6 border-b border-primary/10 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Logo PT Adipura Karya Persada" 
                  className="h-10 w-auto object-contain shrink-0 bg-white p-1 rounded"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-10 h-10 border border-primary flex items-center justify-center font-extrabold text-primary text-lg tracking-tighter">
                  AKP
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-widest text-white uppercase">PT. ADIPURA</span>
                <span className="text-[10px] tracking-[0.3em] text-primary uppercase">Karya Persada</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
              General Contractor & Engineering spesialis. Menyediakan end-to-end solusi pembangunan Clean Room, Cold Storage, dan instalasi HVAC industri berstandar global.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white tracking-[0.2em] uppercase text-xs mb-6">Peta Situs</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-400 text-xs hover:text-primary uppercase tracking-widest transition-colors font-semibold">Beranda</a></li>
              <li><a href="#about" className="text-gray-400 text-xs hover:text-primary uppercase tracking-widest transition-colors font-semibold">Tentang Kami</a></li>
              <li><a href="#products" className="text-gray-400 text-xs hover:text-primary uppercase tracking-widest transition-colors font-semibold">Produk & Material</a></li>
              <li><a href="#services" className="text-gray-400 text-xs hover:text-primary uppercase tracking-widest transition-colors font-semibold">Layanan Utama</a></li>
              <li><a href="#gallery" className="text-gray-400 text-xs hover:text-primary uppercase tracking-widest transition-colors font-semibold">Galeri Proyek</a></li>
              <li><a href="#contact" className="text-gray-400 text-xs hover:text-primary uppercase tracking-widest transition-colors font-semibold">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white tracking-[0.2em] uppercase text-xs mb-6">Layanan</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Clean Room</li>
              <li className="text-gray-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Cold Storage</li>
              <li className="text-gray-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> HVAC System</li>
              <li className="text-gray-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Sandwich Panel</li>
              <li className="text-gray-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Aluminium Extrusion</li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} PT. Adipura Karya Persada.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
