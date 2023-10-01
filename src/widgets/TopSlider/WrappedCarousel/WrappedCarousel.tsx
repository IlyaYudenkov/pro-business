'use client'

import React, { ForwardedRef } from 'react';
import Carousel from 'react-spring-3d-carousel';

export default function WrappedCarousel({ carouselRef, props }: {carouselRef: ForwardedRef<Carousel>, props: Carousel['props']}) {
  return <Carousel {...props} ref={carouselRef} />;
}