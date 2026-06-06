import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useActiveSection() {
  const activeRef = useRef(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeRef.current = entry.target.id
            document.querySelectorAll('.nav-link').forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
            })
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeRef
}
