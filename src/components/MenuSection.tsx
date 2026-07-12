import React, { useState } from 'react';
import { Search, ShoppingBag, Plus, Minus, CheckCircle, Info, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface MenuSectionProps {
  onOrderSuccess: (orderSummary: string) => void;
  orderItemDirectly?: Product | null;
  onClearDirectItem?: () => void;
}

export default function MenuSection({ onOrderSuccess, orderItemDirectly, onClearDirectItem }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'bread' | 'pastries' | 'cakes' | 'desserts'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Order Modal State
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isOrderSubmitting, setIsOrderSubmitting] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [placedOrderDetails, setPlacedOrderDetails] = useState<{
    id: string;
    productName: string;
    quantity: number;
    total: number;
    instructions: string;
  } | null>(null);

  // If a product was selected directly from another section (e.g. Hero), open modal
  if (orderItemDirectly && !selectedProduct) {
    setSelectedProduct(orderItemDirectly);
    setQuantity(1);
    setSpecialInstructions('');
    if (onClearDirectItem) onClearDirectItem();
  }

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSpecialInstructions('');
    setIsOrderSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsOrderSuccess(false);
    setPlacedOrderDetails(null);
  };

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  const handlePlaceOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setIsOrderSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      const orderId = 'M-' + Math.floor(100000 + Math.random() * 900000);
      const totalAmount = selectedProduct.price * quantity;
      
      setPlacedOrderDetails({
        id: orderId,
        productName: selectedProduct.name,
        quantity,
        total: totalAmount,
        instructions: specialInstructions
      });

      setIsOrderSubmitting(false);
      setIsOrderSuccess(true);
      
      // Pass up to App context if needed
      onOrderSuccess(`${quantity}x ${selectedProduct.name} (${orderId})`);
    }, 1200);
  };

  const categories = [
    { id: 'all', name: 'Full Menu' },
    { id: 'bread', name: 'Fresh Breads' },
    { id: 'pastries', name: 'Delicate Pastries' },
    { id: 'cakes', name: 'Celebration Cakes' },
    { id: 'desserts', name: 'Sweet Desserts' }
  ] as const;

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeTab === 'all' || product.category === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-bakery-cream relative">
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-bakery-beige/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-bakery-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">Handcrafted Daily</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            Explore Our Sweet & Savory Menu
          </h2>
          <p className="text-sm text-bakery-brown/75 mt-3">
            Every item is baked in small batches in our ovens, ensuring optimal freshness, crisp crusts, and warm buttery centers. Take a look and reserve yours.
          </p>
        </div>

        {/* Filter and Search Container */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-12 border-b border-bakery-beige/40 mb-12">
          
          {/* Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" id="menu-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-bakery-brown text-bakery-cream shadow-md'
                    : 'bg-white text-bakery-brown/70 hover:bg-bakery-beige-light hover:text-bakery-brown-dark border border-bakery-beige/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80" id="menu-search-container">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-bakery-brown/50">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search croissants, sourdough, pies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-bakery-beige/60 rounded-full pl-11 pr-5 py-2.5 text-sm text-bakery-brown-dark placeholder-bakery-brown/40 focus:outline-none focus:ring-2 focus:ring-bakery-gold focus:border-transparent transition-all shadow-sm"
              id="menu-search-input"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="menu-items-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-bakery-beige/25 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                id={`product-card-${product.id}`}
              >
                {/* Product Image Panel */}
                <div className="relative h-56 overflow-hidden bg-bakery-cream-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-bakery-brown-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-bakery-beige shadow-sm">
                    {product.category}
                  </span>

                  {/* Hot tag or special tags if present */}
                  {product.tags && product.tags.length > 0 && (
                    <span className="absolute bottom-4 left-4 bg-bakery-gold text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md shadow">
                      {product.tags[0]}
                    </span>
                  )}

                  {/* Quick Order Button Overlay */}
                  <div className="absolute inset-0 bg-bakery-brown-dark/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="bg-white text-bakery-brown-dark font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center space-x-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-serif text-lg font-bold text-bakery-brown-dark line-clamp-1 group-hover:text-bakery-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-bakery-brown/70 mt-2 line-clamp-2 leading-relaxed font-normal flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-5 mt-4 border-t border-bakery-beige/30">
                    <span className="font-serif text-xl font-bold text-bakery-gold">
                      ${product.price.toFixed(2)}
                    </span>
                    
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="text-bakery-brown hover:text-bakery-gold text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 group/btn cursor-pointer"
                    >
                      <span>Reserve</span>
                      <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white py-16 px-6 rounded-2xl border border-bakery-beige/30 text-center max-w-md mx-auto shadow-sm">
            <Info className="w-12 h-12 text-bakery-brown/40 mx-auto mb-4" />
            <h4 className="font-serif text-xl font-bold text-bakery-brown-dark">No products found</h4>
            <p className="text-sm text-bakery-brown/60 mt-2">
              We couldn't find any items matching "{searchQuery}". Try selecting another category or searching something else.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-6 bg-bakery-brown text-bakery-cream px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-bakery-brown-dark transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Interactive Order Modal / Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full z-10 border border-bakery-beige/30"
              id="order-modal-box"
            >
              
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-bakery-brown-dark shadow-md transition-all cursor-pointer"
                id="close-order-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {!isOrderSuccess ? (
                // Active Order Form
                <form onSubmit={handlePlaceOrderSubmit} className="flex flex-col">
                  {/* Banner Image */}
                  <div className="relative h-48 bg-bakery-cream">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="px-8 pb-8 pt-4 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] bg-bakery-beige text-bakery-brown-dark font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded">
                        {selectedProduct.category}
                      </span>
                      {selectedProduct.tags && selectedProduct.tags[0] && (
                        <span className="text-[10px] bg-bakery-gold/20 text-bakery-gold-dark font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded">
                          {selectedProduct.tags[0]}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-bakery-brown-dark mt-2">
                      {selectedProduct.name}
                    </h3>

                    <p className="text-sm text-bakery-brown/70 mt-2 font-normal leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between bg-bakery-cream-light p-4 rounded-2xl border border-bakery-beige/30">
                      <div>
                        <span className="text-xs text-bakery-brown/60 uppercase tracking-wider font-semibold">Unit Price</span>
                        <p className="font-serif text-xl font-bold text-bakery-gold">${selectedProduct.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-4 bg-white px-4 py-2 rounded-xl border border-bakery-beige/35 shadow-sm">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange('dec')}
                          className="p-1 rounded text-bakery-brown hover:bg-bakery-cream transition-colors cursor-pointer"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-base text-bakery-brown-dark w-6 text-center">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange('inc')}
                          className="p-1 rounded text-bakery-brown hover:bg-bakery-cream transition-colors cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="mt-5">
                      <label className="block text-xs font-bold text-bakery-brown uppercase tracking-wider mb-2">
                        Special Instructions / Dietary requests
                      </label>
                      <textarea
                        rows={2}
                        placeholder="E.g., Slice the bread, Eggless alternative, Write 'Happy Birthday Clara' on the cake"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        className="w-full bg-white border border-bakery-beige/60 rounded-xl p-3 text-sm text-bakery-brown-dark placeholder-bakery-brown/30 focus:outline-none focus:ring-1 focus:ring-bakery-gold shadow-inner"
                      />
                    </div>

                    {/* Total Price & Submit */}
                    <div className="mt-8 pt-6 border-t border-bakery-beige/40 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-bakery-brown/60 uppercase font-semibold">Estimated Total</span>
                        <p className="font-serif text-2xl font-black text-bakery-brown-dark">
                          ${(selectedProduct.price * quantity).toFixed(2)}
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isOrderSubmitting}
                        className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-6 py-3.5 rounded-xl font-bold tracking-wide shadow-md flex items-center space-x-2 transition-all disabled:opacity-50 cursor-pointer"
                        id="place-order-submit-btn"
                      >
                        {isOrderSubmitting ? (
                          <>
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Booking...</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Confirm Reservation</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </form>
              ) : (
                // Success / Confirmation State
                <div className="p-8 text-center" id="order-success-screen">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>

                  <h3 className="font-serif text-2xl font-bold text-bakery-brown-dark">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-sm text-bakery-brown/70 mt-2 max-w-sm mx-auto">
                    Thank you! Your order has been registered at our Millard kitchen. We are preparing your baked goods with love.
                  </p>

                  {/* Ticket Details */}
                  {placedOrderDetails && (
                    <div className="my-6 bg-bakery-cream-light border-2 border-dashed border-bakery-beige p-5 rounded-2xl text-left text-xs font-mono text-bakery-brown-dark">
                      <div className="flex justify-between font-bold border-b border-bakery-beige/60 pb-3 mb-3">
                        <span>TICKET ID: {placedOrderDetails.id}</span>
                        <span className="text-emerald-700">● READY FOR PICKUP</span>
                      </div>
                      <div className="space-y-1.5">
                        <p className="flex justify-between">
                          <span>Product:</span>
                          <span className="font-bold">{placedOrderDetails.productName}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Quantity:</span>
                          <span className="font-bold">{placedOrderDetails.quantity} pcs</span>
                        </p>
                        {placedOrderDetails.instructions && (
                          <p className="text-[11px] italic text-bakery-brown/70 leading-normal">
                            Note: "{placedOrderDetails.instructions}"
                          </p>
                        )}
                        <p className="flex justify-between font-bold text-sm border-t border-bakery-beige/60 pt-3 mt-3 text-bakery-gold-dark">
                          <span>Total Charged:</span>
                          <span>${placedOrderDetails.total.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-center space-x-2 bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-left mb-6 max-w-sm mx-auto">
                    <Sparkles className="w-5 h-5 text-bakery-gold shrink-0" />
                    <p className="text-xs text-bakery-brown-dark font-sans leading-normal">
                      <strong>Pickup Policy:</strong> Please show this ticket on your phone at our counter. Pick up within 2 hours of booking for ultimate oven-freshness!
                    </p>
                  </div>

                  <button
                    onClick={handleCloseModal}
                    className="bg-bakery-brown hover:bg-bakery-brown-dark text-bakery-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wide shadow transition-all cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
