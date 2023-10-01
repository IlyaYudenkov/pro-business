import { Variants } from "framer-motion";

export const animationSettings: Variants = {
  initial: {
    y: 10,
    x: "-50%",
    opacity: 0
  },
  animate: {
    y: 50, 
    opacity: 1
  },
  exit: {
    y: 100, 
    opacity: 0
  }
}