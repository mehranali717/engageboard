import React, { useContext, useState } from "react"
import Checkbox from "../checkbox/checkbox"
import Card from "../card/card"
import useTask from "../../customhook/useTask"

const Task = ({ taskData }) => {
    const [tasks, setAddRemoveTask] = useTask([]);
    console.log({tasks});
    const [dataFromCheckbox, setDataFromCheckbox] = useState([]);
    const handleCheckboxData = (childData) => {
        setDataFromCheckbox([...dataFromCheckbox, taskData.filter((task)=>task.id == childData)]);
    };
    return <React.Fragment>
        {/* {tasks.map((item, index) =>  */}
        <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] mb-[8px]" >
            <div className='flex jb gap-x-[81px]'>
                <div className="w-100 flex justify-between items-center">
                    <div className="flex gap-x-[11px]">
                        <Checkbox sendCheckboxDataToTask={handleCheckboxData} />
                        <div className="flex flex-col">
                            <span className="text-[#606465] text-[12px] font-[500] leading-[1] pb-[5px]">{tasks}</span>
                            <span className="text-[#606465] text-[10px] font-[400] leading-[1]">3:30 PM</span>
                        </div>
                    </div>
                    <span className="text-[#606465] text-[11px] font-[500] leading-[1]">26 `Jan</span>
                </div>
            </div>
        </Card>
        {/* )} */}
    </React.Fragment>
}
export default Task