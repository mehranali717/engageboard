import React, { useState } from "react";
import Card from "../card/card";
import CustomModal from "../../modal/modal";
import FontAwsom from "../fontAwsom/fontAwsom";

const AddNewTask = () => {
  const [toggleModal, setToggleModal] = useState(false)

  return <React.Fragment>
    <Card className=" border-[1px] border-[#E5E2E2] rounded-[8px]  px-[45px] py-[9px]">
      <button onClick={()=>setToggleModal(!toggleModal)} className="flex gap-x-[11px] items-center text-[#606465] text-[12px] font-[500]">
        <FontAwsom icons={[{prefix:"fas", iconName:"plus"}]} className="w-[26px]"/>
        Add New Task</button>
    </Card>
    {toggleModal && <CustomModal show={toggleModal} onHide={()=>setToggleModal(false)}/>}
  </React.Fragment>
};

export default AddNewTask;
