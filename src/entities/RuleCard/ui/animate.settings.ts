import { type Variants } from "framer-motion"

export const variants: (delay: number) => Variants = (delay) => ({
  hidden: {
    opacity: 0,
    x: -20,  
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay / 1.5,
      duration: .75
    }
  }
})
  