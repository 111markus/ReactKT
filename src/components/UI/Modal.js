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
      <div className="modal-actions">{props.children}</div>
    </dialog>
  );
};

export default Modal;
