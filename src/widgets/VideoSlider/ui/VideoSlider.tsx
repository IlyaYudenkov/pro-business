'use client'

import { FC, useRef } from 'react';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cls from './VideoSlider.module.scss'
import './SliderRewrite.scss'
import "swiper/css";
import { SliderButton } from 'shared/ui/SliderButton/SliderButton';
import { IVideoSliderSlide, VideoSliderCard } from 'entities/VideoSliderCard';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { VideoEntity } from 'shared/types/strapi.interfaces';


// слайдов нужно нечетное кол-во, чтобы центральный окружали два по бокам


export const VideoSlider: FC<{slides: VideoEntity[]}> = ({slides}) => {
  const sliderRef = useRef<SwiperRef | null>(null);

  return (
    <div className={cls.container}>
      <Swiper 
        ref={sliderRef} 
        spaceBetween={0}
        initialSlide={1} 
        navigation={true} 
        modules={[Navigation]} 
        centeredSlides
        
        loop
        breakpoints={{
          1190: {
            slidesPerView: 1.9
          },
          450: {
            slidesPerView: 1.5

          },
          320: {
            slidesPerView: 1.1,
            centeredSlides: false
          },
        }}
        className={classNames(cls.mySwiper, {}, ['videoSlider'])}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <VideoSliderCard key={idx} {...slide} />
          </SwiperSlide> 
        ))}

      </Swiper>
      
      <SliderButton variant='white' className={cls.back} onClick={() => {
        sliderRef.current?.swiper.slidePrev();
      }}/>
      <SliderButton variant='white' className={cls.next} flip onClick={() => {
        sliderRef.current?.swiper.slideNext();
      }}/>
   
    </div>
  );
}
