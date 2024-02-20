import { Card } from "../../components";
import useTask from "../../customhook/useTask";
import React from "react";

const Leads = () => {
    const [tasks, setAddRemoveTask] = useTask("task");
    return <React.Fragment>
    {tasks.map((item)=><Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] mb-[8px]" >
        <div className='flex jb gap-x-[81px]'>
            <div className="w-100 flex justify-between items-center">
                <div className="flex gap-x-[11px]">
                    <div className="flex flex-col">
                        <span className="text-[#606465] text-[12px] font-[500] leading-[1] pb-[5px]">{item.taskMessage}</span>
                        <span className="text-[#606465] text-[10px] font-[400] leading-[1]">{item.time}</span>
                    </div>
                </div>
                <span className="text-[#606465] text-[11px] font-[500] leading-[1]">{item.date}</span>
            </div>
        </div>
    </Card>)}
</React.Fragment>
};

export default Leads;
