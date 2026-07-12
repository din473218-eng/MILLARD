import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const handleToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-bakery-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">Common Queries</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-bakery-brown/75 mt-3">
            Have questions about ordering custom birthday cakes, our morning baking schedule, or allergen information? Browse through our responses below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordions">
          {FAQS.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-bakery-beige/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                id={`faq-item-${faq.id}`}
              >
                {/* Header button */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-bakery-gold/25 cursor-pointer"
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-bakery-gold shrink-0" />
                    <span className="font-serif text-base sm:text-lg font-bold text-bakery-brown-dark">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-bakery-brown/60 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-left border-t border-bakery-cream-light">
                        <p className="text-sm sm:text-base text-bakery-brown/80 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 bg-bakery-beige-light border border-bakery-beige p-8 rounded-3xl text-center max-w-2xl mx-auto" id="faq-cta-box">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-bakery-brown mx-auto mb-4 shadow-sm">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-lg font-bold text-bakery-brown-dark">Still have questions?</h4>
          <p className="text-xs sm:text-sm text-bakery-brown/85 mt-2 max-w-sm mx-auto">
            Our customer care team is always here to help you. Ask us anything about bulk catering, ingredient origins, or special wedding orders.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/15550199?text=Hello%20Millard%20Bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow flex items-center space-x-1.5"
            >
              <span>Chat via WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow"
            >
              Send Us an Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
