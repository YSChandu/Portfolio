import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Artificial Intelligence A-Z 2024: Build 7 AI + LLM & ChatGPT",
    issuer: "Udemy",
    date: "2024",
    description: "Comprehensive AI course covering Large Language Models, ChatGPT applications, and AI development.",
    skills: ["Q-Learning","Deep-Q-Learning", "LLM fine tuning", "A3C Algorithm", "Hugging Face", "LLM Fine-Tuning"],
    link: "https://drive.google.com/file/d/1uIpno6m21K_JJS_BsQ3O1OK9_WN8l3OF/view"
  },
  {
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
    issuer: "Udemy",
    date: "2024",
    description: "Hands-on training in Machine Learning using Python and R, integrating AI techniques with ChatGPT.",
    skills: ["Machine Learning", "Python", "Fine tuning","Hyper-parameter tuning", "NLP" ,"Deep Learning"],
    link: "https://drive.google.com/file/d/1XYBisLvvz1MFjlUbe850J2ojEcXSQGjp/view"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "2024",
    description: "Fundamentals of Generative AI, including applications in automation, text generation, and AI workflows.",
    skills: ["Generative AI", "AI Automation", "LLMs" ,"Current trends in AI"],
    link: "https://drive.google.com/file/d/14Qzrecxh28EKY4KbqbnBJoXWsDYGTgXk/view"
  },
  {
    title: "RINL Trainee",
    issuer: "Rashtriya Ispat Nigam Limited (RINL)",
    date: "2024",
    description: "Internship focused on backend development and ML deployment in an industrial environment.",
    skills: ["Django", "Machine Learning", "Backend Development" , "html", "css"],
    link: "https://drive.google.com/file/d/1uR91SCZkXJmPjXQ4jVGUOuuBUx49ZzdC/view"
  }
];


export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <Award className="h-8 w-8 text-primary" />
          Certifications
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              <h3 className="text-lg font-semibold mb-2 pr-8">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
              <p className="text-sm mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}