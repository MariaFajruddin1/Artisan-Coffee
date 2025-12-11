import { useState } from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  delay: number;
}

export const ProductCard = ({ name, description, price, image, delay }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-700">{price}</span>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
