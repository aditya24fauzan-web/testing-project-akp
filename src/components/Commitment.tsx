import { motion } from 'motion/react';
import { Target, CheckCircle2, TrendingUp, Clock } from 'lucide-react';

const commitments = [
  {
    icon: Target,
    title: 'Orientasi Klien',
    description: 'Berorientasi penuh pada penyelesaian kebutuhan spesifik setiap klien dengan pendekatan custom.'
  },
  {
    icon: CheckCircle2,
    title: 'Standar Internasional',
    description: 'Pengerjaan ketat mengikuti standar GMP (Good Manufacturing Practice) & CPOB.'
  },
  {
    icon: TrendingUp,
    title: 'Inovasi Berkelanjutan',
    description: 'Pengembangan teknologi dan sistem konstruksi secara terus-menerus untuk hasil optimal.'
  },
  {
    icon: Clock,
    title: 'Kualitas & Ketepatan',
    description: 'Menjamin kualitas tinggi dalam setiap material dan ketepatan waktu pengerjaan proyek.'
  }
];

export default function Commitment() {
  return (
    <section id="commitment" className="py-24 bg-dark-gray/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6"
          >
            Nilai & <span className="text-primary">Komitmen</span> Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Kami mendedikasikan seluruh keahlian untuk memberikan standar layanan tertinggi demi mewujudkan infrastruktur yang aman, efisien, dan andal.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="elegant-card group relative overflow-hidden flex flex-col"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-widest mb-3">{item.title}</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
