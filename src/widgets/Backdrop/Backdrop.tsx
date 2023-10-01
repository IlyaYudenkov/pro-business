'use client'
import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cls from './Backdrop.module.scss';
import { useAppDispatch, useAppSelector } from 'shared/config/redux';
import { setMenuClose } from 'shared/config/redux/slices/menuSlice';
import { setModalClose } from 'shared/config/redux/slices/modalSlice';

interface BackdropProps {
  className?: string;
}


export const Backdrop: FC<BackdropProps> = ({}) => {
  const menu = useAppSelector(state => state.menu);
  const modalWindow = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();
  const menuClose = () => dispatch(setMenuClose());
  const modalClose = () => dispatch(setModalClose());
  return (
    <AnimatePresence>
      {modalWindow.isOpen || menu.isOpen ? <motion.div
        className={cls.Backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={menu.isOpen ? menuClose : modalClose}
      >
      </motion.div> : null}
    </AnimatePresence>
  );
}