import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiGithub, FiGlobe, FiSend } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(t('contact.success'))
    setTimeout(() => {
      setStatus('')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      label: t('contact.label.email'),
      value: 'boufafa.moamed@gmail.com',
      link: 'mailto:boufafa.moamed@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      label: t('contact.label.linkedin'),
      value: 'linkedin.com/in/boufafa-moamed',
      link: 'https://www.linkedin.com/in/boufafa-moamed/',
    },
    {
      icon: <FiGithub />,
      label: t('contact.label.github'),
      value: 'github.com/MohamedBoufafa',
      link: 'https://github.com/MohamedBoufafa',
    },
    {
      icon: <FiGlobe />,
      label: t('contact.label.portfolio'),
      value: t('contact.value.portfolio'),
      link: '#home',
    },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {t('contact.title')}
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>{t('contact.heading')}</h3>
          <p>
            {t('contact.description')}
          </p>

          <div className="contact-items">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={t('contact.name')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder={t('contact.message')}
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend /> {t('contact.send')}
          </motion.button>

          {status && <p className="status-message">{status}</p>}
        </motion.form>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p>{t('contact.footer')}</p>
      </motion.footer>
    </section>
  )
}

export default Contact
