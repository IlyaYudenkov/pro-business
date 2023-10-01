'use client'

import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './TopMenu.module.scss';
import MenuBurger from 'shared/assets/img/MenuBurger.svg'
import { motion, AnimatePresence } from 'framer-motion';
import { setMenuOpen } from 'shared/config/redux/slices/menuSlice';
import { useAppDispatch, useAppSelector } from 'shared/config/redux';
import { MainMenu } from './MainMenu/ui/MainMenu';


interface MenuWrapperProps {
  className?: string;
}

export const TopMenu: FC<MenuWrapperProps> = ({ className }) => {
  const menu = useAppSelector(state => state.menu)
  const modal = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch();
  const openMenu = () => dispatch(setMenuOpen())

  useEffect(() => {
    if (menu.isOpen) {
      setTimeout(() => {
        document.body.style.overflow = 'hidden';
        if(window.innerWidth > 1000) {
          document.body.style.paddingRight = '17px';
        }
      }, 100)
    }
    else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0'
    }
  }, [menu.isOpen])

  return (
    <div className={classNames(cls.TopMenu, {}, [className])}>
      <AnimatePresence >
        {!menu.isOpen ? !modal.isOpen ?
          <motion.button key={'btn'} exit={{ top: '-60px' }} onClick={openMenu} className={cls.MenuBurger}>
            <MenuBurger />
          </motion.button> : null
          :
          !modal.isOpen ? <MainMenu key={'menu'} /> : null
        }
      </AnimatePresence>
    </div>
  );
}