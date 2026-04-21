import { motion } from 'motion/react';

const industries = [
  {
    title: 'Ruang Operasi (OK)',
    desc: 'Ruang bedah berstandar medis dengan tekanan positif, filtrasi HEPA (99.99%), & kontrol sterilitas absolut.',
    image: 'ok.jpg' // Using hospital/medical image
  },
  {
    title: 'Ruang Isolasi',
    desc: 'Desain tekanan udara negatif khusus untuk pencegahan penyebaran penyakit infeksi (Airborne Infection Isolation).',
    image: 'isolasi.jpg'
  },
  {
    title: 'Laboratorium',
    desc: 'Ruang analitik terpadu skala Biosafety Level (BSL) untuk riset, kalibrasi, maupun pengujian klinis.',
    image: 'lab.jpg'
  },
  {
    title: 'Industri Farmasi',
    desc: 'Ruang produksi GMP compliant untuk manufaktur obat-obatan yang zero-contamination dan dust-free.',
    image: 'farmasi.jpg'
  },
  {
    title: 'Industri Makanan & Minuman',
    desc: 'Pengembangan Cold Storage & Clean Room HACCP compliant untuk menjaga daya tahan produk konsolidasi.',
    image: 'fnb.jpg'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-dark-gray/20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-6">
              Aplikasi <span className="text-primary">Industri</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Solusi kami fleksibel dan direkayasa khusus untuk memenuhi parameter regulasi berbagai lini industri kritis.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden aspect-[4/3] ${index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-auto md:aspect-[2/1]' : ''}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-dark/60 flex flex-col justify-end p-8 border border-primary/10 transition-all group-hover:border-primary/50 group-hover:bg-dark/40">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
