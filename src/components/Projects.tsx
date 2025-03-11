import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';

const projects = [
  {
    title: 'Project 1',
    description: 'A beautiful web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tech: ['React', 'TypeScript', 'Tailwind'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with your actual demo video URL
  },
  {
    title: 'Project 2',
    description: 'An innovative mobile app with seamless UX',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tech: ['React Native', 'Redux', 'Node.js'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with your actual demo video URL
  },
  {
    title: 'Project 3',
    description: 'A modern e-commerce platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tech: ['Next.js', 'MongoDB', 'AWS'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with your actual demo video URL
  },
];

export const Projects: React.FC<{ inView: boolean }> = ({ inView }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
              onHoverStart={() => setSelectedProject(index)}
              onHoverEnd={() => setSelectedProject(null)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-0 left-0 w-[150%] h-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden"
                    style={{
                      transform: `translateX(${index === 2 ? '-66.67%' : index === 1 ? '-33.33%' : '0'})`,
                    }}
                  >
                    <div className="aspect-video w-full">
                      <ReactPlayer
                        url={project.videoUrl}
                        width="100%"
                        height="100%"
                        playing={true}
                        controls={true}
                        muted={true}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};