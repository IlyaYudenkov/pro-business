"use client"

import { FC, MouseEvent } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './RightCurveThings.module.scss';
import {AnimationControls, motion, useAnimation, type Variants} from 'framer-motion';
import Image from 'next/image';


import StoneIcon from 'shared/assets/img/SHAPE1.png'
import CircleIcon from 'shared/assets/img/SHAPE3.png'
import CylinderIcon from 'shared/assets/img/SHAPE5.png'
import BackgroundItems from 'shared/assets/img/rightblured.png'
import { pathVariants, stoneVariants, circleVariants, cylinderVariants, backgroundItemsVariants } from './animate.settings';

interface RightCurveThingsProps {
    className?: string;
    controls: AnimationControls
}


export const RightCurveThings: FC<RightCurveThingsProps> = ({className, controls}) => {

  return (
    <div className={classNames(cls.RightCurveThings, {}, [className])}>
      <svg 
        width="610" height="594" viewBox="0 0 610 594" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M1.5 19C1.5 19 246.5 84.0015 376 26.5006C505.5 -31.0004 531.5 33.5001 576 81.5009C620.5 129.502 618 206.501 562.5 245.001C507 283.501 394 211.501 348 312.001C302 412.501 536 591.502 536 591.502" stroke="var(--c-blue)" strokeWidth="4"/>
      </svg>

      <div
       
        className={cls.stone}
      >
        <Image src={StoneIcon} alt='stone'/>
      </div>

      <div
        className={cls.circle}
      >
        <Image src={CircleIcon} alt='stone'/>
      </div>

      <div
        className={cls.cylinder}
      >
        <Image src={CylinderIcon} alt='stone'/>
      </div>

      <motion.div
        animate={controls}
        className={cls.backgroundItems}
      >
        <Image src={BackgroundItems} alt='stone'/>
      </motion.div>
    </div>
  );
}