import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-amber-950 text-amber-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={32} className="text-amber-400" />
              <span className="text-2xl font-bold text-white">Artisan Coffee</span>
            </div>
            <p className="text-amber-200 leading-relaxed mb-4">
              Crafting exceptional coffee experiences since 2010. Visit us daily from 7 AM to 8 PM.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Menu</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Locations</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-amber-200">
              <li>123 Coffee Street</li>
              <li>Bean City, BC 12345</li>
              <li>info@artisancoffee.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center text-amber-300">
          <p>&copy; {year} Artisan Coffee. All rights reserved.</p>
          <p>Artisan Coffee Templete by Maria</p>
        </div>
      </div>
    </footer>
  );
};
