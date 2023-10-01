"use client"

import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './FfthScreenCurveThings.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { pathVariants } from './animate.settings';

interface FfthScreenCurveThingsProps {
  className?: string;
}

export const FfthScreenCurveThings: FC<FfthScreenCurveThingsProps> = ({ className }) => {
  const controls = useAnimation();
  return (
    <div className={classNames(cls.FfthScreenCurveThings, {}, [className])}>
      <motion.svg
        onViewportEnter={(entry) => {
          if (entry) {
            controls.start("visible")
          }
        }}
        width="1921" height="597" viewBox="0 0 1921 597" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          d="M-123.5 141H130.25H384H712.5C740.114 141 762.5 163.386 762.5 191V287.5H1100.5C1128.11 287.5 1150.5 309.886 1150.5 337.5V438H1490C1517.61 438 1540 460.386 1540 488V594H2159V124H1669C1641.39 124 1619 101.614 1619 74V0.5" stroke="var(--c-blue)" strokeWidth="4" />
      </motion.svg>

    </div>
  );
}