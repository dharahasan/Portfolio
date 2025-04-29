import React, { useEffect, useRef } from 'react';
import { School, Calendar, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      id: 1,
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      location: "Punjab, India",
      period: "Since August 2022",
      grade: "CGPA: 6.4"
    },
    {
      id: 2,
      institution: "Narayana College",
      degree: "Intermediate",
      field: "",
      location: "Tirupati, Andhra Pradesh",
      period: "June 2020 - May 2022",
      grade: "Percentage: 71%"
    },
    {
      id: 3,
      institution: "Saanvi International School",
      degree: "Matriculation",
      field: "",
      location: "Kadapa, Andhra Pradesh",
      period: "June 2019 - April 2020",
      grade: "Percentage: 73%"
    }
  ];

  const EducationCard = ({ 
    institution, 
    degree, 
    field, 
    location, 
    period, 
    grade,
    isLast = false
  }: {
    institution: string;
    degree: string;
    field: string;
    location: string;
    period: string;
    grade: string;
    isLast?: boolean;
  }) => (
    <div className="relative">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full dark:bg-blue-500">
          <School size={24} className="text-white" />
        </div>
        <div className="flex-grow pl-8 ml-4">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{institution}</h3>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <Award size={16} className="mr-2" />
              {degree} {field && `- ${field}`}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <Calendar size={16} className="mr-2" />
              {period}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
              <MapPin size={16} className="mr-2" />
              {location}
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium">
              {grade}
            </div>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="absolute top-12 left-6 w-0.5 h-full bg-blue-200 dark:bg-blue-900 -z-10"></div>
      )}
    </div>
  );

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            My academic journey has provided me with a strong foundation in computer science and engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <EducationCard 
                key={edu.id}
                institution={edu.institution}
                degree={edu.degree}
                field={edu.field}
                location={edu.location}
                period={edu.period}
                grade={edu.grade}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Academic Highlights</h3>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  Coursework
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Completed extensive coursework in Data Structures, Algorithms, Database Management, 
                  Object-Oriented Programming, Web Development, and Software Engineering.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  Practical Experience
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Applied classroom learning through hands-on projects and programming assignments, 
                  developing practical skills in software development and problem-solving.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  Self-Learning
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Supplemented formal education with self-directed learning through online courses, 
                  tutorials, and certifications in emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;