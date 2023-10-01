import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './TopBgCurves.module.scss';
import Image from 'next/image';
import leftMetal from 'shared/assets/img/METAL1.png'
import rightMetal from 'shared/assets/img/METAL2.png'
interface TopBgCurvesProps {
    className?: string;
}

export const TopBgCurves: FC<TopBgCurvesProps> = ({className}) => {

  return (
    <div className={classNames(cls.TopBgCurves, {}, [className])}>
      <div className={cls.leftCurve}><Image src={leftMetal} alt='leftMetal' fill/></div>
      <div className={cls.rightCurve}><Image src={rightMetal} alt='rightMetal' fill/></div>
    </div>
  );
}