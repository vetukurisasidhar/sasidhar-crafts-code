import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const focuses = [
    { icon: Code2, label: "Full Stack Web Dev" },
    { icon: Rocket, label: "Backend Development" },
    { icon: Lightbulb, label: "Modern Frameworks" },
    { icon: GraduationCap, label: "Problem Solving" },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-code text-primary text-sm mb-2">// get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Code block style about */}
            <div className="glass rounded-xl p-6 font-code text-sm leading-relaxed">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-accent">const</span>{" "}
                <span className="text-primary">developer</span> = {"{"}
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-accent">name</span>:{" "}
                <span className="text-green-400">"V. Sasidhar"</span>,
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-accent">role</span>:{" "}
                <span className="text-green-400">"Full Stack Developer"</span>,
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-accent">status</span>:{" "}
                <span className="text-green-400">"Seeking Internships"</span>,
              </p>
              <p className="pl-4 text-muted-foreground">
                <span className="text-accent">passion</span>:{" "}
                <span className="text-green-400">"Building scalable apps"</span>,
              </p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a 3rd-year Computer Science Engineering student at Mohan Babu University (2023–2027).
              A passionate developer who enjoys coding and analyzing logical problems. As a fresher seeking
              internship opportunities, I aim to build scalable software solutions and contribute to innovative IT projects.
            </p>

            {/* Education card */}
            <div className="glass rounded-xl p-4 neon-border">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-primary" size={20} />
                <h4 className="font-semibold">B.Tech Computer Science Engineering</h4>
              </div>
              <p className="text-muted-foreground text-sm">Mohan Babu University • 2023 – 2027</p>
            </div>

            {/* Focus areas */}
            <div className="grid grid-cols-2 gap-3">
              {focuses.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <f.icon size={16} className="text-primary" />
                  {f.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
