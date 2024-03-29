import React, { useState } from "react"
import Checkbox from "../checkbox/checkbox"
import Card from "../card/card"
import AddNewTask from "../addnewtask/addnewtask"

const Task = ({ taskData }) => {
    const [dataFromCheckbox, setDataFromCheckbox] = useState([]);
    const handleCheckboxData = (childData) => {
        setDataFromCheckbox([...dataFromCheckbox, taskData.filter((task)=>task.id == childData)]);
    };
    return <React.Fragment>
        {taskData.map((item, index) => <Card className="border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] mb-[8px]" key={index}>
                <div className="w-100 flex justify-between items-center">
                    <div className="flex gap-x-[11px]">
                        <Checkbox id={item.id} sendCheckboxDataToTask={handleCheckboxData} />
                        <div className="flex flex-col">
                            <span className="text-[#606465] text-[12px] font-[500] leading-[1] pb-[5px]">{item}</span>
                            <span className="text-[#606465] text-[10px] font-[400] leading-[1]">2:00 PM</span>
                        </div>
                    </div>
                    <span className="text-[#606465] text-[11px] font-[500] leading-[1]">08 `Jan</span>
                </div>
        </Card>
        )}
        
        {/* <AddNewTask task={dataFromCheckbox}/> */}
    </React.Fragment>
}
export default Task