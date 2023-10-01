import { ModalType } from "shared/config/redux/slices/modalSlice";

export interface IStrapiResponse<T> {
    data: {
        id: number;
        attributes: T
    }[]
}

export interface IStrapiSingleResponse<T> {
    data: {
        id: number;
        attributes: T
    }
}


export interface ImageEntity {
    name: string, 
    width: number, 
    height: number, 
    hash: string,
    ext: string,
    url: string
}

interface StrapiImageResponse extends ImageEntity {
    
    formats: {
        thumbnail: ImageEntity,
        small: ImageEntity
    } | null
}

export type StrapiImage = IStrapiSingleResponse<StrapiImageResponse>


export interface TagEntity {
    title: string
}

export type StrapiTag = IStrapiResponse<TagEntity>

export interface DiplomEntity {
    title: string,
    year: string,
    image: StrapiImage
}

export type StrapiDiplom = IStrapiResponse<DiplomEntity>

export interface UslugiEntity {
    title: string,
    cost: string,
    image: StrapiImage,
    description: string,
}

export type StrapiUslugi = IStrapiResponse<UslugiEntity>


export interface PortfolioEntity {
    title: string,
    image: StrapiImage,
    content: string,
    tags: StrapiTag
}

export type StrapiPortfolio = IStrapiResponse<PortfolioEntity>

export interface TopSliderCardEntity{
    title: string,
    type: ModalType,
    btnText: string,
    link?: string,
    tags: StrapiTag,
    image: StrapiImage,
}

export type StrapiTopSliderCard = IStrapiResponse<TopSliderCardEntity>


export interface VideoEntity {
    link: string;
}

export type StrapiVideo = IStrapiResponse<VideoEntity>