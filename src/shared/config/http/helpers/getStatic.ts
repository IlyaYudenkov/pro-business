import { StrapiImage } from "shared/types/strapi.interfaces";

export const getStatic = (src: StrapiImage) => process.env.NEXT_PUBLIC_API_URL + src.data.attributes.url