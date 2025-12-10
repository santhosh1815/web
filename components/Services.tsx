import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PhoneCall, BellRing, Cctv, Fingerprint, Flame, Wifi, ShieldAlert, Server, Router } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: 1, title: 'EPABX / IPABX', description: 'Simplify business communication with advanced telephony and IP solutions.', icon: PhoneCall },
  { id: 2, title: 'Panic Alarm System', description: 'Instant emergency alerts for banks, offices, hospitals, and homes.', icon: BellRing },
  { id: 3, title: 'CCTV Surveillance', description: '24/7 HD monitoring with mobile access and smart AI analytics.', icon: Cctv },
  { id: 4, title: 'Access Control', description: 'Secure entry with fingerprint, face ID, and RFID authentication.', icon: Fingerprint },
  { id: 5, title: 'Fire Alarm & Safety', description: 'Early fire detection and suppression for maximum safety.', icon: Flame },
  { id: 6, title: 'Network Accessories', description: 'Switches, routers, and cabling for seamless connectivity.', icon: Wifi },
  { id: 7, title: 'Intrusion Detection', description: 'Real-time monitoring of unauthorized access and threats.', icon: ShieldAlert },
  { id: 8, title: 'Rack & Enclosures', description: 'Organized, durable enclosures to protect your IT hardware.', icon: Server },
  { id: 9, title: 'Security Devices', description: 'Firewalls, door phones, and devices for smart secure networking.', icon: Router },
];

const TiltCard: React.FC<{ item: ServiceItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={(node) => {
        // @ts-ignore
        ref.current = node;
      }}
      className={`relative h-64 w-full perspective-1000 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col items-start justify-center transition-transform duration-100 ease-linear cursor-pointer shadow-lg hover:shadow-blue-900/20 group"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
        <div className="w-12 h-12 mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <item.icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        
        {/* Glow effect on hover */}
        <div 
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
                background: `radial-gradient(400px circle at ${isHovered ? 'var(--mouse-x, 50%) var(--mouse-y, 50%)' : '50% 50%'}, rgba(37, 99, 235, 0.15), transparent 40%)`
            }}
        />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Comprehensive Solutions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-4">
            From access control to network infrastructure, we provide end-to-end services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard key={service.id} item={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;