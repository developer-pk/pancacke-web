import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

export const Modal = ({ children, toggleModal, width }) => {
  const bodyRef = useRef(null);

  useEffect(() => {
    const listener = (e) => {
      if (bodyRef.current && !bodyRef.current.contains(e.target)) {
        toggleModal(false);
      }
    };
    window.addEventListener('mousedown', listener);
    return () => {
      window.removeEventListener('mousedown', listener);
    };
  }, [bodyRef, toggleModal]);

  return createPortal(
    <div className="Modal">
      <div className="backdrop"></div>
      <div className="modal-body" ref={bodyRef} style={{ maxWidth: width }}>
        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
};
