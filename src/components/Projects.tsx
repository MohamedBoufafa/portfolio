import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import { FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import ProjectModal from './ProjectModal'
import type { Project } from '../types'
import './Projects.css'

const Projects: React.FC = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  // Helper function to generate image paths dynamically
  const generateImagePaths = (projectName: string, maxImages: number): string[] => {
    const images: string[] = []
    for (let i = 1; i <= maxImages; i++) {
      images.push(`/images/projects/${projectName}-${i}.jpg`)
    }
    return images
  }

  const projects: Project[] = [
    {
      id: '1',
      title: t('projects.careerconnect.title'),
      overview: t('projects.careerconnect.overview'),
      description: t('projects.careerconnect.desc'),
      caption: t('projects.careerconnect.caption'),
      tags: ['PyTorch', 'PyTorch Geometric', 'GNN', 'FAISS', 'SpaCy', 'SBERT', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'XGBoost', 'scikit-learn'],
      url: '',
      githubUrl: 'https://github.com/TayebKahia/CareerConnect',
      demoUrl: '',
      imageUrl: '/images/projects/careerconnect-thumb.jpg',
      images: generateImagePaths('careerconnect', 20), // Supports up to 20 images - add as many as you have!
    },
    {
      id: '2',
      title: t('projects.licenseplaterecognition.title'),
      overview: t('projects.licenseplaterecognition.overview'),
      description: t('projects.licenseplaterecognition.desc'),
      caption: t('projects.licenseplaterecognition.caption'),
      tags: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit', 'EasyOCR', 'CRNN', 'Ultralytics', 'NumPy', 'Pillow', 'Computer Vision', 'Deep Learning', 'OCR'],
      url: '',
      githubUrl: 'https://github.com/MohamedBoufafa/License_Plate_Recognition_CV',
      demoUrl: '',
      imageUrl: '/images/projects/license-plate-recognition-thumb.jpg',
      images: generateImagePaths('license-plate-recognition', 8), // Up to 8 gallery images
      videos: [
        {
          url: '/videos/license-plate-recognition-demo_original.mp4',
          description: 'Original video footage - raw input before processing',
        },
        {
          url: '/videos/license-plate-recognition-demo_tracked.mp4',
          description: 'Processed with YOLOv8 detection and tracking - showing real-time license plate detection with bounding boxes, multi-object tracking, and 95%+ accuracy',
        },
      ],
    },
  ]

  // Placeholder for adding new projects
  const showPlaceholder = true

  const getProjectIcon = (index: number) => {
    const icons = [<FaLaptopCode key="laptop" />, <FaServer key="server" />, <FaMobileAlt key="mobile" />, <FaLaptopCode key="laptop2" />, <FaServer key="server2" />]
    return icons[index % icons.length]
  }

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {t('projects.title')}
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-header">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="project-icon">${getProjectIcon(index)}</div>`;
                  }}
                />
              ) : (
                <div className="project-icon">{getProjectIcon(index)}</div>
              )}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-overview">{project.overview}</p>
              
              <div className="project-tags-preview">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag-preview">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="tag-preview tag-more">+{project.tags.length - 3}</span>
                )}
              </div>
              
              <motion.button 
                className="view-details-btn"
                whileHover={{ x: 5 }}
              >
                {t('projects.viewDetails')} <FiArrowRight />
              </motion.button>
            </div>
          </motion.div>
        ))}

        {/* Placeholder Card */}
        {showPlaceholder && (
          <motion.div
            className="project-card project-card-placeholder"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: projects.length * 0.2 }}
          >
            <div className="project-placeholder-content">
              <div className="placeholder-icon">+</div>
              <h3>{t('projects.placeholder.title') || 'More Projects Coming Soon'}</h3>
              <p>{t('projects.placeholder.description') || 'Stay tuned for more exciting projects!'}</p>
            </div>
          </motion.div>
        )}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects
