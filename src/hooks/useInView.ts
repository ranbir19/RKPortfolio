import { useEffect, useRef, useState } from 'react'

export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setInView(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options?.once !== false) observer.unobserve(entry.target)
        } else if (options?.once === false) {
          setInView(false)
        }
      })
    }, { root: options?.root ?? null, rootMargin: options?.rootMargin ?? '0px 0px -10% 0px', threshold: options?.threshold ?? 0.15 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [options?.once, options?.root, options?.rootMargin, options?.threshold])

  return { ref, inView }
}
