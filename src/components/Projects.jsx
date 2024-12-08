import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Node.js",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Full-stack e-commerce platform with real-time features",
      image: "/project2.jpg",
      tags: ["Next.js", "Firebase", "Tailwind"]
    },
    {
      title: "Project 3",
      description: "Mobile-first responsive design portfolio",
      image: "/project3.jpg",
      tags: ["React", "Framer Motion", "Styled Components"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-darkteal rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-deepgreen">
                {/* Add your project image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-forestgreen rounded-full text-sm text-lightmint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
