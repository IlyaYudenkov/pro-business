import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './PortfolioModal.module.scss';
import Image from 'next/image';
import { IStrapiSingleResponse, PortfolioEntity } from 'shared/types/strapi.interfaces';
import useSWR from 'swr';
import { $hostGet } from 'shared/config/http/helpers/hostGet';
import { getStatic } from 'shared/config/http/helpers/getStatic';


interface PortfolioModalProps {
  className?: string;
  id: number
}

export const PortfolioModal: FC<PortfolioModalProps> = ({ id, className }) => {
  const { data, error, isLoading } = useSWR<IStrapiSingleResponse<PortfolioEntity>>(id ? `/api/portfolios/${id}?populate=*` : null, $hostGet)

  
  if(!data) return (
    <div className={classNames(cls.DiplomEmptyModal, {}, [className])}>
    </div>
  )

  return (
    <div className={classNames(cls.PortfolioModal, {}, [className])}>
      <div className={cls.PortfolioModal__top} >
        <div className={cls.top__backGround} style={{backgroundImage:`url(${getStatic(data.data.attributes.image)})`}}></div>
        <div className={cls.top__image}>
          {<Image src={getStatic(data.data.attributes.image)} width={500} height={500} alt={''} />}
        </div>
      </div>
      <div className={cls.PortfolioModal__bottom}>
        <div className={cls.bottom__tags}>{data.data.attributes.tags.data.map(i => <div key={i.id}>{i.attributes.title}</div>)}</div>
        <h1 className={cls.bottom__title}>{data.data.attributes.title}</h1>
        <div className={cls.bottom__text} dangerouslySetInnerHTML={{ __html: `${data.data.attributes.content}` }}></div>
      </div>
    </div>
  );
}