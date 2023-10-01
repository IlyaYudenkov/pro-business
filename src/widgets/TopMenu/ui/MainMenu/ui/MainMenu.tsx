import { FC } from 'react';
import { motion } from 'framer-motion';
import cls from './MainMenu.module.scss';
import MainMenuImage from 'shared/assets/img/Menu.svg';
import { MainMenuList } from './MainMenuList/MainMenuList';
import { dropIn } from './animate.settings';


export const MainMenu: FC = () => {

  return (
    <motion.div
      className={cls.Menu}
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={cls.Menu__wrap}>
        <MainMenuImage />
        <MainMenuList />
      </div>
    </motion.div>
  );
}