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

  const projects: Project[] = [
    {
      id: '1',
      title: t('projects.chatbot.title'),
      overview: t('projects.chatbot.overview'),
      description: t('projects.chatbot.desc'),
      caption: t('projects.chatbot.caption'),
      tags: ['Python', 'LangChain', 'FastAPI', 'Docker', 'OpenAI'],
      url: '',
      githubUrl: 'https://github.com/MohamedBoufafa',
      demoUrl: '',
      images: [],
    },
    {
      id: '2',
      title: t('projects.analytics.title'),
      overview: t('projects.analytics.overview'),
      description: t('projects.analytics.desc'),
      caption: t('projects.analytics.caption'),
      tags: ['React', 'Python', 'TensorFlow', 'Flask', 'MongoDB'],
      url: '',
      githubUrl: 'https://github.com/MohamedBoufafa',
      demoUrl: '',
      images: [],
    },
    {
      id: '3',
      title: t('projects.vision.title'),
      overview: t('projects.vision.overview'),
      description: t('projects.vision.desc'),
      caption: t('projects.vision.caption'),
      tags: ['Python', 'OpenCV', 'PyTorch', 'YOLO', 'Docker'],
      url: '',
      githubUrl: 'https://github.com/MohamedBoufafa',
      images: [],
    },
  ]

  const getProjectIcon = (index: number) => {
    const icons = [<FaLaptopCode key="laptop" />, <FaServer key="server" />, <FaMobileAlt key="mobile" />]
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
              <div className="project-icon">{getProjectIcon(index)}</div>
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
