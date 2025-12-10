import React from 'react';

const clients = [
  { name: 'Tata', logo: 'https://logo.clearbit.com/tata.com' },
  { name: 'Tata Motors', logo: 'https://logo.clearbit.com/tatamotors.com' },
  { name: 'GNFC', logo: 'https://logo.clearbit.com/gnfc.in' },
  { name: 'Deepak Fertilisers', logo: 'https://logo.clearbit.com/dfpcl.com' },
  { name: 'Johnson Controls', logo: 'https://logo.clearbit.com/johnsoncontrols.com' },
  { name: 'Bombay Dyeing', logo: 'https://logo.clearbit.com/bombaydyeing.com' },
];

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-y border-slate-900/50 relative overflow-hidden">
        {/* Electronic background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
             <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-3 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">OUR CLIENTS</h3>
             <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
        </div>
        
        <div className="relative w-full overflow-hidden group mb-12 py-4">
            {/* Gradient Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                {/* Render the list multiple times to create the infinite loop effect seamlessly */}
                {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                    <div key={index} className="mx-8 md:mx-12 flex items-center justify-center transition-all duration-500 transform hover:scale-110 group/item cursor-pointer">
                        <div className="w-40 h-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover/item:shadow-[0_0_25px_rgba(56,189,248,0.4)] group-hover/item:bg-white group-hover/item:border-2 group-hover/item:border-sky-400/50 opacity-80 group-hover/item:opacity-100">
                            <img 
                                src={client.logo} 
                                alt={`${client.name} Logo`} 
                                className="max-h-full max-w-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300"
                                onError={(e) => {
                                    // Fallback if image fails
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-900 font-bold text-sm tracking-widest uppercase">${client.name}</span>`;
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Text List of Clients */}
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                {clients.map((client, index) => (
                    <div 
                        key={index} 
                        className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 font-medium 
                        transition-all duration-300 cursor-default shadow-sm 
                        hover:scale-110 hover:border-sky-500 hover:text-white hover:bg-slate-800 
                        hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] backdrop-blur-sm"
                    >
                        {client.name}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Clients;