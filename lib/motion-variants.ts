'use client'

import { useReducedMotion } from 'motion/react'

export const EASE = [0.22, 1, 0.36, 1] as const

export function useReveal() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  }

  const item = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }

  return { container, item, reduce }
}
