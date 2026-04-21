import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-gray/30 border-t border-dark-gray relative">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <div className="inline-block px-4 py-1 border border-primary text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Hubungi Kami
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6">
              Mari Diskusikan <span className="text-primary">Proyek Anda</span>
            </h2>
            <p className="text-gray-400 mb-12 text-sm leading-relaxed">
              Konsultasikan kebutuhan Clean Room atau HVAC sistem industri Anda bersama tim engineer ahli kami untuk mendapatkan solusi yang presisi dan efisien.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-dark-card border-l-2 border-primary/50 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-gray-metal/30 transition-all shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Kantor Pusat</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Jl. Merkuri Timur VI No 3/135<br/>
                    Bandung, Jawa Barat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-dark-card border-l-2 border-primary/50 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-gray-metal/30 transition-all shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Telepon / WhatsApp</h4>
                  <a href="https://wa.me/6282289988954" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    0822-8998-8954
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-dark-card border-l-2 border-primary/50 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-gray-metal/30 transition-all shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Email</h4>
                  <a href="mailto:adipurakaryapersada@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    adipurakaryapersada@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/6282289988954" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-black font-bold hover:brightness-110 transition-all text-xs uppercase tracking-widest"
            >
              <MessageSquare size={16} />
              Chat via WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="elegant-card md:p-10"
          >
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white mb-8">Kirimkan Pesan</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark border-b border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Perusahaan (Opsional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full bg-dark border-b border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 text-sm"
                    placeholder="PT. ABC Industri"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark border-b border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Detail Kebutuhan / Pesan</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-dark border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none text-sm rounded-none"
                  placeholder="Jelaskan secara ringkas kebutuhan konstruksi atau konsultasi Anda..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-bold hover:bg-primary/10 transition-colors uppercase tracking-widest text-xs"
                onClick={() => alert('Fitur demo formulir. Silakan hubungi via WhatsApp untuk respon cepat.')}
              >
                <Send size={16} />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

        </div>

        {/* Map */}
        <div className="mt-20 rounded-2xl overflow-hidden border border-dark-gray h-[400px] w-full bg-dark-gray relative filter grayscale contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.627690226348!2d107.6397368!3d-6.935026999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e866bb0776bd%3A0xb35151b1f9d501db!2sJl.%20Merkuri%20Tim.%20VI%2B%20No.3%2F135%2C%20Manjahlega%2C%20Kec.%20Rancasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040286!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Kantor PT Adipura Karya Persada"
          ></iframe>
          {/* Cover overlay to ensure map fits the dark mode aesthetic initially */}
          <div className="absolute inset-0 pointer-events-none mix-blend-color bg-dark-gray/20"></div>
        </div>

      </div>
    </section>
  );
}
