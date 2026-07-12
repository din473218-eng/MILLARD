import { ArrowRight, Clock, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenOrderNow: () => void;
}

export default function Hero({ onOpenOrderNow }: HeroProps) {
  const handleScrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bakery-cream"
    >
      {/* Background Image with Rich Dual Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop"
          alt="Fresh Artisan Bread and Baking Ingredients"
          className="w-full h-full object-cover scale-105 motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Deep, warm, gradient mask overlay for readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-bakery-cream/95 via-bakery-cream/80 to-transparent md:bg-gradient-to-r md:from-bakery-cream/95 md:via-bakery-cream/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bakery-cream via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Warm Backlight Blur */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-bakery-gold/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-bakery-brown/10 blur-3xl" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-bakery-beige/50 backdrop-blur-sm border border-bakery-brown/20 px-4 py-1.5 rounded-full"
              id="hero-badge"
            >
              <Sparkles className="w-4 h-4 text-bakery-gold" />
              <span className="text-xs font-semibold tracking-wider uppercase text-bakery-brown-dark">
                Artisan Local Bakery
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bakery-brown-dark leading-[1.1]"
              id="hero-headline"
            >
              Freshly Baked <br />
              <span className="text-bakery-gold italic relative">
                Happiness
                <span className="absolute bottom-1.5 left-0 w-full h-1 bg-bakery-gold/20 -z-10" />
              </span>{' '}
              Every Day
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-bakery-brown/85 max-w-xl font-normal leading-relaxed"
              id="hero-subheading"
            >
              From handcrafted breads to delicious cakes and pastries, Millard brings fresh bakery delights made with quality ingredients and love.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
              id="hero-actions"
            >
              <button
                onClick={handleScrollToMenu}
                className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-8 py-4 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer"
                id="hero-view-menu"
              >
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <button
                onClick={onOpenOrderNow}
                className="bg-white hover:bg-bakery-beige-light text-bakery-brown border border-bakery-beige px-8 py-4 rounded-full font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-order-now"
              >
                <span>Order Online Now</span>
              </button>
            </motion.div>

            {/* Trust and Operating Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 gap-6 sm:gap-10 border-t border-bakery-brown/10 pt-8 mt-4 w-full"
              id="hero-trust-badges"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-bakery-beige/30 text-bakery-gold">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-bakery-brown-dark">4.9/5 Rating</h4>
                  <p className="text-xs text-bakery-brown/75">From over 500+ locals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-bakery-beige/30 text-bakery-brown">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-bakery-brown-dark">Baked at 4:00 AM</h4>
                  <p className="text-xs text-bakery-brown/75">Fresh daily guarantee</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Floating Visual Accent Panel (Right side) - Purely CSS and elegant mock showcases to keep assets lightweight */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-2xl max-w-sm w-full"
              id="hero-highlight-card"
            >
              <div className="absolute -top-4 -right-4 bg-bakery-gold text-bakery-cream text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md z-10">
                Today's Special
              </div>
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop"
                alt="Perfect Golden Croissant"
                className="w-full h-56 object-cover rounded-2xl shadow-inner mb-5"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <span className="text-xs text-bakery-gold uppercase tracking-widest font-bold">Laminated Viennoiserie</span>
                <h3 className="font-serif text-xl font-bold text-bakery-brown-dark mt-1">Norman Flaky Croissant</h3>
                <p className="text-sm text-bakery-brown/70 mt-2">
                  Prepared with double-turned Normandy butter. Crisp glass-like exterior, honeycomb light core.
                </p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-bakery-beige/60">
                  <span className="font-serif text-xl font-black text-bakery-gold">$3.75 <span className="text-xs text-bakery-brown/60 font-sans font-normal">/ piece</span></span>
                  <button
                    onClick={onOpenOrderNow}
                    className="bg-bakery-brown text-bakery-cream hover:bg-bakery-brown-dark px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow transition-colors cursor-pointer"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Decorative Floating Little Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 -left-6 bg-white border border-bakery-beige/60 shadow-lg p-3 rounded-2xl flex items-center space-x-3 z-10"
            >
              <span className="text-xl">🥐</span>
              <div>
                <p className="text-xs font-bold text-bakery-brown-dark">Fresh Pastries</p>
                <p className="text-[10px] text-emerald-600 font-semibold">100% Organic Butter</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 -right-8 bg-white border border-bakery-beige/60 shadow-lg p-3 rounded-2xl flex items-center space-x-3 z-10"
            >
              <span className="text-xl">🍞</span>
              <div>
                <p className="text-xs font-bold text-bakery-brown-dark">Handcrafted Sourdough</p>
                <p className="text-[10px] text-bakery-gold font-semibold">Natural Wild Yeast</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
