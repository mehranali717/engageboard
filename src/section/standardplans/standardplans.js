import React from "react"
import { Card, StandardPlanCard } from "../../components"

const StandardPlans = ({ StandardPlansData, titleStyling, statsStyling, engagementStyling }) => {
    return <div className="w-100 flex lg:gap-x-[7px] xl:gap-x-[16px]">
                {StandardPlansData.map((data, index) => <Card className="w-[25%] rounded-[10px] bg-[#9DEBEB91] p-[25px] md:p-[5px] xl:p-[10px] 3xl:p-[25px]" key={index}>
                    <StandardPlanCard Data={data} titleStyling={titleStyling} statsStyling={statsStyling} engagementStyling={engagementStyling} />
                </Card>)}
    </div>
}
export default StandardPlans