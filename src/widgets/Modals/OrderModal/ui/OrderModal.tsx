"use client"
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './OrderModal.module.scss';
import { ContactForm } from 'widgets/ContactForm/ContactForm';
import useSWR from 'swr';
import { IStrapiSingleResponse, UslugiEntity } from 'shared/types/strapi.interfaces';
import Image from 'next/image';
import { getStatic } from 'shared/config/http/helpers/getStatic';
import { $hostGet } from 'shared/config/http/helpers/hostGet';

interface OrderModalProps {
  className?: string;
  id: number
}


export const OrderModal: FC<OrderModalProps> = ({ id, className }) => {
  const { data, error, isLoading } = useSWR<IStrapiSingleResponse<UslugiEntity>>(id ? `/api/uslugis/${id}?populate=*` : null, $hostGet)


  if(!data) return (
    <div className={classNames(cls.OrderEmptyModal, {}, [className])}></div>
  )

  return (
    <div className={cls.OrderModal}>
      <div className={cls.OrderModal__logo}>
        <Image src={getStatic(data.data.attributes.image)} alt='' fill quality={100}/>
      </div>
      <div className={cls.OrderModal__price}>{data.data.attributes.cost}</div>
      <h1 className={cls.OrderModal__title} dangerouslySetInnerHTML={{__html: data.data.attributes.title}}></h1>
      <div className={cls.OrderModal__form}>
        <ContactForm theme={data.data.attributes.description}/>
      </div>
    </div>
  );
}