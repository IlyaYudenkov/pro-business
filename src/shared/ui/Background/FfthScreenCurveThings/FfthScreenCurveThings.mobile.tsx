"use client"

import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './FfthScreenCurveThings.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { pathVariants } from './animate.settings';

interface FfthScreenCurveThingsProps {
  className?: string;
}

export const FfthScreenCurveThingsMobile: FC<FfthScreenCurveThingsProps> = ({ className }) => {
  const controls = useAnimation();
  return (
    <div className={classNames(cls.FfthScreenCurveThingsMobile, {}, [className])}>
      <motion.svg 
        onViewportEnter={(entry) => {
          if (entry) {
            controls.start("visible")
          }
        }}
        width="330" height="801" viewBox="0 0 330 801" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          d="M328 0V31L205.5 31L94 31L94.1469 51.9468C94.3415 79.6974 71.8994 102.297 44.1481 102.297H42.5L42.5 501.5C42.5 529.114 20.1142 551.5 -7.50008 551.5L-18.2632 551.5V647.406C-18.2632 672.666 -38.7403 693.143 -64 693.143V693.143V798.5H29H39.5C67.1142 798.5 89.5 776.114 89.5 748.5V737.5" stroke="#0047FF" strokeWidth="4"/>
      </motion.svg>
    </div>
  );
}