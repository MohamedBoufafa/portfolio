import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMessageSquare, FiImage, FiGithub, FiFileText } from 'react-icons/fi'
import { FaBrain } from 'react-icons/fa'
import type { AIModel } from '../types'
import './AIModels.css'

const AIModels: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const models: AIModel[] = [
    {
      id: '1',
      name: 'Deep Learning Image Classifier',
      description: 'Advanced CNN architecture for multi-class image classification utilizing transfer learning techniques. Implements state-of-the-art deep learning methods with exceptional performance on diverse datasets.',
      metrics: [
        { label: 'Accuracy', value: '96.2%' },
        { label: 'F1 Score', value: '0.95' },
      ],
      tags: ['PyTorch', 'CNN', 'Transfer Learning', 'ResNet-50'],
      githubUrl: 'https://github.com/MohamedBoufafa',
      paperUrl: '',
    },
    {
      id: '2',
      name: 'NLP Sentiment Analysis System',
      description: 'Fine-tuned transformer model for multi-lingual sentiment analysis with context understanding. Achieves superior performance on industry-standard benchmarks with robust accuracy across diverse text inputs.',
      metrics: [
        { label: 'Accuracy', value: '93.8%' },
        { label: 'F1 Score', value: '0.92' },
      ],
      tags: ['Transformers', 'BERT', 'NLP', 'Hugging Face'],
      githubUrl: 'https://github.com/MohamedBoufafa',
    },
    {
      id: '3',
      name: 'Real-time Object Detection Model',
      description: 'Optimized object detection system for real-time inference with high accuracy and speed. Designed for production deployment with efficient resource utilization and scalable architecture.',
      metrics: [
        { label: 'mAP', value: '89.3%' },
        { label: 'FPS', value: '55' },
      ],
      tags: ['YOLO', 'Object Detection', 'Computer Vision', 'TensorFlow'],
      githubUrl: 'https://github.com/MohamedBoufafa',
      paperUrl: '',
    },
  ]

  const getModelIcon = (index: number) => {
    const icons = [<FiImage key="image" />, <FiMessageSquare key="message" />, <FaBrain key="brain" />]
    return icons[index % icons.length]
  }

  return (
    <section id="ai-models" className="ai-models" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        AI Models & Research
      </motion.h2>

      <div className="models-grid">
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            className="model-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -15 }}
          >
            <div className="model-header">
              <div className="model-icon">{getModelIcon(index)}</div>
              <h3>{model.name}</h3>
            </div>
            
            <p className="model-description">{model.description}</p>
            
            <div className="model-metrics">
              {model.metrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
            
            <div className="model-tags">
              {model.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="model-links">
              {model.githubUrl && (
                <motion.a
                  href={model.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub /> Code
                </motion.a>
              )}
              {model.paperUrl && (
                <motion.a
                  href={model.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiFileText /> Paper
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AIModels
