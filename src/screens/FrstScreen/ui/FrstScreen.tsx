import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './FrstScreen.module.scss';
import { TopSlider } from 'widgets/TopSlider';
import Slide1MockImage from 'shared/assets/img/mock1.jpg'
import { ISlide } from 'entities/TopSliderCard';
import { $host } from 'shared/config/http/host';
import { StrapiTopSliderCard } from 'shared/types/strapi.interfaces';

interface FrstScreenProps {
    className?: string;
}

export const revalidate = 60;

export const FrstScreen: FC<FrstScreenProps> = async ({className}) => {
  const topSliderCards = await $host.get<StrapiTopSliderCard>('api/verhnie-kartochkis?populate=*').then(r => r.data.data)

  const slideCards: ISlide[] = topSliderCards.map(i => ({id: i.id, ...i.attributes}))

  return (
    <div className={classNames(cls.FrstScreen, {}, [className])}>
      <div className={cls.sliderWrapper}>
        <TopSlider slides={slideCards}/>
      </div>
    </div>
  );
}