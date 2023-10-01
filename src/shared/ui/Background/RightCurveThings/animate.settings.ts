import { type Variants } from "framer-motion"

export const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
      
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: .2,
      duration: 3
    }
  }
}
  
export const stoneVariants: Variants = {
  hidden: {
    scale: 0,
      
  },
  visible: {
    scale: 1,
    transition: {
      delay: 1.1,
      duration: .5
    }
  }
}
  
export const circleVariants: Variants = {
  hidden: {
    scale: 0,   
  },
  visible: {
    scale: 1,
    transition: {
      delay: 1.7,
      duration: .5
    }
  }
}
export const cylinderVariants: Variants = {
  hidden: {
    scale: 0,   
  },
  visible: {
    scale: 1,
    transition: {
      delay: 2.8,
      duration: .5
    }
  }
}
  
export const backgroundItemsVariants: Variants = {
  hidden: {
    scale: 0,   
    opacity: 0,
  },
  visible: {
    scale: 1.3,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2
    }
  }
}