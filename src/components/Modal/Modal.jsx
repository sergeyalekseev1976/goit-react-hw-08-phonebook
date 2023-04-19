import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import { Overlay, ModalContent, CloseBtn } from './Modal.styled';
import { BsXLg } from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent className="modalContent">
        <CloseBtn onClick={onClose}>
          <BsXLg />
        </CloseBtn>
        {children}
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };