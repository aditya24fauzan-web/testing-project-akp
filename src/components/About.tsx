import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden border border-gray-600">
              <img 
                src="logoakp.png" 
                alt="Engineering Team at Work" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 glass p-6 shadow-xl flex items-center gap-4">
              <div className="text-5xl border-r pr-4 border-primary/20 font-extrabold text-primary">3+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Tahun<br/>Pengalaman</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              About Company
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight uppercase">
              Mitra Terpercaya dalam<br/>
              <span className="text-primary text-4xl md:text-5xl">Infrastruktur Khusus</span>
            </h3>
            
            <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-primary/50 pl-4 py-1">
              "Konstruksi bukan sekadar pembangunan fisik, tetapi penciptaan solusi presisi yang memberikan dampak luas."
            </p>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed max-w-lg mt-6">
              <p>
                <strong>PT. Adipura Karya Persada</strong> adalah perusahaan yang bergerak di bidang desain, engineering, dan pembangunan Clean Room dan Cold Room, dengan fokus pada industri farmasi, rumah sakit, dan berbagai sektor lainnya yang membutuhkan standar kebersihan ketat.
              </p>
              <p>
                Seiring waktu, kami berkembang menjadi penyedia solusi terintegrasi, termasuk sistem tata udara industri (HVAC System), yang dirancang khusus untuk memenuhi standar operasi operasional klien kami.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-primary/20 mt-8">
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-widest mb-1">Integritas Tinggi</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Kejujuran dan transparansi.</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-widest mb-1">Tim Tersertifikasi</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Engineer ahli & profesional.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
