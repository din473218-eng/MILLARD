/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X, CheckCircle2, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import CustomCakes from './components/CustomCakes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Product } from './types';
import { PRODUCTS } from './data';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info';
}

export default function App() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [directOrderProduct, setDirectOrderProduct] = useState<Product | null>(null);

  const addToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOrderSuccessNotification = (orderSummary: string) => {
    addToast(`🎉 Confirmation: ${orderSummary} has been booked! Check ticket below.`, 'success');
  };

  // When clicking general "Order Now" anywhere, we direct order our classic Croissant as the default
  const handleTriggerDefaultOrder = () => {
    const classicCroissant = PRODUCTS.find(p => p.id === 'p1') || PRODUCTS[0];
    setDirectOrderProduct(classicCroissant);
    
    // Scroll smoothly to menu
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
    
    addToast('🥖 Launching Quick Booking checkout for our All-Butter Croissant!', 'info');
  };

  return (
    <div className="min-h-screen bg-bakery-cream font-sans antialiased text-bakery-brown-dark selection:bg-bakery-gold/35 selection:text-bakery-brown-dark">
      
      {/* Sticky Glassmorphism Header */}
      <Navbar onOpenOrderNow={handleTriggerDefaultOrder} />

      {/* Main Sections */}
      <main className="w-full">
        {/* Hero Banner Section */}
        <Hero onOpenOrderNow={handleTriggerDefaultOrder} />

        {/* Legacy & History Section */}
        <About />

        {/* Interactive Menu & Booking Grid */}
        <MenuSection
          onOrderSuccess={handleOrderSuccessNotification}
          orderItemDirectly={directOrderProduct}
          onClearDirectItem={() => setDirectOrderProduct(null)}
        />

        {/* Custom Cake Promotion & Visualizer Sandbox */}
        <CustomCakes onOrderSuccess={(blueprint) => addToast(`🎂 Custom Cake Blueprint "${blueprint}" received!`, 'success')} />

        {/* Photo Gallery Grid & Lightbox */}
        <Gallery />

        {/* Customer Testimonials & Vibe Reviews */}
        <Testimonials />

        {/* Frequently Asked Accordions */}
        <FAQ />

        {/* Maps, Contact Hours, & Inquiries Form */}
        <Contact />
      </main>

      {/* Corporate footer, legal, and quick links */}
      <Footer />

      {/* Global Toast Notification Toast Hub */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto bg-white/95 backdrop-blur-md border-l-4 border-bakery-gold text-bakery-brown-dark shadow-2xl rounded-2xl p-4 flex items-start space-x-3 text-left relative overflow-hidden"
              id={`global-toast-${toast.id}`}
            >
              {/* Alert Icon */}
              <div className="p-1 rounded-lg bg-bakery-cream text-bakery-gold shrink-0">
                <Bell className="w-4 h-4 animate-bounce" />
              </div>

              {/* Message Details */}
              <div className="flex-grow pr-4">
                <span className="text-[9px] text-bakery-gold uppercase font-extrabold tracking-widest block">
                  Millard Bakery Alert
                </span>
                <p className="text-xs font-semibold mt-1 leading-relaxed">
                  {toast.message}
                </p>
              </div>

              {/* Close Action */}
              <button
                onClick={() => removeToast(toast.id)}
                className="text-bakery-brown/40 hover:text-bakery-brown p-0.5 rounded cursor-pointer shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}

