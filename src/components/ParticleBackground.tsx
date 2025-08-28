import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 캔버스 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 파티클 생성
    const createParticles = () => {
      particles.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000) // 더 많은 파티클
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          color: `rgba(0, 122, 255, ${Math.random() * 0.5 + 0.2})`
        })
      }
    }

    // 마우스 이벤트
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    // 애니메이션 루프
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle, index) => {
        // 강화된 마우스와의 상호작용
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          const attraction = force * 0.02
          particle.vx += (dx / distance) * attraction
          particle.vy += (dy / distance) * attraction
          
          // 마우스 근처에서 파티클 크기와 투명도 증가
          particle.size = Math.min(particle.size * (1 + force * 0.5), 8)
          particle.opacity = Math.min(particle.opacity * (1 + force * 0.8), 1)
        }
        
        // 마우스가 매우 가까이 있을 때 반발 효과
        if (distance < 50) {
          const repulsion = (50 - distance) / 50 * 0.03
          particle.vx -= (dx / distance) * repulsion
          particle.vy -= (dy / distance) * repulsion
        }

        // 파티클 이동
        particle.x += particle.vx
        particle.y += particle.vy

        // 경계 처리
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // 속도 감쇠
        particle.vx *= 0.99
        particle.vy *= 0.99

        // 파티클 그리기
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // 글로우 효과
        ctx.shadowColor = '#007aff'
        ctx.shadowBlur = 20
        ctx.fill()
        ctx.restore()

        // 파티클 간 연결선 (강화된 범위)
        particles.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 140) {
            const opacity = (140 - distance) / 140 * 0.25
            ctx.save()
            ctx.globalAlpha = opacity
            ctx.strokeStyle = '#007aff'
            ctx.lineWidth = opacity * 2 // 동적 선 두께
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            
            // 연결선에 글로우 효과 추가
            ctx.shadowColor = '#007aff'
            ctx.shadowBlur = 10
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        background: 'transparent'
      }}
    />
  )
}

export default ParticleBackground