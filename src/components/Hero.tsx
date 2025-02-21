import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Yarrapothu Sai Chandu
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          AI/ML Enthusiast | Full Stack Developer
        </p>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Specializing in AI-driven backend development, building scalable applications
          with expertise in deep learning, LLM fine-tuning, and cloud deployment.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <a href="#projects" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View Projects
          </a>
          <a href="/src/asserts/resume.pdf" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors">
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com/YSChandu" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/yarrapothu-sai-chandu-ab45b4244/" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="yarrapothusaichandu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}