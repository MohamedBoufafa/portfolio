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
    'hero.title': 'AI Engineer & Machine Learning Specialist',
    'hero.description': 'Building intelligent systems and innovative AI solutions',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.intro': "I'm a passionate AI Engineer with expertise in machine learning, deep learning, and natural language processing. I love transforming complex problems into elegant solutions.",
    'about.passion': 'My passion lies in creating intelligent systems that make a real difference. I believe in continuous learning and staying at the forefront of AI innovation.',
    'about.stats.projects': 'Projects',
    'about.stats.experience': 'Years Experience',
    'about.stats.technologies': 'Technologies',
    'about.stats.contributions': 'Contributions',

    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.ai.title': 'AI & Machine Learning',
    'skills.ai.desc': 'Advanced expertise in deep learning, neural networks, and AI model development',
    'skills.backend.title': 'Backend Development',
    'skills.backend.desc': 'Building scalable APIs and microservices with modern frameworks',
    'skills.data.title': 'Data Science',
    'skills.data.desc': 'Data analysis, visualization, and statistical modeling',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.cloud.desc': 'Cloud infrastructure and deployment automation',

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
    'contact.subtitle': "Let's work together on your next AI project",
    'contact.description': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
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
    'hero.name': 'Boufafa Mohamed',
    'hero.title': 'Ingénieur IA & Spécialiste en Apprentissage Automatique',
    'hero.description': 'Création de systèmes intelligents et de solutions IA innovantes',
    'hero.viewWork': 'Voir Mon Travail',
    'hero.getInTouch': 'Me Contacter',

    // About
    'about.title': 'À Propos de Moi',
    'about.intro': "Je suis un ingénieur IA passionné avec une expertise en apprentissage automatique, apprentissage profond et traitement du langage naturel. J'adore transformer des problèmes complexes en solutions élégantes.",
    'about.passion': "Ma passion réside dans la création de systèmes intelligents qui font une réelle différence. Je crois en l'apprentissage continu et à rester à la pointe de l'innovation en IA.",
    'about.stats.projects': 'Projets',
    'about.stats.experience': "Années d'Expérience",
    'about.stats.technologies': 'Technologies',
    'about.stats.contributions': 'Contributions',

    // Skills
    'skills.title': 'Compétences & Expertise',
    'skills.ai.title': 'IA & Apprentissage Automatique',
    'skills.ai.desc': "Expertise avancée en apprentissage profond, réseaux neuronaux et développement de modèles d'IA",
    'skills.backend.title': 'Développement Backend',
    'skills.backend.desc': 'Construction d\'APIs évolutives et de microservices avec des frameworks modernes',
    'skills.data.title': 'Science des Données',
    'skills.data.desc': 'Analyse de données, visualisation et modélisation statistique',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.cloud.desc': "Infrastructure cloud et automatisation du déploiement",

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
    'contact.subtitle': 'Travaillons ensemble sur votre prochain projet IA',
    'contact.description': 'Je suis toujours ouvert à discuter de nouveaux projets, d\'idées créatives ou d\'opportunités de faire partie de votre vision.',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi...',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
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
