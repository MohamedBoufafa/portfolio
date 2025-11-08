import { motion } from 'framer-motion'
import './ProfileImage.css'

const ProfileImage: React.FC = () => {
  return (
    <motion.div
      className="profile-image-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        className="profile-image-wrapper"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="profile-image-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <img
          src="/profile.jpg"
          alt="Mohamed Boufafa"
          className="profile-image"
        />
        <div className="profile-glow" />
      </motion.div>
    </motion.div>
  )
}

export default ProfileImage
