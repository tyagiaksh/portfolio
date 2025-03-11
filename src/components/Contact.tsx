import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>your.email@example.com</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};