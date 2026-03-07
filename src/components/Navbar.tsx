import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Experience", "Projects", "Services", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleIntersect = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActive(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleIntersect);
    return () => window.removeEventListener("scroll", handleIntersect);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-auto" : "w-auto"
      }`}
    >
      <div className="glass-card rounded-full px-2 py-2 flex items-center gap-1">
        <a href="#home" onClick={() => scrollTo("Home")} className="neon-text font-heading font-bold text-lg px-4 tracking-tight">
          AYYAN<span className="text-foreground">.dev</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === item
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === item && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card rounded-2xl mt-2 p-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active === item
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
