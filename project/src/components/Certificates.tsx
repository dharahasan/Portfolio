import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certificates = [
    {
      id: 1,
      title: "NPTL-Cloud Computing",
      issuer: "NPTL",
      date: "October 2024",
      description: "Comprehensive understanding of cloud computing concepts, services, deployment models, and implementation strategies.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Server-side JavaScript with Node.js",
      issuer: "Coursera",
      date: "March 2024",
      description: "Mastered server-side JavaScript development with Node.js, including Express framework, RESTful APIs, and database integration.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Coursera",
      date: "March 2024",
      description: "Comprehensive web development fundamentals covering HTML structure, CSS styling, responsive design, and interactive JavaScript.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      date: "February 2024",
      description: "Advanced techniques for crafting effective prompts to optimize AI model responses for various applications.",
      image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Generative AI with Large Language Models",
      issuer: "Coursera",
      date: "February 2024",
      description: "In-depth study of generative AI technologies, model architectures, fine-tuning methods, and practical applications.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      title: "GenAI for Everyone",
      issuer: "Coursera",
      date: "January 2024",
      description: "Foundational understanding of generative AI concepts, capabilities, limitations, and ethical considerations.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const slidesToShow = 3;
  const totalSlides = Math.ceil(certificates.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentCertificates = certificates.slice(
    currentSlide * slidesToShow, 
    Math.min((currentSlide + 1) * slidesToShow, certificates.length)
  );

  const CertificateCard = ({ 
    title, 
    issuer, 
    date, 
    description,
    image
  }: {
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
  }) => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="flex items-center mb-1">
              <Award size={16} className="mr-2" />
              <span className="text-sm">{issuer}</span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-grow">
        <div className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {date}
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center text-sm font-medium transition-colors">
          View Certificate
          <ExternalLink size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I'm committed to continuous learning and have earned several professional certificates
            to expand my knowledge and skills.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                description={cert.description}
                image={cert.image}
              />
            ))}
          </div>
          
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            These certifications reflect my commitment to continuous learning and staying updated with the latest 
            technologies and best practices in software development and computer science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;