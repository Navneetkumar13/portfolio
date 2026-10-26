import { useRef, useState } from 'react'

const Glowcard = ({
  children,
  className = '',
  glowColor = '59, 130, 246', // RGB of Tailwind blue-500
  size = 280,
  as: Tag = 'div',
}) => {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor}, 0.28), transparent 70%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </Tag>
  )
}

export default Glowcard