import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.aiModels': 'AI Models',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Mohamed Boufafa',
    'hero.title': 'AI Engineer | Researcher | Problem Solver',
    'hero.description': 'Transforming ideas into intelligent products through deep learning, modern web frameworks, and scalable backend systems.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.intro': "I’m an AI engineer and problem solver, driven by curiosity and the desire to build impactful technology. I specialize in deep learning, NLP, and graph-based models, while also developing scalable backend systems and web applications.",
    'about.passion': 'I thrive at the intersection of research and product development, delivering intelligent solutions that solve real-world challenges. My work combines experimentation, engineering rigor, and a focus on user-centered design.',
    'about.stats.aiProjects': 'AI Projects',
    'about.stats.models': 'Models',
    'about.stats.experience': 'Years Experience',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.programming.title': 'Programming & Development',
    'skills.programming.desc': 'Languages and tools for efficient coding and software project management',
    'skills.aiml.title': 'Artificial Intelligence & Machine Learning',
    'skills.aiml.desc': 'Design and deployment of deep learning and classical models, NLP and graphs',
    'skills.vision.title': 'Computer Vision',
    'skills.vision.desc': 'Image analysis, detection and segmentation, OCR and real-time systems',
    'skills.backend.title': 'Backend, Web & MLOps',
    'skills.backend.desc': 'API development, ML pipelines and intelligent systems deployment',
    'skills.cloud.title': 'Cloud & Infrastructure',
    'skills.cloud.desc': 'Cloud services for storage, compute and model deployment',
    'skills.dataeng.title': 'Data Engineering & Pipelines',
    'skills.dataeng.desc': 'Data preparation, transformation and processing for ML models and analytics',
    'skills.productivity.title': 'Productivity & Collaboration',
    'skills.productivity.desc': 'Tools to automate, test and collaborate effectively on projects',

    // Projects
    'projects.title': 'Development Projects',
    'projects.chatbot.title': 'AI-Powered Chatbot Platform',
    'projects.chatbot.overview': 'Conversational AI Solution',
    'projects.chatbot.desc': 'Intelligent chatbot system using advanced LLMs with RAG architecture for context-aware responses. Features real-time conversation, multi-turn dialogue, and seamless integration capabilities.',
    'projects.chatbot.caption': 'Next-generation conversational AI platform built with cutting-edge language models',
    'projects.analytics.title': 'ML Analytics Dashboard',
    'projects.analytics.overview': 'Data-Driven Insights Platform',
    'projects.analytics.desc': 'Interactive analytics platform with machine learning insights, real-time data visualization, and predictive modeling capabilities for data-driven decision making.',
    'projects.analytics.caption': 'Enterprise-grade analytics dashboard powered by machine learning algorithms',
    'projects.vision.title': 'Computer Vision Application',
    'projects.vision.overview': 'Real-Time Object Detection System',
    'projects.vision.desc': 'Advanced computer vision system for object detection and classification with real-time processing capabilities and high accuracy performance metrics.',
    'projects.vision.caption': 'State-of-the-art computer vision solution for intelligent object recognition',
    'projects.careerconnect.title': 'CareerConnect',
    'projects.careerconnect.overview': 'AI-Powered Recruitment Platform',
    'projects.careerconnect.desc': 'End-to-end AI recruitment platform using Graph Neural Networks (GCN Autoencoders) and semantic matching with dense embeddings for intelligent candidate-job pairing. Features automated skill extraction via NLP, quad-ensemble role classification, and hybrid ranking systems. Achieves 0.947 Mean Reciprocal Rank (MRR) with high precision@k across test sets. Built with PyTorch Geometric, FAISS for efficient similarity search, and deployed with FastAPI + React dashboard.',
    'projects.careerconnect.caption': 'Graph-based AI recruitment with 94.7% MRR - semantic matching, NLP skill extraction, and hybrid ranking',
    'projects.website': 'Website',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.viewDetails': 'View Details',
    'projects.modal.description': 'Description',
    'projects.modal.technologies': 'Technologies Used',

    // AI Models
    'aiModels.title': 'AI Models & Research',
    'aiModels.image.name': 'Deep Learning Image Classifier',
    'aiModels.image.desc': 'Advanced CNN architecture for multi-class image classification utilizing transfer learning techniques. Implements state-of-the-art deep learning methods with exceptional performance on diverse datasets.',
    'aiModels.nlp.name': 'NLP Sentiment Analysis System',
    'aiModels.nlp.desc': 'Fine-tuned transformer model for multi-lingual sentiment analysis with context understanding. Achieves superior performance on industry-standard benchmarks with robust accuracy across diverse text inputs.',
    'aiModels.detection.name': 'Real-time Object Detection Model',
    'aiModels.detection.desc': 'Optimized object detection system for real-time inference with high accuracy and speed. Designed for production deployment with efficient resource utilization and scalable architecture.',
    'aiModels.paper': 'Paper',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.heading': "Let's Connect",
    'contact.description': "I'm always interested in hearing about new opportunities, collaborations, or just chatting about AI and machine learning. Feel free to reach out!",
    'contact.label.email': 'Email',
    'contact.label.linkedin': 'LinkedIn',
    'contact.label.github': 'GitHub',
    'contact.label.portfolio': 'Portfolio',
    'contact.value.portfolio': 'View My Work',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent! Thank you for reaching out.',
    'contact.footer': '© 2024 Mohamed Boufafa. All rights reserved. Built with React & TypeScript',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.aiModels': 'Modèles IA',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'Mohamed Boufafa',
    'hero.title': 'Ingénieur IA | Chercheur | Résolveur de Problèmes',
    'hero.description': "Transformer les idées en produits intelligents grâce à l'apprentissage profond, aux frameworks web modernes et aux systèmes backend évolutifs.",
    'hero.viewWork': 'Voir Mon Travail',
    'hero.getInTouch': 'Me Contacter',

    // About
    'about.title': 'À Propos de Moi',
    'about.intro': "Je suis un ingénieur IA et résolveur de problèmes, animé par la curiosité et le désir de construire des technologies à impact. Je me spécialise dans l'apprentissage profond, le NLP et les modèles basés sur les graphes, tout en développant des systèmes backend évolutifs et des applications web.",
    'about.passion': "Je m'épanouis à l'intersection de la recherche et du développement de produits, en livrant des solutions intelligentes qui résolvent des défis du monde réel. Mon travail combine l'expérimentation, la rigueur technique et une attention particulière à la conception centrée sur l'utilisateur.",
    'about.stats.aiProjects': 'Projets IA',
    'about.stats.models': 'Modèles',
    'about.stats.experience': "Années d'Expérience",

    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.programming.title': 'Programmation & Développement',
    'skills.programming.desc': 'Langages et outils pour coder efficacement et gérer des projets logiciels',
    'skills.aiml.title': 'Intelligence Artificielle & Machine Learning',
    'skills.aiml.desc': 'Conception et déploiement de modèles d\'apprentissage profond et classique, NLP et graphes',
    'skills.vision.title': 'Vision par Ordinateur',
    'skills.vision.desc': 'Analyse d\'images, détection et segmentation, OCR et systèmes temps réel',
    'skills.backend.title': 'Backend, Web & MLOps',
    'skills.backend.desc': 'Développement d\'API, pipelines ML et déploiement de systèmes intelligents',
    'skills.cloud.title': 'Cloud & Infrastructure',
    'skills.cloud.desc': 'Services cloud pour stockage, calcul et déploiement de modèles',
    'skills.dataeng.title': 'Data Engineering & Pipelines',
    'skills.dataeng.desc': 'Préparation, transformation et traitement de données pour modèles ML et analyses',
    'skills.productivity.title': 'Productivity & Collaboration',
    'skills.productivity.desc': 'Outils pour automatiser, tester et collaborer efficacement sur les projets',

    // Projects
    'projects.title': 'Projets de Développement',
    'projects.chatbot.title': 'Plateforme Chatbot Alimentée par IA',
    'projects.chatbot.overview': 'Solution IA Conversationnelle',
    'projects.chatbot.desc': 'Système de chatbot intelligent utilisant des LLMs avancés avec architecture RAG pour des réponses contextuelles. Fonctionnalités de conversation en temps réel, dialogue multi-tours et capacités d\'intégration transparentes.',
    'projects.chatbot.caption': 'Plateforme IA conversationnelle de nouvelle génération construite avec des modèles de langage de pointe',
    'projects.analytics.title': 'Tableau de Bord Analytique ML',
    'projects.analytics.overview': 'Plateforme d\'Insights Basée sur les Données',
    'projects.analytics.desc': 'Plateforme analytique interactive avec insights d\'apprentissage automatique, visualisation de données en temps réel et capacités de modélisation prédictive pour une prise de décision basée sur les données.',
    'projects.analytics.caption': 'Tableau de bord analytique de niveau entreprise alimenté par des algorithmes d\'apprentissage automatique',
    'projects.vision.title': 'Application de Vision par Ordinateur',
    'projects.vision.overview': 'Système de Détection d\'Objets en Temps Réel',
    'projects.vision.desc': 'Système avancé de vision par ordinateur pour la détection et la classification d\'objets avec capacités de traitement en temps réel et métriques de performance haute précision.',
    'projects.vision.caption': 'Solution de vision par ordinateur de pointe pour la reconnaissance intelligente d\'objets',
    'projects.careerconnect.title': 'CareerConnect',
    'projects.careerconnect.overview': 'Plateforme de Recrutement Alimentée par IA',
    'projects.careerconnect.desc': 'Plateforme de recrutement IA de bout en bout utilisant les Réseaux Neuronaux sur Graphes (GCN Autoencoders) et le matching sémantique avec embeddings denses pour l\'appariement intelligent candidat-emploi. Inclut l\'extraction automatique de compétences via NLP, classification de rôles par quad-ensemble, et systèmes de classement hybrides. Atteint 0.947 de Mean Reciprocal Rank (MRR) avec haute précision@k sur les ensembles de test. Construit avec PyTorch Geometric, FAISS pour recherche de similarité efficace, et déployé avec FastAPI + dashboard React.',
    'projects.careerconnect.caption': 'Recrutement IA basé sur graphes avec 94.7% MRR - matching sémantique, extraction NLP et classement hybride',
    'projects.website': 'Site Web',
    'projects.code': 'Code',
    'projects.demo': 'Démo',
    'projects.viewDetails': 'Voir Détails',
    'projects.modal.description': 'Description',
    'projects.modal.technologies': 'Technologies Utilisées',

    // AI Models
    'aiModels.title': 'Modèles IA & Recherche',
    'aiModels.image.name': 'Classificateur d\'Images par Apprentissage Profond',
    'aiModels.image.desc': 'Architecture CNN avancée pour la classification d\'images multi-classes utilisant des techniques d\'apprentissage par transfert. Implémente des méthodes d\'apprentissage profond de pointe avec des performances exceptionnelles sur divers ensembles de données.',
    'aiModels.nlp.name': 'Système d\'Analyse de Sentiment NLP',
    'aiModels.nlp.desc': 'Modèle transformer affiné pour l\'analyse de sentiment multilingue avec compréhension du contexte. Atteint des performances supérieures sur les benchmarks standard de l\'industrie avec une précision robuste sur divers textes.',
    'aiModels.detection.name': 'Modèle de Détection d\'Objets en Temps Réel',
    'aiModels.detection.desc': 'Système de détection d\'objets optimisé pour l\'inférence en temps réel avec haute précision et vitesse. Conçu pour le déploiement en production avec utilisation efficace des ressources et architecture évolutive.',
    'aiModels.paper': 'Article',

    // Contact
    'contact.title': 'Contactez-Moi',
    'contact.heading': 'Restons en Contact',
    'contact.description': "Je suis toujours intéressé d'entendre parler de nouvelles opportunités, collaborations, ou simplement discuter d'IA et d'apprentissage automatique. N'hésitez pas à me contacter !",
    'contact.label.email': 'Email',
    'contact.label.linkedin': 'LinkedIn',
    'contact.label.github': 'GitHub',
    'contact.label.portfolio': 'Portfolio',
    'contact.value.portfolio': 'Voir Mon Travail',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.success': 'Message envoyé ! Merci de me contacter.',
    'contact.footer': '© 2024 Mohamed Boufafa. Tous droits réservés. Créé avec React & TypeScript',
  },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const translationMap = translations[language] as Record<string, string>
    return translationMap[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
