import { motion } from 'framer-motion';
import { useState } from 'react';
import project1Image from '../assets/images/projects/project1.jpg';
import { useTranslation } from 'react-i18next';

interface Project {
  key: string;
  link: string;
  image: string;
  tech: string[];
}

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      key: 'task_manager',
      link: 'https://task-manager-opal-eight.vercel.app/',
      image: project1Image,
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      key: 'portfolio',
      link: '#',
      image: '/assets/images/task-manager.webp',
      tech: ['React', 'TypeScript', 'Framer Motion'],
    },
    {
      key: 'draft',
      link: '#',
      image: '/assets/images/placeholder.jpg',
      tech: ['React', 'TypeScript', 'Framer Motion'],
    },
  ];

  return (
    <section id="projects" className="pt-20 pb-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
          {t('projects.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col max-w-sm w-full h-[450px]"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={`${t(`projects.${project.key}.title`)} screenshot`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/400/300?random=1';
                }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow overflow-hidden">
                  {t(`projects.${project.key}.description`)}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded hover:from-blue-600 hover:to-purple-700 transition mt-auto w-fit"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('projects.view')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              {t(`projects.${selectedProject.key}.title`)}
            </h3>
            <img
              src={selectedProject.image}
              alt={`${t(`projects.${selectedProject.key}.title`)} screenshot`}
              className="w-full h-40 object-cover rounded mb-4"
              onError={(e) => {
                e.currentTarget.src = 'https://picsum.photos/400/300?random=1';
              }}
            />
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t(`projects.${selectedProject.key}.details`)}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {t('projects.task_manager.go_to')}
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t('projects.task_manager.close')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;