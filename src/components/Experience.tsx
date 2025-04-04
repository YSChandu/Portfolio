import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";

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
            <p className="text-muted-foreground mb-2">Project Trainee | 09/2023 – 10/2023</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Project: Yard Management System</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed and deployed ML models to optimize yard management operations and decision-making.</li>
                <li>Implemented backend services using Django, improving system functionality and efficiency.</li>
                <li>Enhanced resource allocation by integrating predictive analytics for better decision-making.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Key Achievements</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Automated manual data processing, reducing workload and improving accuracy.</li>
                <li>Optimized real-time tracking and monitoring of yard assets, improving operational insights.</li>
                <li>Successfully deployed a scalable ML model, enhancing system efficiency.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Django",
                  "Backend Development",
                  "Project Management",
                  "Team Management",
                ].map((skill) => (
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
