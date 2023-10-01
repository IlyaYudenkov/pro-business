import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SliderButton.module.scss';
import ArrowIcon from 'shared/assets/img/aarrow.svg'


interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant: 'white' | 'green';
    flip?: boolean;
}

export const SliderButton: FC<SliderButtonProps> = ({className, flip = false, variant, ...otherProps}) => {

  return (
    <button {...otherProps} className={classNames(cls.SliderButton, {[cls.rotate]: flip}, [className, cls[variant]])}><ArrowIcon /></button>
  );
}