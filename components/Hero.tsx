'use client'
import { Coffee, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="inline-block mb-6 animate-bounce-slow">
          <Coffee size={80} className="text-amber-200" strokeWidth={1.5} />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          Artisan Coffee
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8 font-light">
          Crafted with passion, served with love
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          Explore Our Blends
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={40} className="text-amber-200" />
      </div>
    </section>
  );
};
