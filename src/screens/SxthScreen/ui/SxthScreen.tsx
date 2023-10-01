import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SxthScreen.module.scss';
import { SxthScreenCard } from 'entities/SxthScreenCard';
import { $host } from 'shared/config/http/host';
import { StrapiUslugi } from 'shared/types/strapi.interfaces';
import { ServiceBgCurve } from 'shared/ui/Background/ServiceBgCurve/ServiceBgCurve';

interface SxthScreenProps {
    className?: string;
}

export const SxthScreen: FC<SxthScreenProps> = async ({className}) => {

  const cards = await $host.get<StrapiUslugi>('/api/uslugis?populate=*').then(r => r.data.data)

  return (
    <div className={classNames(cls.SxthScreen, {}, [className])} id='services'>
      <ServiceBgCurve /> {/* фоновый элемент слева */}
      <div className={cls.SxthScreen__title}>Услуги</div>
      <div className={cls.SxthScreen__cards}>
        {cards.map(card => (
          <SxthScreenCard id={card.id} key={card.id} {...card.attributes} />
        ))}
      </div>
      
    </div>
  );
}