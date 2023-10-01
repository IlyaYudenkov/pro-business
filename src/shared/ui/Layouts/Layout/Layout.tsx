import { FC, ReactNode } from 'react';
import cls from './Layout.module.scss'


interface LayoutProps{
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {

  return (
    <div className={cls.container}>
      {children}
    </div>
   
  );
}

export default Layout;