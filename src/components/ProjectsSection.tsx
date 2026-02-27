import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built an ensemble ML model achieving 94% accuracy predicting customer churn using gradient boosting and feature engineering on 50K+ records.",
    result: "94% accuracy on 50K+ records",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "NLP Sentiment Analyzer",
    description:
      "Fine-tuned a transformer model for real-time sentiment analysis on product reviews with 91% F1-score, deployed via REST API.",
    result: "91% F1-score, real-time inference",
    tags: ["PyTorch", "Transformers", "FastAPI", "Docker"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Time-series forecasting pipeline with ARIMA & Prophet models, visualized through an interactive dashboard for business stakeholders.",
    result: "30% improvement in forecast accuracy",
    tags: ["Python", "Prophet", "Plotly", "SQL"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "Image Classification Pipeline",
    description:
      "End-to-end deep learning pipeline for medical image classification using CNNs with data augmentation and transfer learning.",
    result: "97% classification accuracy",
    tags: ["TensorFlow", "Keras", "OpenCV", "AWS"],
    image: "/placeholder.svg",
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

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="aspect-video md:aspect-auto bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Result Highlight */}
                    <div className="flex items-center gap-2 mb-4 bg-primary/10 text-primary rounded-md px-3 py-2">
                      <TrendingUp className="w-4 h-4 shrink-0" />
                      <span className="font-mono text-sm font-medium">
                        {project.result}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-1 rounded bg-secondary text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button asChild variant="default" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;