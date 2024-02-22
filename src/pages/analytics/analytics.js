import { Pagetitle } from "../../components"
import { StandardPlans } from "../../section"
const StandardPlansData = [
    { stats: "25.1%", engagments: "Meeting Conversion Rate" },
    { stats: "28%", engagments: "Engagement Conversion Rate" },
    { stats: "31.8%", engagments: "Calls Conversion Rate" },
    { stats: "84.9%", engagments: "Total Conversion Rate" },
  ]
const Analytics =()=> <div>
    <Pagetitle title="Analytics" />
    <StandardPlans
        StandardPlansData={StandardPlansData}
        statsStyling="text-[#606465] text-[40px] font-[500] leading-[1] pb-[10px]"
        engagementStyling="text-[#606465] text-[14px] font-[500] leading-[20px] hover:text-[#DDAF96]"
      />
</div>
export default Analytics