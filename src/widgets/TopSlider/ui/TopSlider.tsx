'use client'

import { FC, forwardRef, useRef, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './TopSlider.module.scss';
import { TopSliderCard, type ISlide } from 'entities/TopSliderCard';
import { SliderButton } from 'shared/ui/SliderButton/SliderButton';
import { config } from "react-spring";
import Carousel from 'react-spring-3d-carousel';
import dynamic from 'next/dynamic';
import BreakpointRender from 'shared/ui/Layouts/BreakpointRender/BreakpointRender';


const DynamicCarousel = dynamic(() => import('../WrappedCarousel/WrappedCarousel'), {ssr: false});

const ForwardedRefComponent = forwardRef<Carousel, Carousel['props']>((props, ref) => <DynamicCarousel props={props} carouselRef={ref} />)
ForwardedRefComponent.displayName = "ForwardedRefComponent";

export const TopSlider: FC<{slides:ISlide[]}> =  ({slides}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<Carousel | null>(null)
  const sliderRefCopy = useRef<Carousel | null>(null)

  
  return (
    <div className={classNames(cls.sliderWrapper)}>
      <SliderButton
        className={cls.back}
        variant='white'
        onClick={() => {
          sliderRef.current?.moveSlide(-1)
          sliderRefCopy.current?.moveSlide(-1)
          setActiveIndex(sliderRefCopy.current?.state.index! || sliderRef.current?.state.index!)

        }}
      />
      <BreakpointRender bp="desktop">
        <ForwardedRefComponent
          goToSlideDelay={0}
          slides={slides.map(i => ({
            key: i.id,
            content: <TopSliderCard title={i.title} type={i.type} btnText={i.btnText} link={i.link} tags={i.tags} image={i.image} key={i.id} id={i.id} />
          }))}
          offsetRadius={1}
          showNavigation={false}
          animationConfig={config.gentle}
          ref={sliderRef}
          offsetFn={(offsetFromRadius, index) => {
            const scale = 1 - Math.abs(offsetFromRadius) / 10; // Изменение масштаба слайдов в зависимости от их отступа от центра
            const opacity = 1 - Math.abs(offsetFromRadius) / 2; // Изменение прозрачности слайдов в зависимости от их отступа от центра
            const transform = `translate3d(calc(${offsetFromRadius * -150}px - 50%), -50%, 0) scale(${scale})`; // Смещение слайда влево или вправо
            return {
              transform, // Положение слайдов
              opacity, // Прозрачность слайдов
              zIndex: slides.length - Math.abs(index), // Определяем порядок слоев слайдов
            };
          }}
        
        />
      </BreakpointRender>

      <BreakpointRender bp={768}>
        <ForwardedRefComponent
          goToSlideDelay={0}
          slides={slides.map(i => ({
            key: i.id,
            content: <TopSliderCard title={i.title} type={i.type} btnText={i.btnText} link={i.link} tags={i.tags} image={i.image} key={i.id} id={i.id} />
          }))}
          offsetRadius={1}
          showNavigation={false}
          animationConfig={config.gentle}
          ref={sliderRefCopy}
          offsetFn={(offsetFromRadius, index) => {
            const scale = 1 - Math.abs(offsetFromRadius) / 10; // Изменение масштаба слайдов в зависимости от их отступа от центра
            const opacity = 1 - Math.abs(offsetFromRadius) / 2; // Изменение прозрачности слайдов в зависимости от их отступа от центра
            const transform = `translate3d(calc(${offsetFromRadius * -50}px - 50%), -50%, 0) scale(${scale})`; // Смещение слайда влево или вправо
            return {
              transform, // Положение слайдов
              opacity, // Прозрачность слайдов
              zIndex: slides.length - Math.abs(index), // Определяем порядок слоев слайдов
            };
          }}
        
        />

        <div className={cls.dots}>
          {[0,1,2].map((index) => <div key={index} className={classNames(cls.dot, {[cls.activeDot]: activeIndex == index})}></div>)}
        </div>
      </BreakpointRender>

      

      <SliderButton
        className={cls.next}
        variant='white'
        onClick={() => {
          sliderRef.current?.moveSlide(1)
          sliderRefCopy.current?.moveSlide(1)
          setActiveIndex(sliderRefCopy.current?.state.index! || sliderRef.current?.state.index!)
        }}
        flip
      />
    </div>
  );
}