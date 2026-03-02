import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Floating parallax orbs */}
      <FloatingOrb className="w-72 h-72 bg-primary/30 -top-20 -left-20" delay={0} />
      <FloatingOrb className="w-96 h-96 bg-primary/20 -bottom-32 -right-32" delay={2} />
      <FloatingOrb className="w-48 h-48 bg-primary/25 top-1/3 right-1/4" delay={4} />

      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-sm" />
            <Avatar className="w-full h-full relative border-2 border-primary/30 shadow-2xl shadow-primary/10">
              <AvatarImage src="/profile-photo.jpg" alt="Rosella Astrain" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-primary/5 text-primary">
                <Mail className="w-10 h-10 text-primary/40" />
              </AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="font-mono text-sm tracking-widest uppercase mb-4 text-secondary-foreground">DATA SCIENTIST & BI ANALYST</p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 font-serif text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-primary">Rosella Astrain</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I build machine learning models, analyze complex datasets, and create data-driven solutions that make an impact. Passionate about uncovering patterns hidden in data.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#projects" className="inline-flex items-center gap-2 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity bg-primary">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-3 ml-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
