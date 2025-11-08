import { useCallback, useState, useEffect } from 'react'
import Particles from 'react-particles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBackground: React.FC = () => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.body.getAttribute('data-theme') === 'light')
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles loaded', container)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#6366f1',
          },
          links: {
            color: '#8b5cf6',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        style: {
          position: 'fixed' as const,
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: '0',
          opacity: isLight ? '0.3' : '1',
        },
      }}
    />
  )
}

export default ParticlesBackground
