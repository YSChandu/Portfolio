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
              <p className="text-muted-foreground mb-2">
                Built a <strong>web-based Yard Management System</strong> using Django to streamline yard operations at RINL.
                Developed and deployed the official <strong>RINL website</strong> to enhance user interaction and operational visibility.
                You can view the live project&nbsp;
                <a
                  href="https://rinl-django.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  here
                </a>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Designed and implemented backend services using Django for efficient data handling.</li>
                <li>Created interactive frontend interfaces to manage yard workflows and user communication.</li>
                <li>Integrated database models to support real-time asset and task tracking.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Key Achievements</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Digitalized yard management workflows, replacing manual processes.</li>
                <li>Improved user experience and access to critical yard information via the website.</li>
                <li>Successfully delivered a fully functional web app within a limited internship period.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Django",
                  "Backend Development",
                  "Web Development",
                  "Project Management",
                  "Team Collaboration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
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
