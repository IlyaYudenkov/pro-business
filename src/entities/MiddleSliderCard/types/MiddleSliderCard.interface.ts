import { StrapiImage, StrapiTag } from 'shared/types/strapi.interfaces';

export interface IMiddleSliderSlide {
    id: number;
    content: string;
    title: string;
    tags: StrapiTag;
    image: StrapiImage;
}
