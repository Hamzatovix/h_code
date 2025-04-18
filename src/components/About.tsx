import { motion } from 'framer-motion';

function About() {
  const skills = [
    { name: 'HTML', icon: 'https://cdn.svgporn.com/logos/html-5.svg', level: 85 },
    { name: 'CSS', icon: 'https://cdn.svgporn.com/logos/css-3.svg', level: 85 },
    { name: 'JavaScript', icon: 'https://cdn.svgporn.com/logos/javascript.svg', level: 65 },
    { name: 'React', icon: 'https://cdn.svgporn.com/logos/react.svg', level: 60 },
    { name: 'Node.js', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', level: 60 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
        >
          <img
            src="src\assets\images\self.jpg"
            alt="[Твоё Имя] - фото"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I am a frontend developer with two years of experience building responsive and interactive
            web applications. I enjoy writing clean and efficient code, as well as creating
            user-friendly user experiences. My latest project was a task manager with a calendar and
            dark mode support.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-16 h-16 mb-4"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    console.error(`Failed to load icon: ${skill.icon}`);
                    e.currentTarget.src = 'https://picsum.photos/64/64?random=1';
                  }}
                />
                <span className="text-gray-800 dark:text-gray-100 text-lg font-medium">
                  {skill.name}
                </span>
                <div className="w-24 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;