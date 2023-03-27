import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById('modal-root');

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
