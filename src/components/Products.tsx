import { motion } from 'motion/react';
import { Layers, ShieldCheck, Zap, ThermometerSnowflake, Settings } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-dark-gray/10 relative border-y border-dark-gray">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Produk & Material
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
            Material <span className="text-primary">Konstruksi Premium</span>
          </h3>
          <p className="text-gray-400 mt-6 leading-relaxed">
            Kami hanya menggunakan material kualitas terbaik yang memenuhi standar higienitas, kekuatan, dan efisiensi ruang terkontrol Anda.
          </p>
        </div>

        {/* Product 1: Sandwich Panel */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h4 className="text-2xl font-extrabold uppercase tracking-tight mb-6">Insulated Sandwich Panel</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Material konstruksi berlapis yang terdiri dari dua lapisan metal dan inti insulasi (core). Digunakan secara spesifik untuk efisiensi termal kelas atas dan meminimalisir kontaminasi partikel.
            </p>
            
            <div className="space-y-6">
              <div className="bg-dark-card p-6 border-b-2 border-primary/30">
                <h5 className="text-primary font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers size={16} /> Varian Aplikasi
                </h5>
                <ul className="grid grid-cols-2 gap-3 text-gray-500 text-[10px] uppercase tracking-wider font-semibold">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Dinding (Wall Panel)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Plafon (Ceiling Panel)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Atap (Roofing)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary"/> Cladding</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-4">Pilihan Core Material:</h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: ShieldCheck, title: 'Polyisocyanurate (PIR)', desc: 'Ekstra tahan api & termal tinggi' },
                    { icon: ThermometerSnowflake, title: 'Polyurethane (PU)', desc: 'Anti kondensasi optimal' },
                    { icon: Zap, title: 'EPS', desc: 'Sangat ringan & hemat energi' },
                    { icon: Layers, title: 'PP Honeycomb', desc: 'Rasio kekuatan & berat luar biasa' },
                    { icon: ShieldCheck, title: 'Rockwool', desc: 'Peredam suara super & anti api' },
                  ].map((core, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-gray-metal/30 hover:bg-gray-metal/50 transition-colors cursor-default">
                      <core.icon className="text-primary shrink-0 mt-0.5" size={16} />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-tighter">{core.title}</div>
                        <div className="text-[10px] text-gray-500 mt-1">{core.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="sp.jpg" 
                alt="Insulated Sandwich Panel Material" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/60"></div>
            </div>
          </motion.div>
        </div>

        {/* Product 2: Aluminium Extrusion */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="alumuniumex.jpg" 
                alt="Aluminium Extrusion Details" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/60"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-extrabold uppercase tracking-tight mb-6">Aluminium Extrusion</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Komponen sistem profil ekstrusi aluminium esensial sebagai pelengkap, penyangga, pengunci, dan aksesoris utama dalam menciptakan lingkungan Clean Room dan Cold Room yang presisi, kedap udara, serta mudah disanitasi.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-metal/30 hover:bg-gray-metal/50 transition-colors">
                <Settings className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-tighter mb-1">Presisi Tinggi</h5>
                  <p className="text-[10px] text-gray-500">Diproduksi dengan toleransi akurasi sangat ketat untuk memastikan tidak ada celah udara (air leak) yang merusak sistem ruangan terkontrol.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-metal/30 hover:bg-gray-metal/50 transition-colors">
                <ShieldCheck className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-tighter mb-1">Tahan Korosi & Mudah Dibersihkan</h5>
                  <p className="text-[10px] text-gray-500">Menggunakan coating khusus yang aman dari korosi akibat bahan kimia pembersih standar medis/farmasi.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gray-metal/30 hover:bg-gray-metal/50 transition-colors">
                <Layers className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-tighter mb-1">Desain Khusus Cleanroom</h5>
                  <p className="text-[10px] text-gray-500">Setiap sudut aluminium didesain melengkung (coved) untuk meminimalisir penumpukan debu, bakteri, dan mempermudah protokol sanitasi.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// Need to import CheckCircle here since it's used inside the map
import { CheckCircle } from 'lucide-react';
