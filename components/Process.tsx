import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Strategy & Research',
    description: 'We analyze your business goals, target audience, and competitors to create a data-driven roadmap.',
    icon: Lightbulb
  },
  {
    id: 2,
    title: 'Design & Prototype',
    description: 'Our designers craft intuitive, stunning interfaces that align with your brand identity and user needs.',
    icon: PenTool
  },
  {
    id: 3,
    title: 'Development',
    description: 'We build robust, scalable solutions using the latest technologies and clean, efficient code.',
    icon: Code2
  },
  {
    id: 4,
    title: 'Launch & Growth',
    description: 'We ensure a smooth deployment and provide ongoing support and marketing to help you grow.',
    icon: Rocket
  }
];

const Process: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="process" className="py-24 px-4 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Our Process</h2>
        </div>

        <div 
          ref={(node) => {
              // @ts-ignore
              ref.current = node; 
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500/20 via-sky-500/50 to-sky-500/20" />

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative flex flex-col items-center text-center transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center z-10 mb-6 group hover:border-sky-500 transition-colors duration-300">
                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-sky-500/10 transition-colors duration-300">
                    <step.icon size={32} className="text-slate-400 group-hover:text-sky-500 transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;