import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    { value: '15+', label: 'AI Projects' },
    { value: '8+', label: 'Models Deployed' },
    { value: '3+', label: 'Years Experience' },
    { value: '98%', label: 'Success Rate' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            I'm an AI Engineer passionate about developing cutting-edge machine learning models
            and intelligent systems. With expertise in deep learning, natural language processing,
            and computer vision, I create innovative solutions that transform complex data into 
            actionable insights and intelligent applications.
          </p>
          <p>
            My work focuses on building scalable AI systems, from research and experimentation
            to production deployment. I combine strong technical skills with problem-solving
            capabilities to deliver impactful AI solutions that drive real-world value across
            diverse domains and industries.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
