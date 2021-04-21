import React from "react";
import './ModalVista.scss';
import { Modal } from "@material-ui/core";

export default function ModalVentana(props) {

  const { AbrirModal, CerrarModal, children } = props;
  
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={AbrirModal}
      onClose={CerrarModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
