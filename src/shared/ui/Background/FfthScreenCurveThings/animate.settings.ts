import { type Variants } from "framer-motion"

export const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: .5,  
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 4
    }
  }
}
  
