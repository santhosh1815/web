import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ShieldCheck, Server, Cpu, Target, Eye, Heart, PenTool, Award, Headphones } from 'lucide-react';

const About: React.FC = () => {
  const { ref: introRef, isVisible: introVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: whyRef, isVisible: whyVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: mvvRef, isVisible: mvvVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
       {/* Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* SECTION 1: Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div 
            ref={(node) => {
              // @ts-ignore
              introRef.current = node;
            }}
            className={`transition-all duration-1000 transform ${introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="inline-block mb-4">
              <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">About JS Network Communication</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              About Us
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              JS Network Communication is a leading provider of advanced electronic security systems, networking solutions, systems integration, and software solutions for all business needs. We cater to businesses of all sizes and industries that require reliable and efficient network and security solutions.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our unique selling proposition lies in our commitment to providing customized product design, high-quality services, and comprehensive support to ensure that our clients’ network and security needs are met with precision and excellence.
            </p>

            <ul className="space-y-4">
              {[
                "Advanced Electronic Security Systems",
                "Comprehensive Networking Solutions",
                "Systems Integration & Software Solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                   <div className="w-2 h-2 rounded-full bg-sky-500" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 transform ${introVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1551808525-51a943718d1e?auto=format&fit=crop&q=80&w=1000" 
                alt="Server Room" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-slate-800 border-l-4 border-l-sky-500 shadow-xl max-w-xs">
                 <p className="text-white font-bold text-lg mb-1">Excellence in Connectivity</p>
                 <p className="text-slate-400 text-sm">Securing businesses with advanced technology.</p>
              </div>
          </div>
        </div>

        {/* SECTION 2: Why Choose Us */}
        <div 
          ref={(node) => {
            // @ts-ignore
            whyRef.current = node;
          }}
          className={`transition-all duration-1000 transform ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us</h3>
             <p className="text-slate-400 max-w-3xl mx-auto">
               At JS Network Communication, we specialize in delivering advanced electronic security, networking, and software solutions. Our focus on customization, quality, and dedicated support ensures that your business is always protected and connected with precision.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customized Product Design",
                desc: "Tailored network and security solutions designed to meet the unique needs of every client and industry.",
                icon: PenTool,
                color: "text-purple-400",
                bg: "bg-purple-500/10"
              },
              {
                title: "High-Quality Services",
                desc: "Reliable, efficient, and long-lasting networking and security services with a focus on excellence.",
                icon: Award,
                color: "text-sky-400",
                bg: "bg-sky-500/10"
              },
              {
                title: "Comprehensive Support",
                desc: "24/7 expert support and smooth integration to keep systems running without interruptions.",
                icon: Headphones,
                color: "text-teal-400",
                bg: "bg-teal-500/10"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:bg-slate-800 group">
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Mission, Vision, Values */}
        <div 
          ref={(node) => {
            // @ts-ignore
            mvvRef.current = node;
          }}
          className={`transition-all duration-1000 transform ${mvvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
           <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-white mb-4">Our Mission, Vision & Values</h3>
             <p className="text-slate-400 max-w-3xl mx-auto">
                We are focused on delivering trusted, innovative, and future-ready electronic security and networking solutions that help businesses stay secure, connected, and ahead of the competition.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Target size={120} />
               </div>
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                    <Target size={24} />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">
                   To deliver advanced, reliable, and scalable electronic security and networking solutions that empower businesses to operate with confidence. We aim to ensure safety, connectivity, and efficiency by combining innovative technologies with customer-focused service.
                 </p>
               </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Eye size={120} />
               </div>
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white mb-6">
                    <Eye size={24} />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">
                   To be recognized as a global leader in electronic security and networking, setting industry benchmarks for innovation, trust, and customer satisfaction. We envision a future where businesses of all sizes are empowered with intelligent, secure, and seamlessly integrated systems.
                 </p>
               </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Heart size={120} />
               </div>
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center text-white mb-6">
                    <Heart size={24} />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-4">Our Values</h4>
                 <p className="text-slate-400 leading-relaxed text-sm">
                   We are guided by integrity, innovation, and customer-centric service. Our values emphasize trust, teamwork, and excellence in every solution we provide. By prioritizing quality, accountability, and long-term partnerships, we ensure lasting success for our clients and our company.
                 </p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;