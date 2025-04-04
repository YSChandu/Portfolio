// 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myPic from "/src/asserts/mee.jpg";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/3 flex justify-center md:sticky md:top-8"
            >
              <div className="w-100 h-100 relative rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={myPic}
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="w-full md:w-2/3">
              <p className="mb-6 text-lg">
                Born and raised in India, I specialize in AI-driven backend development,
                building scalable and impactful web applications. I am currently pursuing
                my B.Tech in Computer Science (AI/ML) at VIT AP University.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="mb-6">
                Starting with Java & Python, I moved into Django-based backend development,
                and then transitioned into AI/ML, reinforcement learning, and cloud-based
                deployment. My internship at Visakhapatnam Steel Plant (RINL) helped me
                refine my skills in ML deployment and backend optimization.
              </p>
              
              <p className="mb-6">
                Currently focused on fine-tuning LLMs, cloud integration, and building
                AI-powered applications that make a real difference.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}