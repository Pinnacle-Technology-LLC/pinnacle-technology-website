'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, ISourceOptions } from '@tsparticles/engine'

export function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesOptions: ISourceOptions = {
    background: {
      opacity: 0,
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
        },
      },
      color: {
        value: '#00BCD4',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#00BCD4',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  }

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0 }}
    />
  )
}
