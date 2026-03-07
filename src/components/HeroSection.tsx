import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Download } from "lucide-react";
import Scene3D from "./Scene3D";
import ayyanPhoto from "@/assets/ayyan-photo.jpeg";

const roles = [
  "Full-Stack Developer",
  "AWS Cloud Enthusiast",
  "Cybersecurity Specialist",
  "Problem Solver",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <p className="terminal-text">~/ayyan-portfolio $</p>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              <span className="text-foreground">I'm </span>
              <span className="neon-text">Ayyan</span>
              <br />
              <span className="text-foreground">Iqbal Muqadam</span>
            </h1>

            <div className="h-8">
              <span className="neon-text font-mono text-lg md:text-xl">
                {text}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
              A builder at heart — 2nd-year IT student at APSIT, specializing in bridging robust
              backend logic with intuitive frontend design, with a heavy focus on security and
              cloud scalability.
            </p>

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2">
              <span className="pulse-dot" />
              <span className="neon-text font-mono text-sm">Available for hire</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="neon-btn-filled rounded-lg flex items-center gap-2">
                VIEW MY WORK <ChevronDown size={16} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn rounded-lg flex items-center gap-2"
              >
                <Download size={16} /> DOWNLOAD RESUME
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/AyyIM24"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-xl hover:neon-border transition-all duration-300"
              >
                <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/ayyan-muqadam"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-xl hover:neon-border transition-all duration-300"
              >
                <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <div className="gradient-line flex-1" />
              <span className="terminal-text hidden md:inline">muqadam.ayyan242@gmail.com</span>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center pt-8 opacity-50"
            >
              <span className="terminal-text text-xs mb-2">SCROLL</span>
              <ChevronDown size={16} className="text-primary" />
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border p-1">
                <img
                  src={ayyanPhoto}
                  alt="Ayyan Iqbal Muqadam"
                  className="w-full h-full object-cover object-top rounded-full scale-[0.85]"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-primary/5 animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
