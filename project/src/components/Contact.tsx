import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github as GitHub, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'dharahasanchoudary@gmail.com',
      link: 'mailto:dharahasanchoudary@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+91-9347667104',
      link: 'tel:+919347667104'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      content: 'dharahasan-chowdary',
      link: 'https://www.linkedin.com/in/dharahasan-chowdary-a24083253/'
    },
    {
      icon: <GitHub size={24} />,
      title: 'GitHub',
      content: 'dharahasan',
      link: 'https://github.com/dharahasan'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Feel free to reach out to me for any questions, collaboration opportunities, or just to say hello.
            I'm always open to discussing new projects and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/dharahasan-chowdary-a24083253/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/dharahasan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                    aria-label="GitHub profile"
                  >
                    <GitHub size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm currently open to new opportunities and collaborations. If you're looking for a 
                dedicated and skilled developer for your team or project, I'd love to hear from you.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                  <div className="flex items-center">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="font-medium">Message sent successfully!</p>
                  </div>
                  <p className="mt-2 pl-9">Thank you for contacting me. I'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;