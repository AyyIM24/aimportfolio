import { motion } from "framer-motion";
import { Shield, Network, Code2, Cloud, Trophy } from "lucide-react";

const timeline = [
  { icon: Shield, category: "Cybersecurity", title: "Palo Alto Networks — Security Intern", desc: "Network security and firewall configuration internship." },
  { icon: Shield, category: "Cybersecurity", title: "Fortinet — Network Security Intern", desc: "Hands-on experience with enterprise-grade network security solutions." },
  { icon: Network, category: "Networking", title: "Cisco Networking Essentials", desc: "Certified in core networking concepts and protocols." },
  { icon: Code2, category: "Development", title: "Java Full-Stack Development", desc: "Comprehensive training in Spring Boot, REST APIs, and React." },
  { icon: Code2, category: "Development", title: "Android Development", desc: "Building native mobile applications with modern Android tools." },
  { icon: Network, category: "Certification", title: "Cisco Python Essentials", desc: "Certified in Python programming fundamentals." },
  { icon: Cloud, category: "Cloud", title: "AWS Cloud & Game Development", desc: "Cloud infrastructure and serverless architecture on AWS." },
  { icon: Trophy, category: "Academic", title: "Scholarship & Dyanpeeth Exam", desc: "Recognized for academic excellence with honors and scholarships." },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <p className="terminal-text mb-2">{"// experience"}</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          Expertise <span className="neon-text">Timeline</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(180_100%_50%/0.6)] z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card rounded-xl p-5 hover:neon-border transition-all duration-500 group">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={16} className="text-primary" />
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{item.category}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
