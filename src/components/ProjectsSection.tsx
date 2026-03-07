import { motion } from "framer-motion";
import { ExternalLink, Brain, Shield, ShoppingCart } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "AI Resume Optimizer",
    desc: "A cutting-edge tool using AI to analyze and optimize resumes, helping students land their dream jobs with data-driven suggestions.",
    tags: ["AI/ML", "React", "Python", "NLP"],
  },
  {
    icon: Shield,
    title: "APSIT S.A.F.E.",
    desc: "A campus-wide lost and found portal built to solve real problems — connecting students with their lost belongings securely.",
    tags: ["Full-Stack", "Node.js", "MongoDB", "Auth"],
  },
  {
    icon: ShoppingCart,
    title: "seeandbuy",
    desc: "A complete e-commerce platform with product management, cart, checkout, and payment integration built with enterprise-grade tech.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <p className="terminal-text mb-2">{"// projects"}</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          Featured <span className="neon-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 group hover:neon-border transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <project.icon size={28} />
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-heading font-bold text-xl mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
