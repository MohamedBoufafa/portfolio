import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AIModels from './components/AIModels'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIModels />
      <Contact />
    </div>
  )
}

export default App
