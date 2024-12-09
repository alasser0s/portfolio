import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <motion.div
        className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden shadow-xl"
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-[#5454D4]/20 text-[#5454D4] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#5454D4] text-white rounded-lg font-medium hover:bg-[#4545B0] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#5454D4] text-[#5454D4] rounded-lg font-medium hover:bg-[#5454D4]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Framer Motion featuring 3D animations and smooth transitions.",
      image: "path-to-portfolio-image",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "path-to-ecommerce-image",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-[#0F0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
