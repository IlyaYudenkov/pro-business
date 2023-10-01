import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Footer.module.scss';
import TofuIcon from 'shared/assets/img/TOFU.svg'
import { ScrollTopBtn } from 'features/ScrollTopBtn';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({className}) => {

  return (
    <div className={classNames(cls.Footer, {}, [className])}> 
      <ScrollTopBtn/>
      <div className={cls.Footer__info}>
        <div className={cls.info__date}>
          PROBUSINESS-©2023
        </div>
        <a className={cls.info__madeBy} href='https://tofu-studio.ru' target='_blank'>
          <div className={cls.madeBy__team}>Создано командой</div>
          <div className={cls.madeBy__icon}>
            <TofuIcon/>
          </div>
        </a>
      </div>
    </div>
  );
}