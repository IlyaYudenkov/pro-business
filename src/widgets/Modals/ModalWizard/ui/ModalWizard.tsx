"use client"

import { FC, useCallback, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './ModalWizard.module.scss';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'shared/config/redux';
import { DiplomModal } from 'widgets/Modals/DiplomModal';
import { animationSettings } from './animate.settings';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside';
import { setModalClose } from 'shared/config/redux/slices/modalSlice';
import { useScrollConstraints } from 'shared/lib/hooks/useScrollConstraints/useScrollConstraints';
import { useWheelScroll } from 'shared/lib/hooks/useWheelScrolls/useWheelScrolls';
import { PortfolioModal } from 'widgets/Modals/PortfolioModal';
import { OrderModal } from 'widgets/Modals/OrderModal';

interface ModalWizardProps {
  className?: string;
}

export const ModalWizard: FC<ModalWizardProps> = ({ className }) => {
  const modal = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const closeModal = () => dispatch(setModalClose())

  const ref = useClickOutside<HTMLDivElement>(closeModal)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // делаем красивый скролл
  const y = useMotionValue(0);
  const constraints = useScrollConstraints(ref, modal.isOpen);

  function checkSwipeToDismiss() {
    y.get() > 150 && closeModal();
  }

  useWheelScroll(
    wrapperRef,
    y,
    constraints,
    checkSwipeToDismiss,
    modal.isOpen
  );
  //-----------------------

  const renderModal = useCallback(() => {
    switch (modal.type) {
    case 'diplom':
      return <DiplomModal id={modal.id!} />
    case 'portfolio':
      return <PortfolioModal id={modal.id!} />
    case 'order':
      return <OrderModal id={modal.id!} />
    }
  }, [modal.type, modal.id])

  return (
    <AnimatePresence mode='wait'>
      {modal.isOpen &&
        <motion.div
          ref={wrapperRef}
          className={classNames(cls.ModalWizard, {}, [className])}
        >
          <motion.div
            className={cls.modalWrapper}
            ref={ref}
            style={{ y }}
            drag={modal.isOpen ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}

            {...animationSettings}
          >
            <button className={cls.closeBtn} onClick={closeModal}></button>
            <div className={cls.modalBody}>
              {renderModal()}
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
}