import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_8t2ahle",
        "template_lhw4so6",
        formRef.current,
        "DYuDQBG5yXiC9KexU"
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-muted/50 border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-mono text-sm outline-none transition-all duration-300 ${
      focused === field
        ? "border-primary shadow-[0_0_15px_hsl(180_100%_50%/0.2)]"
        : "border-border hover:border-primary/30"
    }`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <p className="terminal-text mb-2">{"// contact"}</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Get In <span className="neon-text">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Have a project in mind? Let's build something amazing together.
        </p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 space-y-6 hover:neon-border transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="terminal-text block mb-2">name_</label>
              <input
                name="from_name"
                required
                placeholder="John Doe"
                className={inputClass("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                maxLength={100}
              />
            </div>
            <div>
              <label className="terminal-text block mb-2">email_</label>
              <input
                name="from_email"
                type="email"
                required
                placeholder="john@example.com"
                className={inputClass("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                maxLength={255}
              />
            </div>
          </div>

          <div>
            <label className="terminal-text block mb-2">subject_</label>
            <input
              name="subject"
              required
              placeholder="Project Inquiry"
              className={inputClass("subject")}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused("")}
              maxLength={200}
            />
          </div>

          <div>
            <label className="terminal-text block mb-2">message_</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={inputClass("message") + " resize-none"}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              maxLength={2000}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="neon-btn-filled rounded-lg flex items-center gap-2 disabled:opacity-50"
          >
            {sent ? (
              <>
                <CheckCircle size={16} /> MESSAGE SENT!
              </>
            ) : sending ? (
              "SENDING..."
            ) : (
              <>
                <Send size={16} /> SEND MESSAGE
              </>
            )}
          </button>
        </motion.form>

        <div className="flex items-center gap-3 mt-8 justify-center">
          <Mail size={16} className="text-primary" />
          <span className="terminal-text">muqadam.ayyan242@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
