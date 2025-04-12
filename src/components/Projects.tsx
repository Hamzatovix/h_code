import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Task Manager',
      description: 'Веб-приложение для управления задачами и книгами с календарем и темной темой.',
      link: 'https://your-task-manager.vercel.app',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Скоро будет',
      description: 'Новый проект в разработке.',
      link: '#',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Мои проекты
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Посмотреть
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;