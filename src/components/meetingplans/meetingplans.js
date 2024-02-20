import React from "react";

const MeetingPlans = ({ MeetingPlansData }) => {
    return <React.Fragment>
        {MeetingPlansData.map((item, index) =>
            <div key={index} className="flex flex-col">
                <span className="text-[#606465] text-[16px] font-[500] leading-[20px] pb-[19px]">{item.title}</span>
                <div className="flex">
                {item.stats.map((data, dataindex) => <div className="flex flex-col" key={dataindex}>
                    <span className="text-[#606465] text-[24px] font-[500] leading-[20px] pb-[3px]">{data.digit}</span>
                    <span className="text-[#606465] lg:text-[10px] xl:text-[14px] font-[500] leading-[20px]">{data.status}</span>
                </div>)}
                </div>
            </div>
        )}
    </React.Fragment>
}
export default MeetingPlans