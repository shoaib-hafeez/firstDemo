import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../context/CartContext';

const Modal = () => {
    const { setSmShow } = useContext(CartContext);
  return (
    <div>
         <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          congratulations
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  )
}

export default Modal