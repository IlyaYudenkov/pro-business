import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './TopSliderCard.module.scss';
import Image from 'next/image';
import { Button } from 'shared/ui/Button/Button';
import { store } from 'shared/config/redux';
import { setModalOpen } from 'shared/config/redux/slices/modalSlice';
import { TopSliderCardEntity } from 'shared/types/strapi.interfaces';
import { getStatic } from 'shared/config/http/helpers/getStatic';

interface TopSliderCardProps extends TopSliderCardEntity {
  className?: string;
  id: number;
}
const linkTo = (link: string) => {
  window.open(link, '_blank')?.focus();
}
export const TopSliderCard: FC<TopSliderCardProps> = ({ id, type, className, btnText, image, tags, title, link }) => {

  return (
    <div className={classNames(cls.SliderCard, {}, [className])}>
      <div className={cls.cardImage}><Image src={getStatic(image)} alt={title} fill sizes='' quality={100}/> </div>
      <div className={cls.tags}>{tags.data.map((i, idx) => <div className={cls.tag} key={idx}>{i.attributes.title}</div>)}</div>
      <div className={cls.title}>{title}</div>
      <Button variant='black' onClick={!link ? () => store.dispatch(setModalOpen({ id, type })) : () => linkTo(link)}>{btnText}</Button>
    </div>
  );
}