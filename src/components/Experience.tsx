import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          Professional Experience
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-6 bg-card rounded-lg shadow-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold mb-2">Visakhapatnam Steel Plant (RINL)</h3>
            <p className="text-muted-foreground mb-4">Machine Learning Intern</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Project: Yard Management System</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed an ML-powered system for optimizing yard operations and inventory management</li>
                <li>Implemented predictive analytics for resource allocation and workflow optimization</li>
                <li>Built a Django-based dashboard for real-time monitoring and analytics</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Key Achievements</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Reduced manual data entry time by 60% through automation</li>
                <li>Improved resource allocation efficiency by 40%</li>
                <li>Implemented real-time tracking system for yard assets</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {["Team Leadership", "Project Management", "Problem Solving", "Communication", "Time Management"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}