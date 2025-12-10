import React from 'react';
import { Mic2, Radio, Bell, Flame, Activity } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'PA System',
    description: 'Reliable Public Address System for clear, widespread communication across your facility.',
    icon: Mic2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Talk Back System',
    description: 'Clear Two-Way Communication systems designed for industrial and secure environments.',
    icon: Radio,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Addressable Talk Back',
    description: 'Advanced Communication System allowing precise targeting of specific zones or units.',
    icon: Activity,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Fire Alarm System',
    description: '3 IN 1 Fire Alarm System providing integrated fire protection and early warning mechanisms.',
    icon: Flame,
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 5,
    title: 'Nurse Call System',
    description: 'Reliable Patient-to-Nurse Communication ensuring rapid response in healthcare settings.',
    icon: Bell,
    color: 'from-teal-500 to-emerald-500'
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Our Products</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Core Solutions</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            High-performance hardware designed for safety, communication, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20`}>
                <product.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {product.description}
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-slate-800 rounded-2xl transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;