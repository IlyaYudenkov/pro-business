import { FC } from 'react';
import cls from './MiddleSliderCard.module.scss';
import Image from 'next/image';
import { Button } from 'shared/ui/Button/Button';
import { store } from 'shared/config/redux';
import { setModalOpen } from 'shared/config/redux/slices/modalSlice';
import { getStatic } from 'shared/config/http/helpers/getStatic';
import { PortfolioEntity } from 'shared/types/strapi.interfaces';


interface MiddleSliderCardProps extends PortfolioEntity {
  className?: string;
  id: number;
}

export const MiddleSliderCard: FC<MiddleSliderCardProps> = ({id, title, tags, image }) => {

  return (
    <div className={cls.slide}>
      <div className={cls.slide__top}>
        <Image src={getStatic(image)} alt='' fill />
      </div>
      <div className={cls.slide__bottom}>
        <div className={cls.bottom__tag}>{tags.data.map(i => i.attributes.title)}</div>
        <div className={cls.bottom__description}>{title.length > 50 ? title.slice(0, 50) + '...' : title}</div>
        <Button variant='blue' onClick={() => store.dispatch(setModalOpen({ id, type: 'portfolio' }))}>Читать</Button>
      </div>
    </div>
  );
}