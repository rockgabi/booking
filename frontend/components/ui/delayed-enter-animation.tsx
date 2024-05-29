import { motion } from "framer-motion"

type Props = {
  duration?: number
  stagger?: number
  children: React.ReactNode
  index: number
  totalItems: number
}

export function DelayedEnterAnimation({ children, index, totalItems, stagger = 0.1, duration = 0.5 }: Props) {
  return <motion.div initial={{
    // I want them to start invisible
    opacity: 0,
    y: 20,
  }} animate={{
    // I want them to apply a fade in and a translate up effect
    opacity: [0, 1],
    y: [20, 0],
  }} transition={{
    duration: duration,
    // Incremental delay for each item, starting from 0.1 and adding the difference between duration and stagger
    delay: stagger + duration / totalItems * index,
  }}>
    {children}
  </motion.div>
}
