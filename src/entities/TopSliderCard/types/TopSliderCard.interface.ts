import { ModalType } from 'shared/config/redux/slices/modalSlice';
import { StrapiImage, StrapiTag } from 'shared/types/strapi.interfaces';

export interface ISlide {
    id: number;
    title: string;
    tags: StrapiTag;
    image: StrapiImage;
    type: ModalType,
    btnText: string,
    link?: string 
}
