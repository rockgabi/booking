import { AnimatePresence, motion } from "framer-motion"

type Props = {
  duration?: number
  stagger?: number
  children: React.ReactNode
  index: number
  totalItems: number
  shouldAnimate?: boolean
}

export function DelayedEnterAnimation({ children, index, totalItems, stagger = 0.1, duration = 0.5, shouldAnimate = true }: Props) {
  const animate = shouldAnimate ? { opacity: 1, y: 0 } : {}
  return <AnimatePresence mode="wait">
    <motion.div initial={{
      // I want them to start invisible
      opacity: 0,
      y: 20,
    }} animate={animate} transition={{
      duration: duration,
      // Incremental delay for each item, starting from 0.1 and adding the difference between duration and stagger
      delay: stagger + duration / totalItems * index,
    }}>
      {children}
    </motion.div>
  </AnimatePresence>
}
