import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
      title: "Semantic Book Recommendation Using LLMs and Vector Search",
      description: "Developed a semantic book recommendation system leveraging large language models (LLMs) and vector search techniques. Processed and cleaned text data, built a vector database, and implemented book recommendations using similarity search. Integrated LangChain for efficient text splitting and retrieval. Additionally, explored zero-shot text classification and sentiment analysis to enhance recommendation quality. Designed a user-friendly Gradio dashboard for seamless interaction.",
      tech: ["LLMs", "Vector Search", "LangChain", "Zero-Shot Classification", "Sentiment Analysis", "Gradio"],
      github: "https://github.com/YSChandu/semantic_book_recommender"
  },
  {
    title: "Advanced Reinforcement Learning and LLM Fine-Tuning",
    description: "Developed and fine-tuned reinforcement learning models, including Q-learning, Deep Q-learning, and the A3C algorithm, to solve complex decision-making problems. Additionally, fine-tuned a large language model using the Hugging Face framework for domain-specific applications. Optimized model performance and tested solutions in real-world scenarios.",
    tech: ["Reinforcement Learning", "Deep Q-Learning", "A3C Algorithm", "Hugging Face", "LLM Fine-Tuning"],
    github: "https://github.com/yourusername/rl-llm-finetuning"
  },
  {
    title: "MindCare – AI-Driven Mental Health Wellness Platform",
    description: "Developed an AI-powered web platform promoting mental health awareness and care. Features include a chatbot to assist users, personalized mental health diagnosis quizzes, and curated resources such as yoga exercises, self-help tools, and music therapy. The platform is designed to reduce stigma and provide early intervention for mental health issues.",
    tech: ["Django", "NLP", "OpenAI APIs", "Deep Learning", "Python"],
    github: "https://github.com/yourusername/mindcare",
    demo: "https://mindcare-demo.com"
  },
  {
    title: "Dog Breed Classification Using Deep Learning",
    description: "Implemented a Convolutional Neural Network (CNN)-based classification system to identify dog breeds from images using GoogleNet and data augmentation techniques. The model enhances accuracy for applications in canine healthcare, pet adoption, and animal welfare.",
    tech: ["CNN", "GoogleNet", "TensorFlow", "Deep Learning"],
    github: "https://github.com/yourusername/dog-breed-classification"
  },
  {
    title: "Accident Prediction Using US Accidents Dataset",
    description: "Utilized the US Accidents dataset from Kaggle to build an accident prediction model using multiple machine learning algorithms, including Decision Trees, Random Forest, XGBoost, SVM, and Neural Networks. Analyzed key accident factors like weather, road conditions, and traffic density to improve road safety insights.",
    tech: ["Machine Learning", "Random Forest", "XGBoost", "SVM", "Neural Networks", "Pandas", "Scikit-Learn"],
    github: "https://github.com/yourusername/accident-prediction"
  }
];


export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
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