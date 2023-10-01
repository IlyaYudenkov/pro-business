"use client"

import { FC, MouseEvent } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ThrdScreen.module.scss';
import { RightCurveThings } from 'shared/ui/Background/RightCurveThings/RightCurveThings';
import { RuleCard } from 'entities/RuleCard/ui/RuleCard';

//assets
import Sticker1 from 'shared/assets/img/sticker-31.png'
import Number1 from 'shared/assets/img/FIRST.png'

import Sticker2 from 'shared/assets/img/sticker-1.png'
import Number2 from 'shared/assets/img/SECOND.png'

import Sticker3 from 'shared/assets/img/sticker-21.png'
import Number3 from 'shared/assets/img/THIRD.png'
import { useAnimation } from 'framer-motion';
import Layout from 'shared/ui/Layouts/Layout/Layout';

interface ThrdScreenProps {
    className?: string;
}

const cards = [
  {NumberImage: Number1, stickerImage: Sticker1, title: 'Внимание на целях <br /> и задачах'},
  {NumberImage: Number2, stickerImage: Sticker2, title: 'Фокус на процессе, <br /> а не на результате'},
  {NumberImage: Number3, stickerImage: Sticker3, title: 'Помощь в раскрытии <br /> потенциала клиента'},
]

export const ThrdScreen: FC<ThrdScreenProps> = ({className}) => {
  const controls = useAnimation();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    const offsetFactor = 50
    controls.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
      transition: { duration: 1 }
    })
  }

  return (
    <>
      <div className={classNames(cls.ThrdScreen, {}, [className])} onMouseMove={handleMouseMove}>
        <Layout>
          <div className={cls.titleWrapper}>
            <RightCurveThings controls={controls}/> {/* фоновые элементы справа */}
            <h2 className={cls.h2}>
              <span className={cls.whiteThin}>Мой подход</span> к достижению цели, заключается 
              в соблюдении <span className={cls.whiteBold}>3 важных правил</span>
            </h2>
          </div>
        </Layout>
        <div className={cls.ruleCardsWrapper}>
          {cards.map((i, idx) => <RuleCard key={idx} delay={idx} {...i}/>)}
        </div>
      </div>
    </>
  );
}