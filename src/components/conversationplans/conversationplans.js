import React from "react"
import Progressbar from "../progressbar/progressbar"

const Conversationplans = ({ ConversationplansData }) => <React.Fragment>
    {ConversationplansData.map((item, index) =>
        <div className="w-100" key={index}>
            <div className="flex flex-col 2xl:flex-row justify-between pb-[12px]">
                <span className="text-[#606465] 2xl:text-[14px] 3xl:text-[16px] font-[500] leading-[20px] pb-[19px]">{item.title}</span>
                <ul className="flex justify-between gap-x-[26px] px-[14px] 2xl:px-[0px]"> {item.tag.map((data, dataIndex) => <li className="text-[10px] text-[#000] font-[500] list-disc list-disc-[#fff] leading-[20px]" key={dataIndex}>{data.taginner}</li>)}</ul>
            </div>
            <div className="flex justify-between ">
                <Progressbar type={item.progressbarType} progressData={item.progressbardata} className="top-[-5px] right-[-30px] w-[50px]" />
            </div>
        </div>
    )}
</React.Fragment>
export default Conversationplans