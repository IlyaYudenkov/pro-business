import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SvnScreen.module.scss';
import { VideoSlider } from 'widgets/VideoSlider';
import { $host } from 'shared/config/http/host';
import { StrapiVideo } from 'shared/types/strapi.interfaces';

interface SvnScreenProps {
    className?: string;
}

export const SvnScreen: FC<SvnScreenProps> = async ({className}) => {
  const videos = await $host.get<StrapiVideo>('/api/videos?populate=*').then(r => r.data.data)

  return (
    <div className={classNames(cls.SvnScreen, {}, [className])} id='videoSlider'>
      <VideoSlider slides={videos.map(i => ({link: i.attributes.link}))} />
    </div>
  );
}