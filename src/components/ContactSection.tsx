import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FileText, label: "Resume", href: "#" },
];

const ContactSection = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Interested in collaborating on a data science project or have a role 
            that fits? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-lg text-sm text-secondary-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </motion.div>

        <motion.p
          className="mt-16 text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {new Date().getFullYear()} · Built with passion for data
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
