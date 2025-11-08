import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa'
import type { Project } from '../types'
import './Projects.css'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered Chatbot Platform',
      description: 'Intelligent chatbot system using advanced LLMs with RAG architecture for context-aware responses. Features real-time conversation, multi-turn dialogue, and seamless integration capabilities.',
      tags: ['Python', 'LangChain', 'FastAPI', 'Docker', 'OpenAI'],
      githubUrl: 'https://github.com/MohamedBoufafa',
      demoUrl: '',
    },
    {
      id: '2',
      title: 'ML Analytics Dashboard',
      description: 'Interactive analytics platform with machine learning insights, real-time data visualization, and predictive modeling capabilities for data-driven decision making.',
      tags: ['React', 'Python', 'TensorFlow', 'Flask', 'MongoDB'],
      githubUrl: 'https://github.com/MohamedBoufafa',
      demoUrl: '',
    },
    {
      id: '3',
      title: 'Computer Vision Application',
      description: 'Advanced computer vision system for object detection and classification with real-time processing capabilities and high accuracy performance metrics.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'YOLO', 'Docker'],
      githubUrl: 'https://github.com/MohamedBoufafa',
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
        Development Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -15 }}
          >
            <div className="project-header">
              <div className="project-icon">{getProjectIcon(index)}</div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                )}
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
