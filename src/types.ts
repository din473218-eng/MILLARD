export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bread' | 'pastries' | 'cakes' | 'desserts';
  image: string;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CustomCakeDesign {
  cakeType: string; // 'Birthday' | 'Wedding' | 'Anniversary' | 'Baby Shower' | 'Graduation' | 'Corporate'
  layers: number; // 1, 2, 3
  flavor: string; // Chocolate, Red Velvet, Vanilla, Carrot, Lemon, Marble
  icing: string; // Chocolate Ganache, Buttercream, Cream Cheese, Whipped Cream, Fondant
  toppings: string[]; // Fresh Berries, Chocolate Shavings, Golden Flakes, Edible Flowers, Sprinkles
  size: string; // '6 inch (6-8 servings)' | '8 inch (12-16 servings)' | '10 inch (20-24 servings)' | 'Custom Event Size'
  message: string;
  deliveryDate: string;
}
