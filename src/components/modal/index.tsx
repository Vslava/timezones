import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

import style from './style.scss';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
}

function Modal({ children, isOpen }: IModalProps): JSX.Element {
  return (
    <ReactModal
      isOpen={isOpen}
      className={style.modal}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
