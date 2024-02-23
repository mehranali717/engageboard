import React from "react"

const AgentperformancePlan = ({ agentperformanceplanData }) => <React.Fragment>
    {agentperformanceplanData.map((item, index) =><div key={index}>
            <span className="text-[#606465] text-[16px] font-[500] leading-[20px] pb-[35px]  inline-block">{item.title}</span>
            <table className="flex justify-between">
                {item.broadcastTableData.map((data, dataindex) => <thead className="flex flex-col"  key={dataindex}>
                    <tr><th className="text-[#606465] text-[14px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[14px] font-[500] leading-[20px] pb-[20px]">{data.tabletitle}</th></tr>
                    {data.rows.map((rowdata, rowindex) => (
                        <tr key={rowindex} className={`pb-[20px] pt-[10px]  ${rowindex === data.rows.length - 2 && rowdata !== "Cooper Herwitz"? 'border-b-[1px] border-b-[#E5E2E2]' : ''}`}>
                            <td className="text-[#606465] text-[14px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] font-[500] leading-[20px]">{rowdata}</td>
                        </tr>
                    ))}
                </thead>)}
            </table>
        </div>
    )}
</React.Fragment>
export default AgentperformancePlan