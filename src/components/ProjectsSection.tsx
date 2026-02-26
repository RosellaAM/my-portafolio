import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built an ensemble ML model achieving 94% accuracy predicting customer churn using gradient boosting and feature engineering on 50K+ records.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    github: "#",
    demo: "#",
  },
  {
    title: "NLP Sentiment Analyzer",
    description:
      "Fine-tuned a transformer model for real-time sentiment analysis on product reviews with 91% F1-score, deployed via REST API.",
    tags: ["PyTorch", "Transformers", "FastAPI", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Time-series forecasting pipeline with ARIMA & Prophet models, visualized through an interactive dashboard for business stakeholders.",
    tags: ["Python", "Prophet", "Plotly", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Image Classification Pipeline",
    description:
      "End-to-end deep learning pipeline for medical image classification using CNNs with data augmentation and transfer learning.",
    tags: ["TensorFlow", "Keras", "OpenCV", "AWS"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-glow/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded bg-secondary text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
