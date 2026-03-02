import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "megaline",
    title: "Megaline Plan Recommendation System",
    description: "Classification system that analyzes customer usage patterns to recommend optimal mobile plans, achieving 88% accuracy. Helps customers find the right plan based on their actual behavior.",
    fullDescription: "Developed a classification system that analyzes customer usage patterns (call minutes, data usage, text messages) to recommend the most suitable mobile plan. The model helps Megaline's customers migrate to plans that better fit their consumption patterns, improving satisfaction and reducing misaligned subscriptions.",
    result: "88% accuracy on 2,500+ clients",
    tags: ["Python", "Scikit-learn", "Random Forest", "Streamlit", "Joblib"],
    image: "/projects/megaline.jpg",
    github: "https://github.com/RosellaAM/Megaline-Plan-Recommendation-System",
    demo: "https://megaline-plans.streamlit.app/",
    impact: "Customer Satisfaction | Plan Optimization | Usage-Based Recommendations"
  },
  {
    id: "bank-churn",
    title: "Customer Churn Prediction - Beta Bank",
    description: "Machine learning model predicting customer churn with 87% AUC-ROC. Enables proactive retention strategies and optimized resource allocation.",
    fullDescription: "Beta Bank faces the challenge of gradually losing customers. This project develops a predictive model to identify customers with high probability of leaving, maximizing F1-score (0.593 exceeding target) with comprehensive performance evaluation.",
    result: "87% AUC-ROC on 10K+ customers",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
    image: "/projects/bank-churn.jpg",
    github: "https://github.com/RosellaAM/Beta-Bank-Churn-Prediction",
    demo: "#",
    impact: "Early Risk Identification | Retention Strategy Optimization | Churn Prediction"
  },
  {
    id: "gold-recovery",
    title: "Gold Recovery Prediction Model",
    description: "Industrial ML solution predicting gold recovery rates with 12.82% sMAPE. Optimizes mineral processing through predictive modeling of purification stages.",
    fullDescription: "Machine learning solution for Zyfra that predicts gold recovery rates from raw ore during purification. Analyzes historical parameters to build predictive models for automated control systems, eliminating non-profitable parameters and maximizing yield.",
    result: "12.82% sMAPE on 50K+ mining records",
    tags: ["Python", "Random Forest", "Pandas", "NumPy", "Seaborn"],
    image: "/projects/gold-recovery.jpg",
    github: "https://github.com/RosellaAM/Gold-Recovery-Prediction-Model",
    demo: "#",
    impact: "Process Optimization | Resource Efficiency | Sustainable Mining"
  },
  {
    id: "sentiment",
    title: "Film Review Sentiment Analysis",
    description: "NLP system detecting negative movie reviews with 0.87 F1-score. Deployed for automated content filtering and community moderation.",
    fullDescription: "Natural language processing solution for Film Junky Union that automatically detects negative movie reviews from IMDB data. Implements multiple ML models for binary sentiment classification with rigorous evaluation.",
    result: "87% F1-score on 50K+ IMDB reviews",
    tags: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "XGBoost"],
    image: "/projects/sentiment.jpg",
    github: "https://github.com/RosellaAM/Movie-Review-Sentiment-Analysis",
    demo: "#",
    impact: "Content Filtering | Automated Moderation | Sentiment Insights"
  },
  {
    id: "vehicle-explorer",
    title: "Vehicle Data Explorer",
    description: "Interactive web application transforming complex vehicle data into intuitive visualizations. Deployed on Streamlit Cloud with Plotly dashboards.",
    fullDescription: "Interactive web application that transforms complex vehicle data into intuitive and actionable visualizations. Enables users of all skill levels to explore patterns, trends, and relationships in used vehicle datasets.",
    result: "", // Empty string means no bubble will show
    tags: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
    image: "/projects/vehicle-explorer.jpg",
    github: "https://github.com/RosellaAM/Vehicle-Data-Explorer",
    demo: "https://vehicle-data-explorer.streamlit.app/",
    impact: "Democratized Analytics | Interactive EDA | Production Deployment"
  }
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 400;
    const gap = 24;
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = (scrollRef.current.children[0]?.clientWidth ?? 400) + 24;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
              {t("projects.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
              {t("projects.title")}
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll("left")} 
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors bg-card" 
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors bg-card" 
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef} 
          onScroll={handleScroll} 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              className="snap-start shrink-0 w-[85vw] md:w-[450px]" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard 
                className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300" 
                intensity={6}
              >
                <div className="aspect-video bg-muted overflow-hidden relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Only show result bubble if project.result exists */}
                  {project.result && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-medium border-primary shadow-none border text-primary bg-secondary/90 backdrop-blur-sm">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.result}
                    </div>
                  )}
                  
                  {/* Metrics bubbles REMOVED - only result bubble remains */}
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-secondary-foreground hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  
                  {/* Business Impact label removed, but impact text remains with | format */}
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-secondary text-primary border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {project.demo !== "#" ? "Demo" : "Details"}
                      </a>
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
              }`}
              onClick={() => {
                if (!scrollRef.current) return;
                const cardWidth = (scrollRef.current.children[0]?.clientWidth ?? 400) + 24;
                scrollRef.current.scrollTo({ left: cardWidth * i, behavior: "smooth" });
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;