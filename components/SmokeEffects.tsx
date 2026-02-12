'use client'

import { useEffect, useState } from 'react'

interface SmokeEffectProps {
  isActive: boolean
}

export default function SmokeEffect({ isActive }: SmokeEffectProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    if (!isActive) return

    // توليد جزيئات الدخان
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }))
    setParticles(newParticles)

    const timer = setTimeout(() => {
      setParticles([])
    }, 10000) // 10 ثواني

    return () => {
      clearTimeout(timer)
      setParticles([])
    }
  }, [isActive])

  if (!isActive || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-64 h-64 bg-gradient-to-r from-gray-300 to-transparent rounded-full opacity-40 blur-xl"
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            animation: `smokeEffect 10s ease-in-out forwards`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}
