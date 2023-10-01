import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './MainMenuList.module.scss';
import { MainMenuItem } from '../MainMenuItem/MainMenuItem';
import CloseMenu from 'shared/assets/img/CloseMenu.svg'
import { Button } from 'shared/ui/Button/Button';
import { store } from 'shared/config/redux';
import { setMenuClose } from 'shared/config/redux/slices/menuSlice';

interface MenuListProps {
  className?: string;
}

const screenLinks = [
  { pointName: 'Обо мне', link: '#aboutMe' },
  { pointName: 'Портфолио', link: '#portfolio' },
  { pointName: 'Этапы создания сайта', link: '#siteMakingStages' },
  { pointName: 'Услуги', link: '#services' },
  { pointName: 'Видео', link: '#videoSlider', noBorder: true }
]

export const MainMenuList: FC<MenuListProps> = ({ className }) => {
  const scrollTo = () => {
    const section = document.querySelector( '#contactForm' );
    section?.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  }
  return (
    <div className={classNames(cls.MenuList, {}, [className])}>
      {screenLinks.map((screenLink, index) => (
        <MainMenuItem key={index} pointName={screenLink.pointName} link={screenLink.link} noBorder={screenLink.noBorder} />
      ))}
      <div className={cls.MenuList__button} onClick={() => store.dispatch(setMenuClose())}>
        <Button variant='white' onClick={scrollTo}>Оставить заявку</Button>
      </div>
      <button className={cls.MenuList__close} onClick={() => store.dispatch(setMenuClose())}>
        <CloseMenu />
      </button>

    </div>
  );
}