import React from 'react'
import { useInView } from '@/hooks/useInView'

type RevealProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  delayMs?: number
  className?: string
  y?: number
}>

const Reveal: React.FC<RevealProps> = ({ as = 'div', delayMs = 0, className = '', y = 16, children }) => {
  const { ref, inView } = useInView({ once: true, rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
  const Comp = as as any
  const style: React.CSSProperties = {
    transition: 'opacity 700ms ease, transform 700ms ease',
    transitionDelay: `${delayMs}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
    willChange: 'opacity, transform',
  }
  return (
    <Comp ref={(el: any) => { (ref as any).current = el }} className={className} style={style}>
      {children}
    </Comp>
  )
}

export default Reveal
