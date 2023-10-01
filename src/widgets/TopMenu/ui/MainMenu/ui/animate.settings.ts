import { Variants } from "framer-motion";

export const dropIn: Variants = {
  hidden: {
    y: '-100vh',
    opacity: '0'
  },
  visible: {
    y: '0',
    opacity: '1',
    transition: {
      duration: 0.9,
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    y: '-100vh',
    opacity: '1'
  }
}