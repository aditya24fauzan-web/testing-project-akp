import { motion } from 'motion/react';
import { ShieldAlert, Thermometer, Wind } from 'lucide-react';

const services = [
  {
    id: 'clean-room',
    title: 'Clean Room Specialist',
    description: 'Desain, rekayasa, dan konstruksi ruangan steril dengan kendali ketat terhadap partikel udara, suhu, kelembaban, dan tekanan (positif/negatif). Memenuhi standar akreditasi GMP, cGMP, dan CPOB.',
    icon: ShieldAlert,
    image: '/cr.jpg'
  },
  {
    id: 'cold-room',
    title: 'Cold Room / Cold Storage',
    description: 'Implementasi ruang pendingin presisi untuk penyimpanan produk yang rentan suhu (vaksin, farmasi, makanan). Dilengkapi insulasi performa tinggi untuk efisiensi penggunaan daya.',
    icon: Thermometer,
    image: '/cr.jpg' // Using industrial image for cold room
  },
  {
    id: 'hvac',
    title: 'Sistem HVAC Industri',
    description: 'Instalasi Heating, Ventilation, dan Air Conditioning berskala industri. Pengaturan aliran tata udara kompleks yang diintegrasikan langsung dengan sistem Clean Room menggunakan sistem HEPA filter.',
    icon: Wind,
    image: '/hvac.jpg' // Industrial piping
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Layanan Kami
          </h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight"
          >
            Solusi <span className="text-primary">Terintegrasi</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-6 leading-relaxed"
          >
            Dari perencanaan arsitektur hingga serah terima, kami menangani seluruh fase implementasi dengan presisi mekanikal yang terukur.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="elegant-card p-0 overflow-hidden group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-dark/80 backdrop-blur flex items-center justify-center text-primary">
                  <service.icon size={24} />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-extrabold text-sm uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-[10px] text-gray-500 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <a 
                  href="https://wa.me/6282289988954" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-widest"
                >
                  Detail Layanan
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
