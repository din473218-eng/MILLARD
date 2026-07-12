import { Product, Testimonial, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  // Breads
  {
    id: 'b1',
    name: 'Artisan French Baguette',
    description: 'Traditional French bread with a crisp, golden crust and a soft, airy crumb. Baked fresh throughout the day.',
    price: 4.50,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
    tags: ['Best Seller', 'Classic']
  },
  {
    id: 'b2',
    name: 'Stone-Ground Whole Wheat',
    description: 'Hearty loaf baked with locally sourced stone-ground whole wheat, honey, and organic cracked wheat toppings.',
    price: 5.75,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    tags: ['Healthy', 'High Fiber']
  },
  {
    id: 'b3',
    name: 'Roasted Garlic & Herb Sourdough',
    description: 'Slow-fermented sourdough packed with sweet caramelized whole garlic cloves, fresh rosemary, and sea salt.',
    price: 6.50,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'Vegan Friendly']
  },

  // Pastries
  {
    id: 'p1',
    name: 'All-Butter Croissant',
    description: 'Flaky, golden, multilayered classic French pastry crafted with premium Normandy butter.',
    price: 3.75,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    tags: ['Warm & Flaky', 'French Style']
  },
  {
    id: 'p2',
    name: 'Spiced Apple Danish Pastry',
    description: 'Crispy puff pastry filled with warm spiced orchard apples and finished with a delicate sweet glaze.',
    price: 4.25,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop',
    tags: ['Sweet', 'Seasonal']
  },
  {
    id: 'p3',
    name: 'Belgian Chocolate Roll',
    description: 'Pain au Chocolat made with laminated sweet yeast dough and loaded with two rich dark Belgian chocolate bars.',
    price: 4.50,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=600&auto=format&fit=crop',
    tags: ['Chocolate Lover', 'Best Seller']
  },

  // Cakes
  {
    id: 'c1',
    name: 'Decadent Dark Chocolate Fudge Cake',
    description: 'Rich triple-layered Belgian chocolate sponge coated in a velvet fudge frosting and chocolate curls.',
    price: 38.00,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    tags: ['Bestseller', 'Celebration']
  },
  {
    id: 'c2',
    name: 'Classic Red Velvet Cake',
    description: 'Moist and vibrant cocoa sponge layers filled and frosted with our signature smooth Madagascar cream cheese.',
    price: 42.00,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=600&auto=format&fit=crop',
    tags: ['Elegant', 'Romantic']
  },
  {
    id: 'c3',
    name: 'Madagascar Vanilla Bean Cake',
    description: 'Light vanilla sponge layered with fluffy buttercream and accented with elegant edible white pearls.',
    price: 35.00,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop',
    tags: ['Classic', 'Wedding Favorite']
  },
  {
    id: 'c4',
    name: 'Fresh Harvest Summer Fruit Cake',
    description: 'Light citrus-infused sponge loaded with organic summer berries, kiwi slices, and fresh whipped cream.',
    price: 45.00,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop',
    tags: ['Fresh', 'Gluten Free Option']
  },

  // Desserts
  {
    id: 'd1',
    name: 'New York Style Cheesecake',
    description: 'Rich, dense, and ultra-creamy baked cheesecake on a golden graham cracker crust with strawberry coulis.',
    price: 6.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?q=80&w=600&auto=format&fit=crop',
    tags: ['Rich', 'Creamy']
  },
  {
    id: 'd2',
    name: 'Sea Salt Chocolate Fudge Brownies',
    description: 'Super fudgy triple-chocolate brownies sprinkled with premium Maldon sea salt flakes.',
    price: 3.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
    tags: ['Fudgy', 'Indulgent']
  },
  {
    id: 'd3',
    name: 'Giant Golden Chocolate Chip Cookie',
    description: 'Crispy edges, soft chewy center, loaded with 60% dark chocolate chips and brown butter undertones.',
    price: 2.75,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    tags: ['Kids Favorite', 'Freshly Baked']
  },
  {
    id: 'd4',
    name: 'Gourmet Blue Vanilla Cupcakes',
    description: 'Light vanilla cupcakes topped with an elegant blue buttercream swirl and silver nonpareils.',
    price: 3.25,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600&auto=format&fit=crop',
    tags: ['Cute', 'Party']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    role: 'Local Food Critic',
    rating: 5,
    comment: 'The cakes were absolutely delicious and beautifully decorated. You can taste the quality and skill in every layer.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    date: 'June 24, 2026'
  },
  {
    id: 't2',
    name: 'Mark Henderson',
    role: 'Daily Regular Customer',
    rating: 5,
    comment: 'Fresh bread every morning. The Roasted Garlic & Herb sourdough is an absolute masterpiece. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    date: 'July 2, 2026'
  },
  {
    id: 't3',
    name: 'Sophia Lindqvist',
    role: 'Event Coordinator',
    rating: 5,
    comment: 'Excellent customer service and amazing pastries. They catered our corporate anniversary with flawless perfection.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    date: 'July 10, 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Do you make custom cakes?',
    answer: 'Yes, absolutely! Custom cakes are one of our greatest specialties. We craft bespoke cakes for birthdays, weddings, anniversaries, baby showers, graduations, and corporate events. You can use our interactive cake designer below to start designing your dream cake today!'
  },
  {
    id: 'faq2',
    question: 'Can I place an order online?',
    answer: 'Yes! You can browse our current menu on this website and click "Order Now" on any item to prepare a reservation or same-day pickup. For larger event catering or fully custom designs, you can fill out our interactive forms or contact us directly via WhatsApp/Call.'
  },
  {
    id: 'faq3',
    question: 'Do you offer same-day pickup?',
    answer: 'For our standard breads, pastries, and daily desserts, yes! You can pick them up any time during our business hours. For custom cakes or large orders, we generally require a minimum notice of 48 hours to ensure premium quality.'
  },
  {
    id: 'faq4',
    question: 'What ingredients do you use?',
    answer: 'We believe that great baking starts with exceptional ingredients. We use unbleached stone-ground flours, fresh organic dairy, real butter (no margarines or hydrogenated fats), organic cage-free eggs, and seasonal fresh fruits. We also offer options for gluten-conscious and vegan dietary requirements!'
  },
  {
    id: 'faq5',
    question: 'Do you provide catering for events?',
    answer: 'Yes! We provide tailored catering services for events of all sizes. This includes dessert grazing tables, customized pastry platters, individual corporate breakfast boxes, and bespoke wedding showpieces. Contact our team to request an event consultation.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop',
    title: 'Bespoke Birthday Showpiece'
  },
  {
    id: 'g2',
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop',
    title: 'Freshly Baked Crusty Breads'
  },
  {
    id: 'g3',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1558961309-dbdf000a1273?q=80&w=600&auto=format&fit=crop',
    title: 'Golden Brown Oatmeal Raisin Cookies'
  },
  {
    id: 'g4',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop',
    title: 'Gourmet Strawberry-Iced Cupcakes'
  },
  {
    id: 'g5',
    category: 'Bakery Interior',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    title: 'The Warm & Welcoming Millard Storefront'
  },
  {
    id: 'g6',
    category: 'Fresh pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    title: 'Flaky Golden Morning Croissants'
  },
  {
    id: 'g7',
    category: 'Dessert display',
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=600&auto=format&fit=crop',
    title: 'Afternoon Dessert Display Platter'
  },
  {
    id: 'g8',
    category: 'Baking process',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=600&auto=format&fit=crop',
    title: 'Traditional Dough Lamination'
  }
];
