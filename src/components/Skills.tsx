import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBrain, FaLanguage, FaEye, FaCode, FaDatabase, FaCloud, FaProjectDiagram, FaCogs } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import type { Skill } from '../types'
import './Skills.css'

const Skills: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills: Skill[] = [
    {
      id: '1',
      title: t('skills.programming.title'),
      description: t('skills.programming.desc'),
      icon: 'code',
      tags: ['Python', 'SQL', 'Bash', 'JavaScript', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Conda', 'Git', 'GitHub', 'CI/CD Pipelines'],
    },
    {
      id: '2',
      title: t('skills.vision.title'),
      description: t('skills.vision.desc'),
      icon: 'eye',
      tags: ['OpenCV', 'PIL', 'YOLO', 'ResNet', 'EfficientNet', 'Mask R-CNN', 'CRNN', 'Adaptive Tracking', 'Frame Selection', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      id: '3',
      title: t('skills.backend.title'),
      description: t('skills.backend.desc'),
      icon: 'database',
      tags: ['Flask', 'FastAPI', 'REST APIs', 'Docker', 'MLflow', 'Streamlit', 'CI/CD', 'Pipeline Automation', 'Data Validation', 'Monitoring', 'PostgreSQL', 'SQL', 'Large-Scale Data'],
    },
    {
      id: '4',
      title: t('skills.cloud.title'),
      description: t('skills.cloud.desc'),
      icon: 'cloud',
      tags: ['AWS', 'S3', 'EC2', 'Google Cloud', 'Docker', 'REST Endpoints', 'Containerization'],
    },
    {
      id: '5',
      title: t('skills.dataeng.title'),
      description: t('skills.dataeng.desc'),
      icon: 'diagram',
      tags: ['Pandas', 'NumPy', 'Large-Scale Data', 'Feature Engineering', 'Airflow', 'Cron', 'CI/CD for data'],
    },
    {
      id: '6',
      title: t('skills.productivity.title'),
      description: t('skills.productivity.desc'),
      icon: 'cogs',
      tags: ['Unit Testing', 'Integration Testing', 'MLflow', 'GitHub', 'Markdown', 'LaTeX', 'Agile/Scrum', 'Data Validation', 'Model Monitoring'],
    },
    {
      id: '7',
      title: t('skills.aiml.title'),
      description: t('skills.aiml.desc'),
      icon: 'brain',
      tags: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'LightGBM', 'GNNs', 'GCN', 'GAT', 'GraphSAGE', 'PyTorch Geometric', 'BERT', 'GPT', 'RoBERTa', 'ViT', 'Hugging Face', 'SpaCy', 'NLTK', 'Word2Vec', 'Node2Vec', 'DeepWalk', 'PCA', 'Bayesian Inference'],
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
      diagram: <FaProjectDiagram />,
      cogs: <FaCogs />,
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
        {t('skills.title')}
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
