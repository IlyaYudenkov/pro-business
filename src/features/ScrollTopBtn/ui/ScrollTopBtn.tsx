'use client'

import { FC } from 'react';
import cls from './ButtonUp.module.scss';
import ArrowUp from 'shared/assets/img/ArrowUp.svg'
import ArrowUpBlue from 'shared/assets/img/ArrowUpBlue.svg'
import { Button } from 'shared/ui/Button/Button';

interface ScrollTopBtnProps {
    className?: string;
}

export const ScrollTopBtn: FC<ScrollTopBtnProps> = ({className}) => {
  const toBegin = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })}
  
  return (
    <div className={cls.ButtonUp}>
      <Button variant='white' onClick={toBegin}>
        <ArrowUp className={cls.arrowUp}/>
        <ArrowUpBlue className={cls.arrowUpBlue}/>
        Вверх
      </Button>
    </div>
    
  );
}