import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dharahasan</h3>
            <p className="text-gray-400 mb-4">
              Computer Science student and developer passionate about creating impactful software solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/dharahasan-chowdary-a24083253/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/dharahasan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="mailto:dharahasanchoudary@gmail.com"
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919347667104"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#certificates" className="text-gray-400 hover:text-white transition-colors">Certificates</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">C++</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">JavaScript</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">React</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">Node.js</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">HTML/CSS</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">Java</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">PHP</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">MySQL</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">MongoDB</span>
              <span className="bg-blue-900/50 px-2 py-1 rounded text-sm">SQL</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-blue-400" />
                <span className="text-gray-400">dharahasanchoudary@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-blue-400" />
                <span className="text-gray-400">+91-9347667104</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-blue-400" />
                <span className="text-gray-400">Lovely Professional University, Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Rayapaneni Dharahasan. Made with 
            <Heart size={16} className="text-red-500 mx-1" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;