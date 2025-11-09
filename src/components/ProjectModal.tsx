import { useEffect, useState } from 'react'
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
  const [validImages, setValidImages] = useState<string[]>([])

  // Filter out images that don't exist
  useEffect(() => {
    if (!project?.images) {
      setValidImages([])
      return
    }

    const checkImages = async () => {
      const imageChecks = project.images!.map((src) => 
        new Promise<string | null>((resolve) => {
          const img = new Image()
          img.onload = () => resolve(src)
          img.onerror = () => resolve(null)
          img.src = src
        })
      )

      const results = await Promise.all(imageChecks)
      const valid = results.filter((src): src is string => src !== null)
      setValidImages(valid)
    }

    checkImages()
  }, [project])

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

              {validImages.length > 0 && (
                <div className="modal-images">
                  <div className="images-grid">
                    {validImages.map((image, index) => (
                      <div key={index} className="image-wrapper">
                        <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Single Video Section (Legacy support) */}
              {(project.videoUrl || project.youtubeUrl || project.vimeoUrl) && !project.videos && (
                <div className="modal-video-section">
                  <h3>{t('projects.modal.video') || 'Project Demo'}</h3>
                  {project.videoDescription && (
                    <p className="video-description">{project.videoDescription}</p>
                  )}
                  
                  <div className="video-container">
                    {/* Direct Video File */}
                    {project.videoUrl && (
                      <video controls className="project-video">
                        <source src={project.videoUrl} type="video/mp4" />
                        <source src={project.videoUrl} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* YouTube Embed */}
                    {project.youtubeUrl && (
                      <iframe
                        className="project-video-embed"
                        src={`https://www.youtube.com/embed/${project.youtubeUrl.includes('watch?v=') ? project.youtubeUrl.split('watch?v=')[1].split('&')[0] : project.youtubeUrl.includes('youtu.be/') ? project.youtubeUrl.split('youtu.be/')[1].split('?')[0] : project.youtubeUrl}`}
                        title={`${project.title} YouTube Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}

                    {/* Vimeo Embed */}
                    {project.vimeoUrl && (
                      <iframe
                        className="project-video-embed"
                        src={`https://player.vimeo.com/video/${project.vimeoUrl.includes('vimeo.com/') ? project.vimeoUrl.split('vimeo.com/')[1].split('?')[0] : project.vimeoUrl}`}
                        title={`${project.title} Vimeo Demo`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Multiple Videos Section (NEW!) */}
              {project.videos && project.videos.length > 0 && (
                <div className="modal-video-section">
                  <h3>{t('projects.modal.videos') || 'Project Demos'}</h3>
                  
                  <div className="videos-stack">
                    {project.videos.map((video, index) => (
                      <div key={index} className="video-item">
                        {video.description && (
                          <p className="video-description">{video.description}</p>
                        )}
                        
                        <div className="video-container">
                          {/* Direct Video File */}
                          {video.url && (
                            <video controls className="project-video">
                              <source src={video.url} type="video/mp4" />
                              <source src={video.url} type="video/webm" />
                              Your browser does not support the video tag.
                            </video>
                          )}

                          {/* YouTube Embed */}
                          {video.youtubeUrl && (
                            <iframe
                              className="project-video-embed"
                              src={`https://www.youtube.com/embed/${video.youtubeUrl.includes('watch?v=') ? video.youtubeUrl.split('watch?v=')[1].split('&')[0] : video.youtubeUrl.includes('youtu.be/') ? video.youtubeUrl.split('youtu.be/')[1].split('?')[0] : video.youtubeUrl}`}
                              title={`${project.title} Demo ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          )}

                          {/* Vimeo Embed */}
                          {video.vimeoUrl && (
                            <iframe
                              className="project-video-embed"
                              src={`https://player.vimeo.com/video/${video.vimeoUrl.includes('vimeo.com/') ? video.vimeoUrl.split('vimeo.com/')[1].split('?')[0] : video.vimeoUrl}`}
                              title={`${project.title} Demo ${index + 1}`}
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
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
