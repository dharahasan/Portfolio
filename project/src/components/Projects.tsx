import React, { useEffect, useRef, useState } from 'react';
import { Code, ExternalLink, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

  const projects = [
    {
      id: 1,
      title: "Fitness Club Management Framework",
      description: "Created a comprehensive C program with modules for creating, displaying, removing, and editing club members. Implemented file handling for efficient data storage and management.",
      date: "November 2024",
      technologies: ["C", "File Handling"],
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Enhanced a web application for tracking and categorizing expenses with secure user authentication. Designed an intuitive expense entry form and enabled dashboard customization with logos, custom domains, and external sharing.",
      date: "April 2024",
      technologies: ["Node.js", "Express.js", "HTML", "CSS", "MongoDB"],
      image: "https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "GUI Calculator",
      description: "Developed an interactive calculator application with a graphical user interface. Implemented arithmetic operations and a clean, user-friendly design.",
      date: "June 2024",
      technologies: ["C++", "GUI Programming"],
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Sorting Visualizer",
      description: "Created an interactive tool to visualize various sorting algorithms including bubble sort, merge sort, quick sort, and selection sort. Helps in understanding the time complexity and efficiency of different sorting techniques.",
      date: "June 2024",
      technologies: ["C++", "Data Structures", "Algorithms"],
      image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const isActive = activeProject === project.id;
    
    return (
      <div 
        className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 
          ${index % 2 === 0 ? 'lg:translate-x-5' : 'lg:-translate-x-5'} 
          ${isActive ? 'scale-105 z-10' : 'scale-100'}`}
        onMouseEnter={() => setActiveProject(project.id)}
        onMouseLeave={() => setActiveProject(null)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <div className="flex items-center text-sm mb-2">
                <Calendar size={16} className="mr-2" />
                {project.date}
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-blue-600 dark:text-blue-400 flex items-center">
              <Code size={20} className="mr-2" />
              <span>Project Details</span>
            </div>
            <button className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on, showcasing my skills in different technologies
            and problem domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            These projects demonstrate my ability to develop complete solutions across different domains and technologies.
            Each one has helped me grow my skills in problem-solving, software architecture, and user experience design.
          </p>
          <a 
            href="https://github.com/dharahasan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See More on GitHub
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;