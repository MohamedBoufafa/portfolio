import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import type { Project } from '../types'
import './ProjectModal.css'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <button className="modal-close" onClick={onClose}>
                <FiX />
              </button>

              <div className="modal-header">
                <h2>{project.title}</h2>
                <p className="modal-overview">{project.overview}</p>
              </div>

              {project.images && project.images.length > 0 && (
                <div className="modal-images">
                  <div className="images-grid">
                    {project.images.map((image, index) => (
                      <div key={index} className="image-wrapper">
                        <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-body">
                <div className="modal-section">
                  <h3>{t('projects.modal.description')}</h3>
                  <p>{project.description}</p>
                </div>

                {project.caption && (
                  <div className="modal-caption">
                    <p>{project.caption}</p>
                  </div>
                )}

                <div className="modal-section">
                  <h3>{t('projects.modal.technologies')}</h3>
                  <div className="modal-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="modal-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link modal-link-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink /> {t('projects.website')}
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub /> {t('projects.code')}
                    </motion.a>
                  )}
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink /> {t('projects.demo')}
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}

export default ProjectModal
