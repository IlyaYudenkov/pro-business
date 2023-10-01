'use client'

import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './EightScreenContacts.module.scss';
import Vector from 'shared/assets/img/VectorForm.svg'
import Link from 'next/link';

interface EightScreenContactsProps {
  className?: string;
}

export const EightScreenContacts: FC<EightScreenContactsProps> = ({ className }) => {

  return (
    <div className={classNames(cls.EightScreenContacts, {}, [className])}>
      <div className={cls.EightScreenContacts__info}>
        Если вы хотите обсудить услуги или связаться со мной <span>заполните форму</span>  или <span>напишите в социальные сети</span>
      </div>
      <div className={cls.EightScreenContacts__links}>
        <div className={cls.links__self}>
          <div className={cls.self__title}>
            TenChat
          </div>
          <div className={cls.self__reference}>
            <div className={cls.reference__vector}>
              <Vector />
            </div>
            <div className={cls.reference__account}>
              <Link href={''}>@Valentine_me2022</Link>
            </div>
          </div>
        </div>
        <div className={cls.links__self}>
          <div className={cls.self__title}>Telegram</div>
          <div className={cls.self__reference}>
            <div className={cls.reference__vector}>
              <Vector />
            </div>
            <div className={cls.reference__account}>
              <Link href={''}>@ProBusiness</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}