import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  { image: 'galeri1.png', title: 'GMP Clean Room' },
  { image: 'galeri2.png', title: 'HEPA Filter Installatioan' },
  { image: 'galeri3.png', title: 'Laboratorium Biologi' },
  { image: 'fnb.jpg', title: 'Food Grade Cold Room' },
  { image: 'cr.jpg', title: 'Ruang Operasi RS' },
  { image: 'hvac' }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6">
            Galeri <span className="text-primary">Proyek</span>
          </h2>
          <p className="text-gray-400">
            Lihat sebagian kecil dari dokumentasi pengerjaan proyek kebanggaan kami di berbagai lokasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-primary/20">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer border-b border-r border-primary/20 bg-dark-card"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mb-3">
                  <ZoomIn className="text-primary" size={24} />
                </div>
                <h4 className="font-extrabold text-white text-sm uppercase tracking-widest">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-light hover:text-primary transition-colors text-lg uppercase tracking-widest font-heading font-medium"
              onClick={() => setSelectedImage(null)}
            >
              Tutup [X]
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-full object-contain rounded-lg shadow-2xl border border-dark-gray"
            />
          </div>
        </div>
      )}
    </section>
  );
}
