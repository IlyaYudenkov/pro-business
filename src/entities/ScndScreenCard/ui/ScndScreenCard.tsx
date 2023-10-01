'use client'
import { FC } from 'react'
import style from './ScndScreenCard.module.scss'
import Image from 'next/image';
import { Button } from 'shared/ui/Button/Button';
import { store } from 'shared/config/redux';
import { setModalOpen } from 'shared/config/redux/slices/modalSlice';
import { DiplomEntity } from 'shared/types/strapi.interfaces';
import { getStatic } from 'shared/config/http/helpers/getStatic';




interface ScndScreenCardProps extends DiplomEntity {
  id: number;
  className?: string;
}

export const ScndScreenCard: FC<ScndScreenCardProps> = ({ id, year, title, image }) => {


  return (
    <div className={style.achievements__cart}>
      <div className={style.cart__top}>
        <Image src={getStatic(image)} alt='' fill/>
        <div className={style.top__open} >
          <Button variant='white' className={style.button} rounded onClick={() => store.dispatch(setModalOpen({ id, type: 'diplom' }))}>Открыть</Button>
        </div>

      </div>
      <div className={style.cart__bottom}>
        <div className={style.bottom__date}>{year}</div>
        <div className={style.bottom__description}>{title}</div>
      </div>
    </div>
  );
}