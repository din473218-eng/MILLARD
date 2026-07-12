import { Star, Quote, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-bakery-cream-light relative overflow-hidden">
      
      {/* Visual glowing backlights */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-bakery-brown/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-bakery-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">Customer Love</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            What Our Sweet Community Says
          </h2>
          <p className="text-sm text-bakery-brown/75 mt-3">
            Nothing brings us more joy than hearing about how our breads, pastries, and custom cakes bring a smile to your dining tables and celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-bakery-beige/35 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Giant decorative quotation mark */}
              <div className="absolute top-6 right-6 text-bakery-beige/40">
                <Quote className="w-10 h-10 stroke-1" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-bakery-gold fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-bakery-brown/85 leading-relaxed font-normal italic text-left">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-bakery-cream">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-bakery-gold shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif text-base font-bold text-bakery-brown-dark">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-bakery-brown/60 uppercase tracking-wider font-semibold">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stat Highlight */}
        <div className="mt-20 bg-white/50 backdrop-blur border border-bakery-beige/40 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6" id="community-highlight">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h5 className="font-serif text-lg font-bold text-bakery-brown-dark">Voted Best Local Bakery 2026</h5>
              <p className="text-xs text-bakery-brown/70">Millard Community Food Awards</p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl shadow transition-colors"
          >
            Visit Our Storefront
          </a>
        </div>

      </div>
    </section>
  );
}
