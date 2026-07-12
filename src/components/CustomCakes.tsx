import React, { useState } from 'react';
import { Cake, Sparkles, Check, CheckCircle, Calendar, MessageSquare, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomCakesProps {
  onOrderSuccess: (orderSummary: string) => void;
}

export default function CustomCakes({ onOrderSuccess }: CustomCakesProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'builder'>('info');

  // Customizer State
  const [occasion, setOccasion] = useState('Birthday');
  const [layers, setLayers] = useState<1 | 2 | 3>(2);
  const [flavor, setFlavor] = useState('Rich Chocolate');
  const [icing, setIcing] = useState('Buttercream');
  const [toppings, setToppings] = useState<string[]>(['Fresh Berries']);
  const [cakeMessage, setCakeMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const occasionTypes = [
    { name: 'Birthday Cakes', desc: 'Fun, vibrant designs with candles, personalized messages, and delicious flavors for all ages.' },
    { name: 'Wedding Cakes', desc: 'Elegant, romantic masterpieces layered with pristine icing, delicate flowers, and high-end detail.' },
    { name: 'Anniversary Cakes', desc: 'Elegant celebrations of years together, featuring timeless designs and premium toppings.' },
    { name: 'Baby Shower Cakes', desc: 'Sweet, pastel designs with adorable custom toppings and soft, crowd-pleasing flavors.' },
    { name: 'Graduation Cakes', desc: 'Proud celebrations featuring academic colors, caps, and personalized congratulatory themes.' },
    { name: 'Corporate Cakes', desc: 'Polished, clean styles displaying brand colors or logos for meetings and milestones.' }
  ];

  const FLAVORS = [
    { name: 'Rich Chocolate', color: '#4A2E1B', textColor: '#FFFFFF' },
    { name: 'Velvet Red Sponge', color: '#800020', textColor: '#FFFFFF' },
    { name: 'Vanilla Bean', color: '#FDF6E2', textColor: '#6F4E37' },
    { name: 'Spiced Carrot', color: '#E37A33', textColor: '#FFFFFF' },
    { name: 'Zesty Lemon Sponge', color: '#FFF380', textColor: '#6F4E37' }
  ];

  const ICINGS = [
    { name: 'Classic Buttercream', color: '#FFFDD0' },
    { name: 'Chocolate Ganache', color: '#32140A' },
    { name: 'Fluffy Whipped Cream', color: '#F8F9FA' },
    { name: 'Sweet Strawberry Glaze', color: '#FFB7C5' }
  ];

  const TOPPING_OPTIONS = [
    { name: 'Fresh Berries', icon: '🍓' },
    { name: 'Chocolate Shavings', icon: '🍫' },
    { name: 'Edible Gold Flakes', icon: '✨' },
    { name: 'Delicate Flowers', icon: '🌸' },
    { name: 'Rainbow Sprinkles', icon: '🎉' }
  ];

  const getFlavorColor = () => {
    return FLAVORS.find(f => f.name === flavor)?.color || '#FFFDD0';
  };

  const getIcingColor = () => {
    return ICINGS.find(i => i.name === icing)?.color || '#FFFDD0';
  };

  const calculateEstimate = () => {
    let base = 25;
    if (layers === 2) base = 45;
    if (layers === 3) base = 65;
    
    // Add per topping
    base += toppings.length * 4;

    if (occasion === 'Wedding') base += 25; // Premium decoration
    return base;
  };

  const handleToppingToggle = (topping: string) => {
    if (toppings.includes(topping)) {
      setToppings(prev => prev.filter(t => t !== topping));
    } else {
      setToppings(prev => [...prev, topping]);
    }
  };

  const handleResetBuilder = () => {
    setOccasion('Birthday');
    setLayers(2);
    setFlavor('Rich Chocolate');
    setIcing('Buttercream');
    setToppings(['Fresh Berries']);
    setCakeMessage('');
    setDeliveryDate('');
    setIsSuccess(false);
  };

  const handleCustomCakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onOrderSuccess(`Bespoke ${layers}-Tier ${occasion} Cake (${flavor} with ${icing})`);
    }, 1500);
  };

  return (
    <section id="special-cakes" className="py-24 bg-bakery-cream-light relative overflow-hidden">
      
      {/* Decorative vector background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-bakery-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-bakery-brown/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">The Art of Celebration</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            Special Custom Cake Design
          </h2>
          <p className="text-sm text-bakery-brown/75 mt-3">
            Whether it is an intimate birthday or a grand fairytale wedding, our master cake artists collaborate with you to create stunning showpieces that taste as heavenly as they look.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex bg-bakery-beige/35 border border-bakery-beige p-1 rounded-full mt-8 shadow-inner" id="cake-selection-toggle">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'info'
                  ? 'bg-bakery-brown text-bakery-cream shadow-sm'
                  : 'text-bakery-brown/70 hover:text-bakery-brown-dark'
              }`}
            >
              Occasions We Cater
            </button>
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'builder'
                  ? 'bg-bakery-brown text-bakery-cream shadow-sm'
                  : 'text-bakery-brown/70 hover:text-bakery-brown-dark'
              }`}
              id="design-your-dream-cake-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-bakery-gold" />
              <span>Design Your Dream Cake</span>
            </button>
          </div>
        </div>

        {/* Content Panel Switcher */}
        <AnimatePresence mode="wait">
          {activeTab === 'info' ? (
            
            /* TAB 1: Occasions Info Cards */
            <motion.div
              key="info-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="cake-occasions-grid"
            >
              {occasionTypes.map((occ, idx) => (
                <div
                  key={occ.name}
                  className="bg-white p-8 rounded-2xl border border-bakery-beige/25 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
                  id={`occasion-card-${idx}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-bakery-beige/40 flex items-center justify-center text-bakery-brown mb-5">
                      <Cake className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-bakery-brown-dark mb-3">
                      {occ.name}
                    </h4>
                    <p className="text-sm text-bakery-brown/75 leading-relaxed font-normal">
                      {occ.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-bakery-cream flex items-center justify-between">
                    <span className="text-xs font-bold text-bakery-gold uppercase tracking-wider">Premium Decor</span>
                    <button
                      onClick={() => {
                        setOccasion(occ.name.split(' ')[0]);
                        setActiveTab('builder');
                      }}
                      className="text-bakery-brown hover:text-bakery-gold text-xs font-bold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Customize</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>

          ) : (

            /* TAB 2: Interactive Real-Time Custom Cake Builder */
            <motion.div
              key="builder-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-bakery-beige/35 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 text-left"
              id="interactive-cake-builder"
            >
              
              {/* Left Side: Realtime visual mock representation of the stacked cake */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center bg-bakery-cream/35 border border-bakery-beige/40 rounded-2xl p-8 relative min-h-[400px]">
                <div className="absolute top-4 left-4 bg-white px-3.5 py-1 rounded-full border border-bakery-beige/60 shadow-sm text-[10px] font-bold text-bakery-brown uppercase tracking-wider">
                  Live Preview
                </div>

                <div className="flex flex-col items-center justify-end h-72 w-full max-w-xs relative pt-12">
                  
                  {/* Toppings Display (Floating on top layer) */}
                  <div className="flex items-center justify-center space-x-2 pb-1 z-20">
                    {toppings.map((t, idx) => {
                      const found = TOPPING_OPTIONS.find(op => op.name === t);
                      return found ? (
                        <motion.span
                          key={t}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-2xl filter drop-shadow-md select-none"
                          style={{
                            transform: `translateY(${idx % 2 === 0 ? '-4px' : '0px'})`
                          }}
                        >
                          {found.icon}
                        </motion.span>
                      ) : null;
                    })}
                  </div>

                  {/* Cake Tier 3 (Only visible if layers === 3) */}
                  {layers === 3 && (
                    <motion.div
                      initial={{ scale: 0, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      className="w-24 h-12 rounded-t-lg shadow-md border-b-4 relative flex flex-col justify-between"
                      style={{
                        backgroundColor: getFlavorColor(),
                        borderColor: getIcingColor(),
                        zIndex: 10
                      }}
                    >
                      {/* Icing Swirl detail */}
                      <div className="w-full h-2 rounded-t-lg opacity-90" style={{ backgroundColor: getIcingColor() }} />
                      <div className="text-center text-[8px] font-semibold uppercase tracking-tight py-1" style={{ color: FLAVORS.find(f => f.name === flavor)?.textColor }}>
                        Tier 3
                      </div>
                    </motion.div>
                  )}

                  {/* Cake Tier 2 (Visible if layers >= 2) */}
                  {layers >= 2 && (
                    <motion.div
                      initial={{ scale: 0, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      className="w-36 h-14 shadow-md border-b-4 relative flex flex-col justify-between -mt-1"
                      style={{
                        backgroundColor: getFlavorColor(),
                        borderColor: getIcingColor(),
                        zIndex: 9
                      }}
                    >
                      {/* Icing Swirl detail */}
                      <div className="w-full h-2.5 opacity-90" style={{ backgroundColor: getIcingColor() }} />
                      <div className="text-center text-[9px] font-semibold uppercase tracking-tight py-1.5" style={{ color: FLAVORS.find(f => f.name === flavor)?.textColor }}>
                        Tier 2
                      </div>
                    </motion.div>
                  )}

                  {/* Cake Tier 1 (Always Visible, base layer) */}
                  <motion.div
                    className="w-48 h-16 rounded-b-lg shadow-md border-b-4 relative flex flex-col justify-between -mt-1"
                    style={{
                      backgroundColor: getFlavorColor(),
                      borderColor: getIcingColor(),
                      zIndex: 8
                    }}
                  >
                    {/* Icing Swirl detail */}
                    <div className="w-full h-3 opacity-90" style={{ backgroundColor: getIcingColor() }} />
                    
                    {/* Inscription Message on bottom tier */}
                    <div className="absolute inset-x-0 bottom-2 text-center px-2 flex items-center justify-center">
                      {cakeMessage ? (
                        <span className="text-[9px] font-bold py-0.5 px-2 bg-white/90 backdrop-blur-sm text-pink-700 rounded shadow-sm italic tracking-wide max-w-[150px] truncate">
                          "{cakeMessage}"
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-tight" style={{ color: FLAVORS.find(f => f.name === flavor)?.textColor }}>
                          Tier 1
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* Plate Display */}
                  <div className="w-56 h-3 bg-bakery-beige border border-bakery-brown/20 rounded-full shadow-md mt-1 z-0" />
                </div>

                {/* Live Receipt Card */}
                <div className="w-full mt-8 bg-white border border-bakery-beige/50 p-4 rounded-xl text-xs font-normal space-y-2">
                  <div className="flex justify-between font-bold text-bakery-brown-dark">
                    <span>Selected Occasion:</span>
                    <span className="text-bakery-gold-dark">{occasion} Cake</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sponge Sponge:</span>
                    <span>{flavor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Icing Overlay:</span>
                    <span>{icing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toppings:</span>
                    <span>{toppings.join(', ') || 'Plain'}</span>
                  </div>
                  <div className="border-t border-bakery-cream pt-2 mt-2 flex justify-between font-black text-sm text-bakery-brown-dark">
                    <span>Estimated Quote:</span>
                    <span className="text-lg text-bakery-gold">${calculateEstimate().toFixed(2)}</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Step-by-Step Customizer Inputs */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                {!isSuccess ? (
                  <form onSubmit={handleCustomCakeSubmit} className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-2xl font-bold text-bakery-brown-dark">Customize Details</h4>
                      <button
                        type="button"
                        onClick={handleResetBuilder}
                        className="text-xs text-bakery-brown/50 hover:text-bakery-brown flex items-center space-x-1 border border-bakery-beige/40 px-2.5 py-1 rounded-lg hover:bg-bakery-cream-light transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    </div>

                    {/* 1. Occasion Select */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        1. Event Occasion
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {['Birthday', 'Wedding', 'Anniversary', 'Baby Shower', 'Graduation', 'Corporate'].map(occ => (
                          <button
                            key={occ}
                            type="button"
                            onClick={() => setOccasion(occ)}
                            className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                              occasion === occ
                                ? 'bg-bakery-brown text-white border-transparent shadow'
                                : 'bg-white text-bakery-brown/80 border-bakery-beige hover:bg-bakery-cream'
                            }`}
                          >
                            {occ}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 2. Number of Layers */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        2. Cake Size / Tiers
                      </label>
                      <div className="flex space-x-3">
                        {([1, 2, 3] as const).map(n => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setLayers(n)}
                            className={`flex-1 py-2 rounded-lg border text-center transition-all ${
                              layers === n
                                ? 'bg-bakery-brown text-white border-transparent shadow'
                                : 'bg-white text-bakery-brown/80 border-bakery-beige hover:bg-bakery-cream'
                            }`}
                          >
                            <span className="text-xs font-bold">{n} Layer{n > 1 ? 's' : ''}</span>
                            <span className="block text-[10px] text-opacity-80">
                              {n === 1 ? 'Small (~10-12 slices)' : n === 2 ? 'Medium (~20-25 slices)' : 'Large (~45-50 slices)'}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 3. Sponge Flavor */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        3. Sponge Cake Flavor
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {FLAVORS.map(f => (
                          <button
                            key={f.name}
                            type="button"
                            onClick={() => setFlavor(f.name)}
                            className={`p-2.5 rounded-lg border text-left flex items-center space-x-2 transition-all ${
                              flavor === f.name
                                ? 'bg-bakery-brown text-white border-transparent shadow-sm'
                                : 'bg-white text-bakery-brown/80 border-bakery-beige hover:bg-bakery-cream'
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full border border-white" style={{ backgroundColor: f.color }} />
                            <span className="text-xs font-semibold">{f.name.split(' ')[1] || f.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 4. Icing Flavor */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        4. Cream & Icing Selection
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ICINGS.map(i => (
                          <button
                            key={i.name}
                            type="button"
                            onClick={() => setIcing(i.name)}
                            className={`p-2.5 rounded-lg border text-left flex items-center space-x-2 transition-all ${
                              icing === i.name
                                ? 'bg-bakery-brown text-white border-transparent shadow-sm'
                                : 'bg-white text-bakery-brown/80 border-bakery-beige hover:bg-bakery-cream'
                            }`}
                          >
                            <span className="w-3.5 h-3.5 rounded border border-bakery-brown/10" style={{ backgroundColor: i.color }} />
                            <span className="text-xs font-semibold">{i.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 5. Toppings */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                        5. Toppings & Accents (Pick multiple)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {TOPPING_OPTIONS.map(opt => (
                          <button
                            key={opt.name}
                            type="button"
                            onClick={() => handleToppingToggle(opt.name)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                              toppings.includes(opt.name)
                                ? 'bg-bakery-gold/20 text-bakery-gold-dark border-bakery-gold/50 shadow-sm'
                                : 'bg-white text-bakery-brown/80 border-bakery-beige hover:bg-bakery-cream'
                            }`}
                          >
                            <span>{opt.icon}</span>
                            <span>{opt.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 6. Custom message & delivery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                          6. Custom Icing Inscription
                        </label>
                        <input
                          type="text"
                          maxLength={30}
                          placeholder="E.g., Happy 30th Birthday!"
                          value={cakeMessage}
                          onChange={(e) => setCakeMessage(e.target.value)}
                          className="w-full bg-white border border-bakery-beige rounded-xl px-4 py-2 text-xs text-bakery-brown-dark placeholder-bakery-brown/30 focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-bakery-brown mb-2">
                          7. Required Delivery/Pickup Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.target.value)}
                            className="w-full bg-white border border-bakery-beige rounded-xl px-4 py-2 text-xs text-bakery-brown-dark focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Place Request Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream py-4 rounded-xl font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending Custom Request...</span>
                        </>
                      ) : (
                        <>
                          <Cake className="w-4 h-4 text-bakery-gold" />
                          <span>Submit Custom Cake Design</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  
                  /* SUCCESS BLOCK */
                  <div className="py-12 text-center flex flex-col items-center justify-center space-y-6" id="cake-success-view">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                      <CheckCircle className="w-12 h-12 animate-pulse" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-serif text-3xl font-bold text-bakery-brown-dark">Design Sent Successfully!</h4>
                      <p className="text-sm text-bakery-brown/70 max-w-md">
                        Your dream cake blueprint is on its way to Clarissa Millard and our senior pastry architects. We will review your selections and contact you via phone or email within 2 hours.
                      </p>
                    </div>

                    <div className="w-full bg-bakery-cream-light p-5 rounded-2xl border border-bakery-beige text-xs space-y-2 text-bakery-brown-dark font-normal">
                      <p className="font-bold uppercase tracking-wider text-bakery-gold-dark border-b border-bakery-beige/60 pb-2 mb-2">
                        Summary of Custom Blueprint
                      </p>
                      <p className="flex justify-between"><span>Occasion:</span><strong>{occasion} Celebration</strong></p>
                      <p className="flex justify-between"><span>Sizing:</span><strong>{layers} Tiers ({layers === 1 ? 'Small' : layers === 2 ? 'Medium' : 'Large'})</strong></p>
                      <p className="flex justify-between"><span>Sponge Flavor:</span><strong>{flavor}</strong></p>
                      <p className="flex justify-between"><span>Icing Overlay:</span><strong>{icing}</strong></p>
                      <p className="flex justify-between"><span>Added Accents:</span><strong>{toppings.join(', ') || 'Plain'}</strong></p>
                      {cakeMessage && <p className="flex justify-between"><span>Written Inscription:</span><strong className="italic">"{cakeMessage}"</strong></p>}
                      <p className="flex justify-between"><span>Required Date:</span><strong>{deliveryDate || 'ASAP (48h Notice)'}</strong></p>
                      <p className="flex justify-between font-bold border-t border-bakery-beige/60 pt-2 mt-2 text-sm text-bakery-brown-dark">
                        <span>Approximate Quote:</span>
                        <span>${calculateEstimate().toFixed(2)}</span>
                      </p>
                    </div>

                    <div className="flex space-x-4 w-full">
                      <button
                        onClick={handleResetBuilder}
                        className="flex-1 bg-bakery-beige/30 hover:bg-bakery-beige text-bakery-brown px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Design Another
                      </button>
                      <button
                        onClick={() => setActiveTab('info')}
                        className="flex-1 bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        View Occasions
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Daily Fresh Promise Section */}
        <div className="mt-24 bg-white rounded-3xl p-8 sm:p-12 border border-bakery-beige/25 shadow-md text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="daily-promise">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-1 bg-bakery-gold/15 text-bakery-gold-dark px-3.5 py-1 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Daily Fresh Promise</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-bakery-brown-dark tracking-tight">
              Our Ovens Never Sleep. Our Standards Never Slip.
            </h3>
            <p className="text-sm text-bakery-brown/80 leading-relaxed font-normal">
              Freshly baked every morning, there is absolutely no compromise on quality. We source the finest ingredients from local farms and handle each batch of dough with artisanal handmade care. If it isn't perfect, it doesn't leave our kitchen.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-bakery-cream p-4 rounded-2xl text-center border border-bakery-beige/40">
              <span className="text-2xl">🌅</span>
              <h5 className="font-bold text-xs text-bakery-brown-dark mt-2">Baked Fresh</h5>
              <p className="text-[10px] text-bakery-brown/65 mt-1">Every Single Morning</p>
            </div>
            <div className="bg-bakery-cream p-4 rounded-2xl text-center border border-bakery-beige/40">
              <span className="text-2xl">🌱</span>
              <h5 className="font-bold text-xs text-bakery-brown-dark mt-2">Finest Ingredients</h5>
              <p className="text-[10px] text-bakery-brown/65 mt-1">100% Organic & Pure</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
