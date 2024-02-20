import React from "react"

const AgentperformancePlan = ({ agentperformanceplanData }) => <React.Fragment>
    {agentperformanceplanData.map((item, index) =><div key={index}>
            <span className="text-[#606465] text-[16px] font-[500] leading-[20px] pb-[19px]">{item.title}</span>
            <table className="flex justify-between">
                {item.broadcastTableData.map((data, dataindex) => <div className="flex flex-col "  key={dataindex}>
                    <tr><th className="text-[#606465] text-[14px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[14px] font-[500] leading-[20px] pb-[20px]">{data.tabletitle}</th></tr>
                    {data.rows.map((rowdata, rowindex) => (
                        <tr key={rowindex} className="pb-[20px]">
                            <td className="text-[#606465] text-[14px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] font-[500] leading-[20px]">{rowdata}</td>
                        </tr>
                    ))}
                </div>)}
            </table>
        </div>
    )}
</React.Fragment>
export default AgentperformancePlan