import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ServiceBgCurve.module.scss';
import Image from 'next/image';

import leftMetal from 'shared/assets/img/METAL4.png'; 
import rightMetal from 'shared/assets/img/METAL5.png'; 

interface ServiceBgCurveProps {
    className?: string;
}

export const ServiceBgCurve: FC<ServiceBgCurveProps> = ({className}) => {

  return (
    <div className={classNames(cls.BottomBgCurves, {}, [className])}>
      <div className={cls.leftCurve}><Image src={leftMetal} alt='leftMetal' fill/></div>
    </div>
  );
}