import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 md:py-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cr.jpg" 
          alt="Clean Room Facility" 
          className="w-full h-full object-cover object-center grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 border border-primary text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
              PT. Adipura Karya Persada
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight uppercase">
              GENERAL <span className="text-primary">CONTRACTOR</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-extrabold text-light/90 uppercase tracking-tighter">
              CLEAN ROOM & COLD ROOM SPECIALIST
            </h2>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              We are Specialist Customize Clean Room and Cold Room. Memberikan solusi terintegrasi dan konstruksi berkualitas tinggi untuk kebutuhan industri Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://wa.me/6282289988954" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-gold px-8 py-4 text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all text-center"
              >
                Konsultasi Sekarang
              </a>
              <a 
                href="#services"
                className="border border-white/20 px-8 py-4 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Lihat Layanan
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Info indicators at the bottom */}
        <div className="absolute bottom-8 left-12 hidden md:flex gap-12 text-[10px] tracking-widest text-gray-400 uppercase">
          <div>
            <p className="text-primary mb-1">Email Us</p>
            <p>adipurakaryapersada@gmail.com</p>
          </div>
          <div>
            <p className="text-primary mb-1">Location</p>
            <p>Bandung, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
