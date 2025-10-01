import { motion, useAnimation } from "motion/react"
import { useInView } from "motion/react"
import { useRef, useEffect } from "react"

export default function ScrollAnimation({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-150px 0px -150px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1 })
    } else {
      controls.start({ opacity: 0 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}