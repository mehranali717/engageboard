import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./modal.css";
import { Button, FontAwsom, TabNavigation } from '../components';

const CustomModal =(props) =>{
  
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header className='p-0 border-none self-end'>
          <Modal.Title id="contained-modal-title-vcenter" >
            <FontAwsom icons={[{prefix:"fas", iconName:"xmark"}]} className="w-[24px] text-[#000]"
            onClick={props.onHide}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
}

export default CustomModal