import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, Code2, Cloud, Github as Git, Globe, Users } from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript"],
    icon: Code2,
  },
  {
    category: "Frontend Development",
    items: ["React (beginner)", "HTML", "CSS", "JavaScript"],
    icon: Globe,
  },
  {
    category: "Backend Development",
    items: ["Django", "FastAPI"],
    icon: Code2,
  },
  {
    category: "Machine Learning & AI",
    items: ["TensorFlow","Keras","Scikit-learn","PyTorch","Fine-tuning llms","Hugging Face" ,"Langchain"],
    icon: Brain,
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite"],
    icon: Database,
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker","Vercel"],
    icon: Cloud,
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
    icon: Git,
  },
  {
    category: "Soft Skills",
    items: ["Team Leadership", "Project Management", "Problem Solving", "Communication", "Time Management"],
    icon: Users,
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical & Soft Skills</h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-lg bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Icon className="h-8 w-8 mb-4 text-primary skill-icon group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}