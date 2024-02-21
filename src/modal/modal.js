import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./modal.css";
import { Button, FontAwsom, Input, TabNavigation, Task } from '../components';
import useTask from '../customhook/useTask';
import { ContextAPI } from '../contextAPI/contextAPI';

const CustomModal = (props) => {
  const [tasks, setAddRemoveTask] = useTask([]);
  const [newTask, setNewTask] = useState()
  const {text, setText} = useContext(ContextAPI)
  const handleTask = () => {
    setAddRemoveTask(newTask)
    setText("newTask")
    props.onHide()
  }
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='p-0 border-none self-end'>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwsom
            icons={[{ prefix: "fas", iconName: "xmark" }]}
            className="w-[24px] text-[#000]"
            onClick={props.onHide}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pe-[50px]">
        <Input
          onChange={(e) => setNewTask(e.target.value)}
          InputFieldData={[{ placeholder: "Add New Task" }]}
          className="w-full py-[8px] px-[15px] border-[1px] border-[#EAEAEA] placeholder-[#A0A0A0] text-[15px] font-[400] leading-[20.25px] rounded-[8px]"
        />
      </Modal.Body>
      <Modal.Footer className='border-none flex p-0'>
        <Button
          onClick={handleTask}
          btnData="Submit"
          className="w-[150px] h-[41px] flex justify-center items-center rounded-[9px] bg-[#7CD2D7] ms-[2px] text-[#FFFFFF] text-[17px] font-[700] leading-[22.95px] mb-[21px] self-start"
        />
        <Button
          onClick={props.onHide}
          btnData="Close"
          className="w-[150px] h-[41px] flex justify-center items-center rounded-[9px] bg-[#7CD2D7] ms-[2px] text-[#FFFFFF] text-[17px] font-[700] leading-[22.95px] mb-[21px] self-start"
        />
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
