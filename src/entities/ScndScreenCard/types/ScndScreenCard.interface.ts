import { StaticImageData } from "next/image";
import { ModalType } from 'shared/config/redux/slices/modalSlice';

export interface IScndCard {
  id: number,
  description: string,
  date: string,
  image: StaticImageData,
  type: ModalType
}