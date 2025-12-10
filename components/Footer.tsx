import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-sky-600 to-blue-800 flex items-center justify-center text-white font-bold">
                    JS
                </div>
                <span className="text-xl font-bold tracking-tight text-white">JSNC</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading provider of advanced electronic security systems, networking solutions, and systems integration.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Company</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Products</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">CCTV Surveillance</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Fire Alarm Systems</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Access Control</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Networking</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">EPABX System</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">A:</span>
                <span>18/19, Coconut Avenue,<br/>JP Nagar 8th Phase,<br/>Bengaluru - 560076</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">P:</span>
                +91 9663421455
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">E:</span>
                sales@jsnc.co.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 JS Network Communication. All rights reserved.</p>
          <p className="text-slate-600 text-sm">Designed & Developed by Protriden Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;