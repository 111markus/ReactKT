import React, { useEffect, useRef } from "react";

const Modal = (props) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (props.isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }

    return () => {
      dialogRef.current?.close();
    };
  }, [props.isOpen]);

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-content">{props.children}</div>
      <div className="modal-actions">
        <button onClick={props.onClose} className="text-button">
          Close
        </button>
        <button onClick={props.onCheckout} className="text-button">
          Checkout
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
