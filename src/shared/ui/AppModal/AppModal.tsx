import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './AppModal.module.scss';

interface ModalProps {
    className?: string;
}

export const AppModal: FC<ModalProps> = ({className}) => {

  return (
    <div className={classNames(cls.Modal, {}, [className])}> </div>
  );
}