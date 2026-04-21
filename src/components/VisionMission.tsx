import { motion } from 'motion/react';
import { Eye, Rocket, CheckCircle } from 'lucide-react';

export default function VisionMission() {
  const missions = [
    "Menyediakan solusi Clean Room & Cold Room yang efektif dan hemat energi.",
    "Memahami kebutuhan klien secara mendalam untuk hasil yang presisi.",
    "Mengembangkan desain dan solusi engineering yang optimal.",
    "Menggunakan teknologi terbaru dan material berkualitas tinggi.",
    "Menjaga profesionalisme tinggi di setiap tahap pengerjaan.",
    "Memberikan layanan tepat waktu, responsif, dan dapat diandalkan."
  ];

  return (
    <section id="vision-mission" className="py-24 relative bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="elegant-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Eye size={120} />
            </div>
            
            <div className="w-12 h-12 bg-dark-gray/50 flex items-center justify-center text-primary mb-6">
              <Eye size={24} />
            </div>
            
            <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-6">
              Visi <span className="text-primary">Kami</span>
            </h2>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6 italic">
              Menjadi mitra terpercaya dalam pembangunan Clean Room dan Cold Room yang mengutamakan kualitas, efisiensi, dan inovasi.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 bg-primary shrink-0"></div>
                <span className="text-sm text-gray-400 leading-relaxed">Menjadi spesialis Clean Room dan Cold Room terkemuka di tingkat nasional.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 bg-primary shrink-0"></div>
                <span className="text-sm text-gray-400 leading-relaxed">Menciptakan lingkungan terkontrol yang aman, produktif, dan memenuhi standar global.</span>
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="elegant-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Rocket size={120} />
            </div>

            <div className="w-12 h-12 bg-dark-gray/50 flex items-center justify-center text-primary mb-6">
              <Rocket size={24} />
            </div>
            
            <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-6">
              Misi <span className="text-primary">Kami</span>
            </h2>
            
            <ul className="space-y-5">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-gray-400 leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
