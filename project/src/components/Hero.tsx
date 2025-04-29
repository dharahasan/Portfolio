import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import photo from "../components/photo.jpg";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-16 flex items-center relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 z-0"
      ></div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Rayapaneni</span>
              <span className="block text-blue-600 dark:text-blue-400">Dharahasan</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Computer Science Student & Developer
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Passionate about programming and technology, with experience in web development, 
              data structures, and algorithm design.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://www.linkedin.com/in/dharahasan-chowdary-a24083253/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/dharahasan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="mailto:dharahasanchoudary@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+919347667104"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src={photo} 
                alt="Rayapaneni Dharahasan" 
                className="rounded-full object-cover w-full h-full border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg py-2 px-4 shadow-lg z-20">
                <span className="font-medium text-blue-600 dark:text-blue-400">B.Tech CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="flex flex-col items-center text-gray-600 dark:text-gray-400"
          aria-label="Scroll to about section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;