"use client"
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './RuleCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { variants } from './animate.settings';
interface RuleCardProps {
    className?: string;
    NumberImage: StaticImageData;
    stickerImage: StaticImageData;
    title: string;
    delay: number; // задержка анимации для номеров
}

export const RuleCard: FC<RuleCardProps> = ({NumberImage, title, stickerImage, className, delay}) => {
  const controls = useAnimation();
  const variant = variants(delay);
  return (
    <div className={classNames(cls.RuleCard, {}, [className])}>
      <motion.div 
        className={cls.number}
        onViewportEnter={(entry) => {
          if(entry) {
            controls.start("visible")
          }
        }}
        variants={variant}
        initial="hidden"
        animate={controls}
      >
        <Image src={NumberImage} alt='sticker'/>
      </motion.div>
      <div className={cls.sticker}>
        <Image src={stickerImage} alt='sticker' quality={100}/>
      </div>
      <div className={cls.title} dangerouslySetInnerHTML={{__html: title}}></div>
    </div>
  );
}