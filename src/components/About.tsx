import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I'm a passionate developer with extensive experience in building modern web applications.
              My journey in tech started 1 years ago, and I've been creating innovative solutions ever since.
            </p>
            <p>
              I specialize in full-stack development using modern technologies like React, Node.js, and TypeScript.
              I'm always excited to learn new technologies and tackle challenging projects.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};