import React from "react";
import Progressbar from "../progressbar/progressbar";

const SubscriptionPlans = ({ SubscriptionPlansData }) => <React.Fragment>
    {SubscriptionPlansData.map((item, index) =>
        <div key={index} className="flex flex-col">
            <span className="text-[#606465] text-[16px] font-[500] leading-[20px] pb-[19px]">{item.title}</span>
            <div className="w-[95%] flex justify-between pb-[7px] gap-x-[30px]">
                <div className="flex gap-x-[5px]">
                    <span className="lg:text-[9px] xl:text-[12px] text-[#606465] font-[500] leading-[20px]">{item.consumelbl}</span>
                    <span className="lg:text-[9px] xl:text-[12px] text-[#606465] font-[500] leading-[20px]">{item.consumevalue}</span>
                </div>
                <div className="flex gap-x-[5px]">
                    <span className="lg:text-[9px] xl:text-[12px] text-[#606465] font-[500] leading-[20px]">{item.balancelbl}</span>
                    <span className="lg:text-[9px] xl:text-[12px] text-[#606465] font-[500] leading-[20px]">{item.balancevalue}</span>
                </div>
            </div>
            <Progressbar type={item.progressbarType} progressData={item.progressbardata} className="top-[-7px] right-[-10px]" />
        </div>
    )}
</React.Fragment>
export default SubscriptionPlans