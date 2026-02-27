import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8">

          <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-lg">
            <AvatarImage src="" alt="Profile photo" />
            <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
              DS
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>

          <p className="font-mono text-sm tracking-widest uppercase mb-4 text-[#750a0a]">DATA SCIENTIST & BI ANALYST

          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 font-serif text-secondary-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}>Insights


          <span className="text-[#510b0b]"> Insights</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}>

          I build machine learning models, analyze complex datasets, and create
          data-driven solutions that make an impact. Passionate about uncovering
          patterns hidden in data.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity bg-[#750a0a]">

            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-3 ml-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5 border-red-950" />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;