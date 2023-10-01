import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    rounded?: boolean;
    isLoading?: boolean;
    variant: 'blue' | 'white' | 'black';
}

export const Button: FC<ButtonProps> = ({ className, children, rounded = false, isLoading = false, variant, ...otherProps }) => {
  return (
    <button {...otherProps} className={classNames(cls.Button, {[cls.round]: rounded, [cls._isLoading] : isLoading}, [className, cls[variant]])}>{children}</button>
  );
}