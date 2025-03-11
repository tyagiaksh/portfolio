import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovation Corp',
    position: 'Senior Software Engineer',
    period: '2022 - Present',
    description: 'Led development of enterprise-scale applications using React and Node.js. Mentored junior developers and implemented best practices.',
    achievements: [
      'Reduced application load time by 40%',
      'Implemented CI/CD pipeline',
      'Led team of 5 developers'
    ]
  },
  {
    company: 'Digital Solutions Inc',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple web applications using modern JavaScript frameworks.',
    achievements: [
      'Built responsive web applications',
      'Integrated third-party APIs',
      'Improved code coverage to 90%'
    ]
  },
  {
    company: 'StartUp Tech',
    position: 'Junior Developer',
    period: '2018 - 2020',
    description: 'Started career as a junior developer working on frontend development with React.',
    achievements: [
      'Developed reusable component library',
      'Collaborated with design team',
      'Participated in code reviews'
    ]
  }
];

export const Experience: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Building2 className="w-4 h-4" />
                    <span>{experience.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {experience.description}
              </p>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};