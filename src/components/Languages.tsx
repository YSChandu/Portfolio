import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe } from 'lucide-react';

const languages = [
  {
    name: "English",
    level: "Fluent",
    flag: "🇬🇧"
  },
  {
    name: "Telugu",
    level: "Native",
    flag: "🇮🇳"
  },
  {
    name: "Hindi",
    level: "Proficient",
    flag: "🇮🇳"
  }
];

export function Languages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <Globe className="h-8 w-8 text-primary" />
          Languages
        </h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4 block">{language.flag}</span>
              <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
              <p className="text-muted-foreground">{language.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}