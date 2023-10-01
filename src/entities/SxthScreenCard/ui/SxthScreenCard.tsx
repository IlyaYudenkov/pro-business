'use client'
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SxthScreenCard.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { store } from 'shared/config/redux';
import { setModalOpen } from 'shared/config/redux/slices/modalSlice';
import Image from 'next/image';
import { UslugiEntity } from 'shared/types/strapi.interfaces';
import { getStatic } from 'shared/config/http/helpers/getStatic';


interface SxthScreenCardProps extends UslugiEntity {
  id: number;
  className?: string
}

export const SxthScreenCard: FC<SxthScreenCardProps> = ({id, image, description }) => {
  
  return (
    <div className={classNames(cls.SxthScreenCard)}>
      <div className={cls.SxthScreenCard__title}>
        <Image src={getStatic(image)} width={image.data.attributes.width} height={image.data.attributes.height } alt=''/>
      </div>
      <div className={cls.SxthScreenCard__info}>
        <div className={cls.info__description}>{description}</div>
        <Button variant={'blue'} onClick={() => store.dispatch(setModalOpen({id, type: 'order'}))}>Узнать</Button>
      </div>

    </div>
  );
}