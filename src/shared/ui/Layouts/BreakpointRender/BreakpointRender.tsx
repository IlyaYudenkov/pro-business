import { FC, ReactNode } from 'react';
import cls from './BreakpointRender.module.scss'
import { classNames } from 'shared/lib/helpers/classNames/classNames';


interface LayoutProps{
    children: ReactNode,
    bp: 375 | 425 | 768 | 1024 | -1024 | 'desktop'
}

const BreakpointRender: FC<LayoutProps> = ({children, bp}) => {

  return (
    <div className={classNames(cls.inheritance, {[cls.bp375]: bp == 375, [cls.bp425]: bp == 425, [cls.bp768]: bp == 768, [cls.bp1024]: bp == 1024, [cls.bpmin1024]: bp == -1024, [cls.bpDesktop]: bp == 'desktop'})}>
      {children}
    </div>
   
  );
}

export default BreakpointRender;