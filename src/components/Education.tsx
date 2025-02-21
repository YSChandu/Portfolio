import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science (with Specialization in Artificial Intelligence & Machine Learning)",
    institution: "VIT AP University",
    year: "2021 - 2025",
    grade : "CGPA: 8.01",
    icon: "🎓"
  },
  {
    degree: "Intermediate Education",
    institution: "Srichaitanya Junior College",
    year: "2019 - 2021",
    grade : "Percentage: 96.7%",
    icon: "🏫"
  },
  {
    degree: "Secondary Education",
    institution: "Bhashyam High School",
    year: "2018 - 2019",
    grade : "CGPA: 10",
    icon: "🏫"
  }
];

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2" />
            
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:w-1/2' : 'md:pl-12 md:w-1/2'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'
                } w-6 h-6 bg-primary rounded-full transform -translate-y-1/2`} />
                
                <div className="bg-card p-10 rounded-lg shadow-lg">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.year}</p>
                  <p className="text-sm">{item.grade}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}