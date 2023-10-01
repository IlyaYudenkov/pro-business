
import { FC } from 'react';
import cls from './VideoSliderCard.module.scss';
import { IVideoSliderSlide } from '../types/VideoSliderCard.interface';
import { VideoEntity } from 'shared/types/strapi.interfaces';

interface VideoSliderCardProps extends VideoEntity {
  className?: string;
}

export const VideoSliderCard: FC<VideoSliderCardProps> = ({ link, className }) => {

  return (
    <div className={cls.slide}>
      <iframe className={cls.iframe}  src={link} title="video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
}