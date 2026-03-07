import { motion } from "framer-motion";
import { Code2, Shield, Cloud } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications using React, Java Spring Boot, Node.js, and modern databases. Pixel-perfect UI with robust backends.",
  },
  {
    icon: Shield,
    title: "Secure Network Architecture",
    desc: "Firewall configuration, network hardening, and security audits using Palo Alto and Fortinet enterprise solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure (AWS)",
    desc: "Scalable cloud architecture, serverless functions, CI/CD pipelines, and infrastructure-as-code on Amazon Web Services.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <p className="terminal-text mb-2">{"// services"}</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          What I <span className="neon-text">Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 group hover:neon-border transition-all duration-500 text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
