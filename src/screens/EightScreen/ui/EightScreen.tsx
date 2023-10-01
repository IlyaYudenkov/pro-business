
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './EightScreen.module.scss';
import { ContactForm } from 'widgets/ContactForm/ContactForm';
import { EightScreenContacts } from 'entities/EightScreenContacts/EightScreenContacts';

interface EightScreenProps {
  className?: string;
}

export const EightScreen: FC<EightScreenProps> = ({ className }) => {

  return (
    <div className={classNames(cls.EightScreen, {}, [className])}>
      <EightScreenContacts />
      <div className={cls.EightScreen__form}>
        <ContactForm theme=''/>
      </div>

    </div>
  );
}