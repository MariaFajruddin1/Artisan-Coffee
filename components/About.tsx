import { Heart, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every cup is crafted with care and attention to detail by our expert baristas',
  },
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    description: 'We partner with farms that prioritize environmental and social responsibility',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized globally for our exceptional quality and innovative blends',
  },
];

export const About = () => {
  return (
    <section className="py-20 px-4 bg-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Our Story</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Since 2010, we've been on a mission to bring exceptional coffee experiences to our community.
            From bean selection to the final pour, we obsess over every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-block p-6 bg-amber-800 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} className="text-amber-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-amber-100 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
