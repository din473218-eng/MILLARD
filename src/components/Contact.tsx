import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      
      // Clear
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bakery-cream-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">Get In Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            We Would Love to Hear From You
          </h2>
          <p className="text-sm text-bakery-brown/75 mt-3">
            Want to collaborate on a special event, book a custom cake consultation, or simply ask about today's selection? Reach out and we'll reply promptly.
          </p>
        </div>

        {/* Info & Form Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Contact details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-details-col">
            
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl font-bold text-bakery-brown-dark">Contact Information</h3>
              <p className="text-sm text-bakery-brown/70 leading-relaxed font-normal">
                Drop by our warm local storefront for coffee and fresh buns, or connect with our baker via phone/chat.
              </p>

              {/* Detail Items */}
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-bakery-beige/35 shadow-sm">
                  <div className="p-3 bg-bakery-beige/40 text-bakery-brown rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-bakery-brown/60 uppercase tracking-wider">Our Address</h4>
                    <p className="text-sm text-bakery-brown-dark font-medium mt-1 leading-normal">
                      142 Artisan Boulevard, Millard Valley, MV 90210
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-bakery-beige/35 shadow-sm">
                  <div className="p-3 bg-bakery-beige/40 text-bakery-brown rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-bakery-brown/60 uppercase tracking-wider">Phone & Orders</h4>
                    <p className="text-sm text-bakery-brown-dark font-semibold mt-1 leading-normal">
                      1 (555) 012-3456
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-bakery-beige/35 shadow-sm">
                  <div className="p-3 bg-bakery-beige/40 text-bakery-brown rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-bakery-brown/60 uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-sm text-bakery-brown-dark font-semibold mt-1 leading-normal">
                      hello@millardbakery.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-bakery-beige/35 shadow-sm">
                  <div className="p-3 bg-bakery-beige/40 text-bakery-brown rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-xs text-bakery-brown/60 uppercase tracking-wider">Baking Hours</h4>
                    <div className="text-xs text-bakery-brown-dark font-normal mt-1 leading-normal space-y-1">
                      <p className="flex justify-between border-b border-bakery-cream pb-1">
                        <span>Monday–Saturday:</span>
                        <span className="font-bold">7:00 AM – 9:00 PM</span>
                      </p>
                      <p className="flex justify-between pt-1">
                        <span>Sunday:</span>
                        <span className="font-bold text-bakery-gold-dark">8:00 AM – 6:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:15550123456"
                className="flex-1 bg-bakery-brown hover:bg-bakery-brown-dark text-white py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Direct</span>
              </a>
              <a
                href="https://wa.me/15550123456?text=Hello%20Millard%20Bakery!%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Column 2: Elegant Interactive Form Container */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-bakery-beige/35 shadow-xl relative text-left">
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="form-contact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="font-serif text-2xl font-bold text-bakery-brown-dark">Send a Message</h3>
                    <p className="text-xs text-bakery-brown/70 leading-relaxed font-normal">
                      Use the secure contact gateway below to submit bulk order inquiries, general reviews, or custom bakery requests.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Clarissa Adams"
                          className="w-full bg-bakery-cream-light border border-bakery-beige rounded-xl px-4 py-3 text-xs text-bakery-brown-dark focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="clarissa@example.com"
                          className="w-full bg-bakery-cream-light border border-bakery-beige rounded-xl px-4 py-3 text-xs text-bakery-brown-dark focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        Subject / Event Category
                      </label>
                      <input
                        type="text"
                        required
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        placeholder="E.g., Catering Request, Feedback, Custom Bread Order"
                        className="w-full bg-bakery-cream-light border border-bakery-beige rounded-xl px-4 py-3 text-xs text-bakery-brown-dark focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Tell us about your event size, favorite items, or delivery details..."
                        className="w-full bg-bakery-cream-light border border-bakery-beige rounded-xl p-4 text-xs text-bakery-brown-dark focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-bakery-brown hover:bg-bakery-brown-dark text-white py-4 rounded-xl font-bold uppercase tracking-wider shadow hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                      id="contact-form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Send Message Gateway</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  
                  /* Form Success State */
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                    id="contact-success-card"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-bold text-bakery-brown-dark">Message Sent Successfully!</h4>
                      <p className="text-sm text-bakery-brown/70 max-w-sm mx-auto">
                        Thank you for contacting Millard Bakery. Our baking team and catering representatives have registered your request and will reply within 1 business day.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSent(false)}
                      className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Customized Vector Stylized Map Placeholder */}
        <div className="bg-white rounded-3xl p-6 border border-bakery-beige/35 shadow-lg overflow-hidden relative text-left" id="map-placeholder-block">
          <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl border border-bakery-beige/40 shadow flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-bakery-brown flex items-center justify-center text-white text-xs font-serif font-bold">M</div>
            <div>
              <h5 className="font-serif text-xs font-bold text-bakery-brown-dark">Millard Storefront</h5>
              <p className="text-[10px] text-bakery-brown/65">Click below to load navigation</p>
            </div>
          </div>

          {/* Styled Vector Map Illustration (Beautifully replaces dry Google iframe) */}
          <div className="h-64 sm:h-80 w-full bg-bakery-cream-light relative rounded-2xl border border-bakery-beige/25 overflow-hidden flex items-center justify-center">
            
            {/* Grid Pattern and stylized vectors */}
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: 'radial-gradient(#6F4E37 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

            {/* Stylized streets */}
            <div className="absolute h-8 w-full bg-white/80 top-1/3 left-0 -rotate-3 border-y border-bakery-beige" />
            <div className="absolute h-8 w-full bg-white/80 top-2/3 left-0 rotate-6 border-y border-bakery-beige" />
            <div className="absolute w-8 h-full bg-white/80 left-1/4 top-0 rotate-12 border-x border-bakery-beige" />
            <div className="absolute w-8 h-full bg-white/80 left-3/4 top-0 -rotate-6 border-x border-bakery-beige" />

            {/* Central Landmark circle for Bakery */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              
              {/* Radar pulse effect */}
              <div className="absolute w-12 h-12 rounded-full bg-bakery-gold/25 animate-ping" />
              
              <div className="relative w-8 h-8 rounded-full bg-bakery-gold text-white flex items-center justify-center shadow-lg border-2 border-white z-10">
                <MapPin className="w-4 h-4 fill-current text-white" />
              </div>
              <div className="mt-2 bg-bakery-brown text-white font-serif font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow border border-bakery-gold/50 z-10 whitespace-nowrap">
                Millard Bakery
              </div>
            </div>

            {/* Local surrounding tags for context */}
            <div className="absolute top-1/4 left-1/3 text-[9px] text-bakery-brown/50 font-bold tracking-wider uppercase font-sans">
              🌳 Valley Park
            </div>
            <div className="absolute bottom-1/4 right-1/4 text-[9px] text-bakery-brown/50 font-bold tracking-wider uppercase font-sans">
              🛍️ Plaza Boulevard
            </div>

            {/* Open Google Map Link action button */}
            <a
              href="https://maps.google.com/?q=Millard+Bakery+142+Artisan+Boulevard"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white hover:bg-bakery-cream hover:text-bakery-gold-dark text-bakery-brown border border-bakery-beige text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-md transition-all flex items-center space-x-1 z-10"
            >
              <span>Launch Google Maps Navigation</span>
              <span>↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
