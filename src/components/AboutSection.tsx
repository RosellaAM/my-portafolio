import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const AboutSection = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TiltCard
            className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            intensity={4}
          >
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              I'm a results-driven Data Professional with hands on experience in data science and analytics, from developing end-to-end machine learning pipelines to extracting actionable insights through exploratory analysis and data visualization. I combine technical expertise in Python, SQL, and predictive modeling with a strategic mindset to transform complex data into business solutions.
              I specialize in building interactive dashboards and telling compelling data stories that bridge the gap between technical findings and strategic decision-making. My goal is to deliver immediate, measurable value by leveraging advanced analytics and data science to drive impact from day one.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
