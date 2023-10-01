import { MiddleSlider } from 'widgets/MiddleSlider';
import cls from './FrthScreen.module.scss'
import Link from 'next/link';
import { FC } from 'react';
import axios from 'axios';
import { $host } from 'shared/config/http/host';
import { IMiddleSliderSlide } from 'entities/MiddleSliderCard/types/MiddleSliderCard.interface';
import { IStrapiResponse } from 'shared/types/strapi.interfaces';


export const FrthScreen: FC = async () => {
  const portfolios = await $host.get<IStrapiResponse<Omit<IMiddleSliderSlide, "id">>>('/api/portfolios?populate=*').then(r => r.data.data)

  const slides: IMiddleSliderSlide[] = portfolios.map(i => ({id: i.id, ...i.attributes}))
  return (
    <div className={cls.frthScreen} id='portfolio'>
      <div className={cls.frthScreen__headline}>
        <div className={cls.headline__title}>Портфолио</div>
        <div className={cls.headline__subtitle}>
          <div className={cls.subtitle__info}>все портфолио можно посмотреть в моем профиле</div>
          <div className={cls.subtitle__link}>
            <Link href={'/'}>Валентина Голубева</Link>
          </div>
        </div>
      </div>
      <MiddleSlider slides={slides}/>
    </div>
    
  );
}