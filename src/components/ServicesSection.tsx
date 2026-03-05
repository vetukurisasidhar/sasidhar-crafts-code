import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layout, Server, Coffee, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    desc: "Eager to work on scalable web applications using React, Node.js, and MongoDB.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Looking to build responsive and interactive user interfaces.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing secure REST APIs and server-side applications.",
  },
  {
    icon: Coffee,
    title: "Java Application Development",
    desc: "Developing Java-based applications and problem-solving systems.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Designing efficient MongoDB databases and backend structures.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-code text-primary text-sm mb-2">// where I'm looking to grow</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship <span className="text-gradient">Domains</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 group hover:neon-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
