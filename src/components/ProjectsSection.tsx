import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack E-Commerce Platform",
    desc: "A complete e-commerce platform allowing users to browse products, add items to cart, and place orders with user authentication and order processing.",
    tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Product catalog and search",
      "Shopping cart functionality",
      "REST API backend",
      "Admin dashboard",
      "Responsive UI",
    ],
    github: "https://github.com/vetukurisasidhar",
  },
  {
    title: "Online Learning Platform",
    desc: "An online platform for browsing courses, enrolling in programs, and tracking learning progress with student and instructor interfaces.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Course browsing system",
      "Video lecture pages",
      "Course modules and lessons",
      "REST APIs for management",
      "Responsive design",
    ],
    github: "https://github.com/vetukurisasidhar",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-code text-primary text-sm mb-2">// my work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl overflow-hidden group"
            >
              {/* Gradient header */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-code px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
