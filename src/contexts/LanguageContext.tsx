import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.about": { en: "About", es: "Sobre Mí" },
  "nav.skills": { en: "Skills", es: "Habilidades" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.language": { en: "Language", es: "Idioma" },

  // Hero
  "hero.role": { en: "DATA SCIENTIST & BI ANALYST", es: "CIENTÍFICA DE DATOS & ANALISTA BI" },
  "hero.description": {
    en: "I build machine learning models, analyze complex datasets, and create data-driven solutions that make an impact. Passionate about uncovering patterns hidden in data.",
    es: "Construyo modelos de machine learning, analizo conjuntos de datos complejos y creo soluciones basadas en datos que generan impacto. Apasionada por descubrir patrones ocultos en los datos.",
  },
  "hero.viewProjects": { en: "View Projects", es: "Ver Proyectos" },

  // About
  "about.subtitle": { en: "Who I Am", es: "Quién Soy" },
  "about.title": { en: "About Me", es: "Sobre Mí" },
  "about.description": {
    en: "I'm a results-driven Data Professional with hands on experience in data science and analytics, from developing end-to-end machine learning pipelines to extracting actionable insights through exploratory analysis and data visualization. I combine technical expertise in Python, SQL, and predictive modeling with a strategic mindset to transform complex data into business solutions. I specialize in building interactive dashboards and telling compelling data stories that bridge the gap between technical findings and strategic decision-making. My goal is to deliver immediate, measurable value by leveraging advanced analytics and data science to drive impact from day one.",
    es: "Soy una profesional de datos orientada a resultados con experiencia práctica en ciencia de datos y analítica, desde el desarrollo de pipelines de machine learning de extremo a extremo hasta la extracción de insights accionables mediante análisis exploratorio y visualización de datos. Combino experiencia técnica en Python, SQL y modelado predictivo con una mentalidad estratégica para transformar datos complejos en soluciones de negocio. Me especializo en construir dashboards interactivos y contar historias de datos convincentes que cierran la brecha entre hallazgos técnicos y toma de decisiones estratégicas. Mi objetivo es entregar valor inmediato y medible aprovechando analítica avanzada y ciencia de datos para generar impacto desde el primer día.",
  },

  // Skills
  "skills.subtitle": { en: "Tech Stack", es: "Stack Tecnológico" },
  "skills.title": { en: "Skills & Tools", es: "Habilidades y Herramientas" },
  "skills.languages": { en: "Languages", es: "Lenguajes" },
  "skills.mlai": { en: "ML & AI", es: "ML & IA" },
  "skills.datatools": { en: "Data Tools", es: "Herramientas de Datos" },
  "skills.visualization": { en: "Visualization", es: "Visualización" },
  "skills.deployment": { en: "Deployment", es: "Despliegue" },

  // Projects
  "projects.subtitle": { en: "Portfolio", es: "Portafolio" },
  "projects.title": { en: "Featured Projects", es: "Proyectos Destacados" },
  "projects.github": { en: "GitHub", es: "GitHub" },
  "projects.demo": { en: "Live Demo", es: "Demo en Vivo" },

  // Project titles & descriptions
  "project.1.title": { en: "Customer Churn Prediction", es: "Predicción de Abandono de Clientes" },
  "project.1.description": {
    en: "Built an ensemble ML model achieving 94% accuracy predicting customer churn using gradient boosting and feature engineering on 50K+ records.",
    es: "Construí un modelo ML ensemble alcanzando 94% de precisión prediciendo abandono de clientes usando gradient boosting e ingeniería de características en 50K+ registros.",
  },
  "project.1.result": { en: "94% accuracy on 50K+ records", es: "94% precisión en 50K+ registros" },

  "project.2.title": { en: "NLP Sentiment Analyzer", es: "Analizador de Sentimientos NLP" },
  "project.2.description": {
    en: "Fine-tuned a transformer model for real-time sentiment analysis on product reviews with 91% F1-score, deployed via REST API.",
    es: "Afiné un modelo transformer para análisis de sentimientos en tiempo real en reseñas de productos con 91% F1-score, desplegado via API REST.",
  },
  "project.2.result": { en: "91% F1-score, real-time inference", es: "91% F1-score, inferencia en tiempo real" },

  "project.3.title": { en: "Sales Forecasting Dashboard", es: "Dashboard de Pronóstico de Ventas" },
  "project.3.description": {
    en: "Time-series forecasting pipeline with ARIMA & Prophet models, visualized through an interactive dashboard for business stakeholders.",
    es: "Pipeline de pronóstico de series temporales con modelos ARIMA y Prophet, visualizado a través de un dashboard interactivo para stakeholders del negocio.",
  },
  "project.3.result": { en: "30% improvement in forecast accuracy", es: "30% mejora en precisión de pronóstico" },

  "project.4.title": { en: "Image Classification Pipeline", es: "Pipeline de Clasificación de Imágenes" },
  "project.4.description": {
    en: "End-to-end deep learning pipeline for medical image classification using CNNs with data augmentation and transfer learning.",
    es: "Pipeline de deep learning de extremo a extremo para clasificación de imágenes médicas usando CNNs con aumento de datos y transfer learning.",
  },
  "project.4.result": { en: "97% classification accuracy", es: "97% precisión de clasificación" },

  "project.5.title": { en: "Anomaly Detection System", es: "Sistema de Detección de Anomalías" },
  "project.5.description": {
    en: "Real-time anomaly detection engine for IoT sensor data using autoencoders and statistical methods, reducing false positives by 60%.",
    es: "Motor de detección de anomalías en tiempo real para datos de sensores IoT usando autoencoders y métodos estadísticos, reduciendo falsos positivos en 60%.",
  },
  "project.5.result": { en: "60% fewer false positives", es: "60% menos falsos positivos" },

  "project.6.title": { en: "Recommendation Engine", es: "Motor de Recomendaciones" },
  "project.6.description": {
    en: "Collaborative filtering recommendation system for e-commerce, combining matrix factorization with deep learning for personalized suggestions.",
    es: "Sistema de recomendación por filtrado colaborativo para e-commerce, combinando factorización de matrices con deep learning para sugerencias personalizadas.",
  },
  "project.6.result": { en: "25% increase in engagement", es: "25% aumento en engagement" },

  // Contact
  "contact.subtitle": { en: "Get In Touch", es: "Contáctame" },
  "contact.title": { en: "Let's Work Together", es: "Trabajemos Juntos" },
  "contact.description": {
    en: "Interested in collaborating on a data science project or have a role that fits? I'd love to hear from you.",
    es: "¿Interesado en colaborar en un proyecto de ciencia de datos o tienes un rol que encaje? Me encantaría saber de ti.",
  },
  "contact.email": { en: "Email", es: "Correo" },
  "contact.resume": { en: "Resume", es: "Currículum" },
  "contact.footer": { en: "Built with passion for data", es: "Construido con pasión por los datos" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
