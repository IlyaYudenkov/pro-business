import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './FfthScreen.module.scss';
import { Button } from 'shared/ui/Button/Button';
import TofuIcon from 'shared/assets/img/TOFU.svg'
import { FfthScreenCard } from 'entities/FfthScreenCard';
import First from 'shared/assets/img/FIRST.png';
import Second from 'shared/assets/img/SECOND.png';
import Third from 'shared/assets/img/THIRD.png';
import Fourth from 'shared/assets/img/FOURTH.png';
import { FfthScreenCurveThings } from 'shared/ui/Background/FfthScreenCurveThings/FfthScreenCurveThings';
import { FfthScreenCurveThingsMobile } from 'shared/ui/Background/FfthScreenCurveThings/FfthScreenCurveThings.mobile';
import Layout from 'shared/ui/Layouts/Layout/Layout';

interface FfthScreenProps {
  className?: string;
}

export const FfthScreen: FC<FfthScreenProps> = ({ className }) => {

  return (
    <>
      <div className={classNames(cls.FfthScreen, {}, [className])} id='siteMakingStages'>
        <Layout>

          <div className={cls.FfthScreen__top}>
            <div className={cls.top__description}>
              Для создания <span>сайта</span>, который отражает
              все <span>мои грани</span> работы, были
              разработаны <span>этапы</span>
            </div>
            <div className={cls.top__ToFuLink}>
              <div className={cls.ToFuLink__icon}>
                <TofuIcon />
              </div>
              <div className={cls.ToFuLink__link}>
                <Button variant='blue'>
                  <a href='https://tofu-studio.ru' target='_blank'>Перейти</a>
                </Button>
              </div>
            </div>
          </div>
        </Layout>
        <div className={cls.cards__background}>
          <FfthScreenCurveThings/>
        </div>
        <Layout>
          <div className={cls.FfthScreen__cards}>
            
            <div className={cls.cards__first}>
              <FfthScreenCard number={First} title={'Знакомство с моими методами'} description={'Обсуждаем Ваши идеи и желания. Проводим брифинг'} />
            </div>
            <div className={cls.cards__middle}>
              <div className={cls.middle__second}>
                <FfthScreenCard number={Second} title={'Поиск стилей и референсов'} description={'Просмотр аналогов и конкурентов'} />
              </div>
              <div className={cls.middle__third}>
                <FfthScreenCard number={Third} title={'Создание дизайн макетов'} description={'Согласование прошлых этапов и начало проектирования'} />
              </div>
            </div>
            <div className={cls.cards__fourth}>
              <FfthScreenCard number={Fourth} title={'Программирование'} description={'Передача макетов программисту и создание полноценного сайта'} />
            </div>
          </div>

          <div className={cls.mobileCards}>
            <FfthScreenCurveThingsMobile />
            <div className={cls.mobileCardsRow}>
              <FfthScreenCard number={First} title={'Знакомство с моими методами'} description={'Обсуждаем Ваши идеи и желания. Проводим брифинг'} />
              <FfthScreenCard number={Second} title={'Поиск стилей и референсов'} description={'Просмотр аналогов и конкурентов'} />
            </div>
            <div className={cls.mobileCardsRow}>
              <FfthScreenCard number={Third} title={'Создание дизайн макетов'} description={'Согласование прошлых этапов и начало проектирования'} />
              <FfthScreenCard number={Fourth} title={'Программирование'} description={'Передача макетов программисту и создание полноценного сайта'} />
            </div>
          </div>
      
          <div className={cls.tofuMobile}>
            <div className={cls.image}><TofuIcon /></div>
            <div className={cls.rside}>
              <div className={cls.title}>
                Команда <br />
                TOFU-STUDIO
              </div>
              <a href='https://tofu-studio.ru' target='_blank' className={cls.btn}>Перейти</a>
            </div>
          </div>
        </Layout>
      </div>
      
    </>
  );
}