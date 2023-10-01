'use client'
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './FfthScreenCard.module.scss';
import { IFfthScreenCard } from '../types/FfthScreenCard.interface';
import Image from 'next/image';

interface FfthScreenCardProps extends IFfthScreenCard {
  className?: string;
}

export const FfthScreenCard: FC<FfthScreenCardProps> = ({ number, title, description }) => {

  return (
    <>
      <div className={cls.welosyped}>
        <div className={cls.FfthScreenCard__number}>
          {<Image src={number} alt='' />}
        </div>
      </div>
      <div className={classNames(cls.FfthScreenCard)}>
        <div className={`${cls.FfthScreenCard__number} ${cls.hideonmobile}`}>
          {<Image src={number} alt='' />}
        </div>
        <div className={cls.mobileWrapper}>
          <div className={cls.FfthScreenCard__title}>
            {title}
          </div>
          <div className={cls.FfthScreenCard__description}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
}