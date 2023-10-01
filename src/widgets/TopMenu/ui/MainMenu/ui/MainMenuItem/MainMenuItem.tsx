import { FC } from 'react';
import cls from './MainMenuItem.module.scss';
import { store } from 'shared/config/redux';
import { setMenuClose } from 'shared/config/redux/slices/menuSlice';

interface MenuItemProps {
  pointName: string,
  link: string,
  noBorder?: boolean
}

export const MainMenuItem: FC<MenuItemProps> = ({ pointName, link, noBorder }) => {
  const scrollTo = () => {
    const section = document.querySelector( `${link}` );
    section?.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  }
  return (
    <div className={!noBorder ? cls.MenuItem : cls.MenuItemNoBorder} onClick={() => store.dispatch(setMenuClose())}>
      <button onClick={scrollTo}>
        {pointName}
      </button>
    </div>
  );
}