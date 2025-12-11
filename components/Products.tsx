'use client'
import { ProductCard } from '@/components/ProductCards';

const products = [
  {
    name: 'Espresso Classico',
    description: 'Rich, bold, and full-bodied espresso with notes of dark chocolate and caramel',
    price: '$4.50',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Cappuccino Supreme',
    description: 'Velvety microfoam crowns our signature espresso blend',
    price: '$5.50',
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Cold Brew Delight',
    description: 'Smooth, refreshing cold brew steeped for 16 hours',
    price: '$5.00',
    image: 'https://images.pexels.com/photos/1495534/pexels-photo-1495534.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Caramel Macchiato',
    description: 'Espresso layered with steamed milk and vanilla, topped with caramel',
    price: '$6.00',
    image: 'https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mocha Heaven',
    description: 'Rich chocolate meets premium espresso in perfect harmony',
    price: '$6.50',
    image: 'https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Flat White',
    description: 'Microfoam art perfection with our signature espresso',
    price: '$5.25',
    image: 'https://images.pexels.com/photos/8273208/pexels-photo-8273208.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const Products = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Coffee Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted beverages made from the finest beans, sourced ethically and roasted to perfection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};
