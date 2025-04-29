import React, { useEffect, useRef } from 'react';
import { Code, Users, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const qualities = [
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      description: 'Proficient in multiple programming languages and frameworks including C++, JavaScript, React, and Node.js.'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication skills and adaptability to work in diverse teams.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Self-Motivated Learner',
      description: 'Continuously expanding knowledge through certifications and practical applications of new technologies.'
    },
    {
      icon: <Award size={24} />,
      title: 'Project Management',
      description: 'Experience in managing and delivering projects from conception to completion with attention to detail.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I'm a Computer Science and Engineering student with a passion for programming and problem-solving.
            My journey in tech has equipped me with both technical expertise and essential soft skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <div 
              key={index}
              className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 inline-block bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {quality.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 dark:bg-blue-700 text-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">My Professional Journey</h3>
              <p className="mb-4">
                I'm currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. 
                My academic journey is complemented by practical experience in software development and a keen interest in emerging technologies.
              </p>
              <p>
                I'm particularly interested in data structures, algorithms, web development, and exploring new technologies in AI and cloud computing.
                My goal is to create impactful solutions that solve real-world problems.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Team Player &amp; Collaborative
                </li>
                <li className="flex items-center">
                  <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Adaptable &amp; Self-Motivated
                </li>
                <li className="flex items-center">
                  <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Disciplined &amp; Punctual
                </li>
                <li className="flex items-center">
                  <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Problem Solver &amp; Creative Thinker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;