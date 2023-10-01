'use client'
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './DiplomModal.module.scss';
import Image from 'next/image';
import { $host } from 'shared/config/http/host';
import { getStatic } from 'shared/config/http/helpers/getStatic';
import { DiplomEntity, IStrapiSingleResponse } from 'shared/types/strapi.interfaces';
import useSWR from 'swr'
import { $hostGet } from 'shared/config/http/helpers/hostGet';

interface DiplomModalProps {
  className?: string;
  id: number
}



export const DiplomModal: FC<DiplomModalProps> =  ({ id, className }) => {
  const { data, error, isLoading } = useSWR<IStrapiSingleResponse<DiplomEntity>>(id ? `/api/diplomies/${id}?populate=*` : null, $hostGet)

 
  if(!data) return (
    <div className={classNames(cls.DiplomEmptyModal, {}, [className])}></div>
  )
  return (
    <div className={classNames(cls.DiplomModal, {}, [className])}>
      <div className={cls.DiplomModal__image}>
        <Image src={getStatic(data.data.attributes.image)} alt={''} fill/>
      </div>
      <div className={cls.DiplomModal__date}>{data.data.attributes.year}</div>
      <div className={cls.DiplomModal__title} dangerouslySetInnerHTML={{__html: `${data.data.attributes.title}`}}></div>
    </div>
  );
}