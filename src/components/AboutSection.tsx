import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  { school: "AP Shah Institute of Technology (APSIT)", degree: "B.Tech in Information Technology", period: "2024 – Present", icon: GraduationCap },
  { school: "Vidyalankar Jr. College", degree: "HSC — 80%", period: "2022 – 2024", icon: BookOpen },
  { school: "Michael High School", degree: "SSC — 93.20%", period: "2022", icon: BookOpen },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <p className="terminal-text mb-2">{"// about"}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">
            About <span className="neon-text">&</span> Education
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div variants={fadeUp} custom={0} className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm Ayyan Iqbal Muqadam, a passionate full-stack developer with a deep interest in
                cybersecurity and cloud computing. I build things that bridge the gap between
                powerful backend systems and beautiful, intuitive interfaces.
              </p>
              <div className="glass-card rounded-xl p-6 neon-border">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-primary" size={24} />
                  <h3 className="font-heading font-semibold text-lg">Achievement Spotlight</h3>
                </div>
                <p className="text-muted-foreground">
                  <span className="neon-text font-semibold">Top 5% Ranker</span> in NPTEL Database Management Systems Examination — demonstrating deep expertise in data architecture.
                </p>
              </div>
            </motion.div>

            {/* Education timeline */}
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  variants={fadeUp}
                  custom={i + 1}
                  className="glass-card rounded-xl p-6 hover:neon-border transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <edu.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">{edu.school}</h3>
                      <p className="text-primary text-sm font-mono">{edu.degree}</p>
                      <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
