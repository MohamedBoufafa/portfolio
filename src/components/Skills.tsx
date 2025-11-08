import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBrain, FaLanguage, FaEye, FaCode, FaDatabase, FaCloud } from 'react-icons/fa'
import type { Skill } from '../types'
import './Skills.css'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills: Skill[] = [
    {
      id: '1',
      title: 'Machine Learning',
      description: 'Deep Learning, Neural Networks, Transfer Learning, Model Optimization',
      icon: 'brain',
      tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras'],
    },
    {
      id: '2',
      title: 'NLP & LLMs',
      description: 'Natural Language Processing, Transformers, LLM Fine-tuning, RAG Systems',
      icon: 'language',
      tags: ['Hugging Face', 'LangChain', 'OpenAI', 'BERT'],
    },
    {
      id: '3',
      title: 'Computer Vision',
      description: 'Image Classification, Object Detection, Segmentation, GANs',
      icon: 'eye',
      tags: ['OpenCV', 'YOLO', 'ResNet', 'U-Net'],
    },
    {
      id: '4',
      title: 'Development',
      description: 'Python, REST APIs, Docker, Cloud Deployment, MLOps',
      icon: 'code',
      tags: ['Python', 'FastAPI', 'Docker', 'Git'],
    },
    {
      id: '5',
      title: 'Data Engineering',
      description: 'Data Pipeline, ETL, Big Data Processing, Feature Engineering',
      icon: 'database',
      tags: ['Pandas', 'SQL', 'Apache Spark', 'Airflow'],
    },
    {
      id: '6',
      title: 'Cloud & DevOps',
      description: 'AWS, GCP, Model Deployment, CI/CD, Monitoring',
      icon: 'cloud',
      tags: ['AWS', 'GCP', 'Kubernetes', 'MLflow'],
    },
  ]

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      brain: <FaBrain />,
      language: <FaLanguage />,
      eye: <FaEye />,
      code: <FaCode />,
      database: <FaDatabase />,
      cloud: <FaCloud />,
    }
    return icons[iconName] || <FaBrain />
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="skill-icon">{getIcon(skill.icon)}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
