'use client'

import { MiddleSliderCard } from 'entities/MiddleSliderCard';
import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cls from './MiddleSlider.module.scss'
import "swiper/css";
import { SliderButton } from 'shared/ui/SliderButton/SliderButton';
import { IMiddleSliderSlide } from 'entities/MiddleSliderCard/types/MiddleSliderCard.interface';



export const MiddleSlider: FC<{slides: IMiddleSliderSlide[]}> = ({ slides }) => {

  const sliderRef = useRef<SwiperRef | null>(null);

  
  return (
    <>
      <Swiper ref={sliderRef} spaceBetween={14} breakpoints={{
        1441: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 3.5
        },
        768: {
          slidesPerView: 2.4
        },
        375: {
          slidesPerView: 1.5
        },

        320: {
          slidesPerView: 1.2
        },
      }} slidesPerView={4.5} navigation={true} modules={[Navigation]} className={cls.mySwiper}>
        {slides.map(portfolioCard => (
          <SwiperSlide key={portfolioCard.id}>
            <MiddleSliderCard id={portfolioCard.id} content={portfolioCard.content} title={portfolioCard.title} tags={portfolioCard.tags} image={portfolioCard.image} />
          </SwiperSlide>
        ))}

      </Swiper>
      <div className={cls.navigation__buttons}>
        <SliderButton variant='green' className={cls.buttons__back} onClick={() => {
          sliderRef.current?.swiper.slidePrev();
        }} />
        <SliderButton variant='green' className={cls.buttons__next} flip onClick={() => {
          sliderRef.current?.swiper.slideNext();
        }} />
      </div>
    </>
  );
}
