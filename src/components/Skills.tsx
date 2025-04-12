import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg' },
    { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.svgporn.com/logos/tailwindcss.svg' },
    { name: 'TypeScript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Мои навыки
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              <span className="text-gray-700 font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;