import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: 'C++', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'C', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 85 },
  ];

  const softSkills = [
    { name: 'Team Collaboration', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Adaptability', level: 85 },
    { name: 'Discipline', level: 95 },
    { name: 'Self-Motivation', level: 90 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700">
        <div 
          className="h-3 bg-blue-600 rounded-full dark:bg-blue-500 transition-all duration-1000 ease-out" 
          style={{ width: '0%' }}
          ref={el => {
            if (el) {
              setTimeout(() => {
                el.style.width = `${level}%`;
              }, 100);
            }
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I've developed a diverse set of technical and soft skills through academic study, 
            personal projects, and collaborative work environments.
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Soft Skills</h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">DSA Training</h4>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 dark:text-blue-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    DSA with C++ - Geeks for Geeks (June 2024)
                  </h5>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Mastered core data structures, algorithms, and problem-solving techniques. 
                    Applied C++ techniques to build real-world applications including a GUI calculator, 
                    text editor, sorting visualizer, and maze solver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See My Projects
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;