import React from "react";
import Progressbar from "../progressbar/progressbar";

const BroadcastPlans = ({ BroadcastplansData }) => {
    return <React.Fragment>
        {BroadcastplansData.map((item, index) =>
            <React.Fragment key={index}>
                <span className="text-[#606465] text-[16px] font-[500] leading-[20px] pb-[19px]">{item.title}</span>
                <table className="flex justify-between">
                    {item.broadcastTableData.map((data, dataindex) => <div className="flex flex-col" key={dataindex}>
                        <tr key={dataindex}><th className="text-[#606465] text-[14px] lg:text-[10px] xl:text-[14px] font-[500] leading-[20px] pb-[20px]">{data.tabletitle}</th></tr>
                        <>
                            {data.isProgressbar ?
                                <div className="flex flex-col gap-y-[33px] pt-[6px]">
                                    <Progressbar type={data.progressbarType} progressData={data.rows} className="top-[-20px] right-[0px]" />
                                </div>
                                :
                                data.rows.map((rowdata, rowindex) => (
                                    <tr key={rowindex} className="pb-[20px]">
                                        <td className="text-[#606465] text-[14px] lg:text-[9px] 2xl:text-[14px] font-[500] leading-[20px]">{rowdata}</td>
                                    </tr>
                                ))
                            }
                        </>

                    </div>)}
                </table>
            </React.Fragment>)}
    </React.Fragment>
}
export default BroadcastPlans