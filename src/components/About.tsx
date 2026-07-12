import { Leaf, Clock, Cake, Award, Smile, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const whyChooseUsData = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We use premium unbleached flour, fresh organic fruits, and cream sourced directly from local dairy farms.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Clock,
      title: 'Baked Daily',
      description: 'Our kitchen fires up at 4:00 AM every single morning to ensure your loaves and pastries are warm and fresh.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Cake,
      title: 'Custom Cakes',
      description: 'From elegant multi-tiered wedding showpieces to fun birthday custom structures, we build your sweet dreams.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Traditional European lamination techniques, real Normandy butter, and high-level artisanal craftsmanship.',
      color: 'text-bakery-gold',
      bgColor: 'bg-bakery-beige/30'
    },
    {
      icon: Smile,
      title: 'Friendly Service',
      description: 'We greet everyone with a warm smile and love making customized suggestions to match your personal tastes.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Luxury taste should be accessible. We offer handcrafted, premium artisan items at reasonable prices.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="about" className="py-24 bg-bakery-cream-light relative overflow-hidden">
      
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-bakery-beige/25 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bakery-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Left: Interactive Aesthetic Stacked Images */}
          <div className="lg:col-span-5 relative" id="about-image-grid">
            <div className="relative z-10 w-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=600&auto=format&fit=crop"
                alt="Bread dough being kneaded"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-8 right-0 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
                alt="Bakery bread cooling"
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Accent badge */}
            <div className="absolute -top-6 -right-4 z-30 bg-bakery-gold text-white px-5 py-5 rounded-full flex flex-col items-center justify-center shadow-lg font-serif animate-bounce-slow">
              <span className="text-xl font-bold">100%</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Organic</span>
            </div>
          </div>

          {/* Right: Rich Story Context */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left" id="about-text">
            <span className="text-sm font-bold uppercase tracking-widest text-bakery-gold">Our Legacy of Taste</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bakery-brown-dark tracking-tight">
              Crafting Memorable Bites <br />With Traditional Love
            </h2>
            
            <div className="h-1 w-20 bg-bakery-gold rounded-full" />

            <p className="text-base text-bakery-brown/85 leading-relaxed font-normal">
              At Millard, baking is our passion. Every loaf of bread, pastry, and cake is prepared using fresh ingredients, traditional recipes, and modern baking techniques. Whether you're celebrating a special occasion or simply craving something delicious, we are here to make every bite memorable.
            </p>

            <p className="text-sm text-bakery-brown/70 leading-relaxed font-normal italic border-l-4 border-bakery-beige pl-4 py-1">
              "We believe baking isn't just about mixing flour and water; it is a meticulous science coupled with a passionate art form. There are no shortcuts in our bakery—every lamination requires patience, and every sourdough loaf has a soul."
            </p>

            {/* Signature Block */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-bakery-gold shadow">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                  alt="Founder of Millard Bakery"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-bakery-brown-dark">Clarissa Millard</h4>
                <p className="text-xs text-bakery-brown/65">Master Artisan & Founder</p>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-bakery-gold">Our Philosophy</span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-bakery-brown-dark mt-2 tracking-tight">
            Why Locals Choose Millard
          </h3>
          <p className="text-sm text-bakery-brown/75 mt-3">
            Over the years, we have refined our processes to deliver the finest quality products while staying true to our cozy, family-focused community roots.
          </p>
        </div>

        {/* Why Choose Us Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-us-grid">
          {whyChooseUsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border border-bakery-beige/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left group"
                id={`why-card-${index}`}
              >
                <div className={`p-4 rounded-xl ${item.bgColor} ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-bakery-brown-dark mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-bakery-brown/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
