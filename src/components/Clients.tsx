import { Building2 } from 'lucide-react';

export default function Clients() {
  const clientLogos = [
    "tsm.png", "rsadvent.png", "lc.png", "medion.png", "rsboyolali.png", 
    "biofarma.png", "persada.png", "combiphar.png", "rohto.png", "ot.png", 
    "prochiz.png", "otto.png", "sanbe.png", "rssanto.png", "u.png", 
    "dlbs.png", "mepro.png", "tirta.png"
  ];

  return (
    <section id="clients" className="py-20 bg-dark overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Dipercaya oleh Berbagai Institusi Medis & Industri
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group py-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
        
        {/* Animated Slider Container */}
        <div className="flex animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused] items-center">
          {/* Duplicate the array twice to ensure seamless infinite scrolling */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-10 mx-6 bg-transparent grayscale hover:grayscale-0 transition-all cursor-pointer min-w-[150px]"
            >
              <img 
                src={`/${logo}`} 
                alt={`Client Logo ${index}`} 
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-60 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
