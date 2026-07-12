import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenOrderNow: () => void;
}

export default function Navbar({ onOpenOrderNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'menu', 'special-cakes', 'gallery', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Special Cakes', href: '#special-cakes', id: 'special-cakes' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bakery-cream/95 backdrop-blur-md shadow-md py-3 border-b border-bakery-beige/35'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-full bg-bakery-brown flex items-center justify-center text-bakery-cream font-serif text-xl font-bold border-2 border-bakery-gold shadow-sm group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-wide text-bakery-brown-dark group-hover:text-bakery-gold transition-colors duration-200">
                MILLARD
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-bakery-brown/80 -mt-1">
                Artisan Bakery
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 hover:text-bakery-brown-dark ${
                  activeSection === link.id
                    ? 'text-bakery-brown-dark font-semibold'
                    : 'text-bakery-brown/70'
                }`}
                id={`desktop-nav-${link.id}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-bakery-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenOrderNow}
              className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2 group border border-transparent hover:border-bakery-gold/25 cursor-pointer"
              id="desktop-order-btn"
            >
              <ShoppingBag className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              <span>Order Online</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-bakery-brown-dark hover:bg-bakery-beige/30 focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-bakery-cream border-b border-bakery-beige/40 overflow-hidden shadow-lg"
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-bakery-beige text-bakery-brown-dark font-semibold'
                      : 'text-bakery-brown/85 hover:bg-bakery-beige-light hover:text-bakery-brown-dark'
                  }`}
                  id={`mobile-nav-${link.id}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenOrderNow();
                  }}
                  className="w-full bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream py-3 rounded-full text-base font-semibold tracking-wide shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  id="mobile-order-btn"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Order Online Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
