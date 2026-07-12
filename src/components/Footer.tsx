import React, { useState } from 'react';
import { Instagram, Facebook, Heart, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="bg-bakery-brown-dark text-bakery-cream-light border-t border-bakery-brown/20 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-bakery-brown/20" id="footer-main-grid">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center space-x-2 focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-bakery-brown flex items-center justify-center text-bakery-cream font-serif text-xl font-bold border border-bakery-gold shadow-sm">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-black tracking-wide text-white">
                  MILLARD
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-bakery-beige -mt-1">
                  Artisan Bakery
                </span>
              </div>
            </a>
            <p className="text-sm text-bakery-cream/70 leading-relaxed font-normal">
              Millard Artisan Bakery is a family-owned bakery dedicated to crafting premium stone-ground breads, delicate pastries, gourmet desserts, and bespoke custom cakes. Baked daily at 4:00 AM with 100% natural and organic local ingredients.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-bakery-brown hover:bg-bakery-gold hover:scale-105 text-white flex items-center justify-center transition-all"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-bakery-brown hover:bg-bakery-gold hover:scale-105 text-white flex items-center justify-center transition-all"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm font-normal text-bakery-cream/70">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-bakery-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-bakery-gold transition-colors">
                  About Story
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScrollTo(e, '#menu')} className="hover:text-bakery-gold transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#special-cakes" onClick={(e) => handleScrollTo(e, '#special-cakes')} className="hover:text-bakery-gold transition-colors">
                  Special Cakes
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleScrollTo(e, '#gallery')} className="hover:text-bakery-gold transition-colors">
                  Image Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Info Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Find Us</h4>
            <ul className="space-y-3 text-sm font-normal text-bakery-cream/70">
              <li>
                <span className="block font-bold text-white text-xs uppercase tracking-wider mb-0.5">Kitchen Store</span>
                142 Artisan Boulevard, <br />
                Millard Valley, MV 90210
              </li>
              <li>
                <span className="block font-bold text-white text-xs uppercase tracking-wider mb-0.5">Get In Touch</span>
                Phone: 1 (555) 012-3456 <br />
                Email: hello@millardbakery.com
              </li>
            </ul>
          </div>

          {/* Newsletter / Bread Club Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">The Bread Club</h4>
            <p className="text-xs text-bakery-cream/65 leading-relaxed font-normal">
              Subscribe to get notified about today's fresh baking runs, special weekend pastries, and secret discount coupons!
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-bakery-brown/40 border border-bakery-brown text-xs rounded-xl px-4 py-3 text-white placeholder-bakery-cream/40 focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-inner pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-bakery-gold hover:bg-bakery-gold-dark text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="bg-bakery-brown/30 p-3 rounded-xl border border-bakery-gold/25 text-xs text-center text-bakery-gold">
                🎉 Welcome to the Bread Club!
              </div>
            )}
          </div>

        </div>

        {/* Footer Base */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-bakery-cream/50" id="footer-base">
          <p>© {new Date().getFullYear()} Millard Bakery. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-bakery-gold mx-1 fill-current animate-pulse" />
            <span>for our beautiful Millard community.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
