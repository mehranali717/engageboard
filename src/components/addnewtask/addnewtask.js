import React, { useState } from "react";
import Card from "../card/card";
import useTask from "../../customhook/useTask";
import CustomModal from "../../modal/modal";

const AddNewTask = ({ task }) => {
  const [tasks, setAddRemoveTask] = useTask("task");
  const [toggleModal, setToggleModal] = useState(false)

  return <>
    <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px]">
      <button onClick={()=>setToggleModal(!toggleModal)}>Add New Task</button>
    </Card>
    {toggleModal && <CustomModal show={toggleModal} onHide={()=>setToggleModal(false)}/>}
  </>
};

export default AddNewTask;
