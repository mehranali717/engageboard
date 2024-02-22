import { AgentperformancePlan, BroadcastPlans, Card, Conversationplans, MeetingPlans, Pagetitle, PropertyInsightPlans, SubscriptionPlans } from "../../components"
import { DashboardInnerPlans, StandardPlans, TaskWrapper } from "../../section"
const StandardPlansData = [
  { title: "In conversation", stats: "350", engagments: "+8 added today" },
  { title: "Highly Engaged", stats: "181", engagments: "Out of 765 users" },
  { title: "External Leads", stats: "88", engagments: "No response" },
  { title: "Total Meetings Scheduled", stats: "12", engagments: "+3 added today" },
]
const MeetingPlansData = [
  { title: "Calendar & Scheduling", stats: [{ digit: "45", status: "Scheduled Meetings" }, { digit: "20", status: "Upcoming Meetings" }, { digit: "17", status: "Meeting Requested" }, { digit: "08", status: "Response Dropped" }] },
]
const SubscriptionPlansData = [
  { title: "Subscription Usage", tag: "Upgrade", consumelbl: "Conversations Consumed", consumevalue: "821 / 1500", balancelbl: "Conversations Balance", balancevalue: "1878 Available", isProgressbar: true, progressbarType: "horizontal", progressbardata: [{ progressValue: "54" }] },
]
const ConversationplansData = [
  {
    title: "Total Conversion Rate",
    isProgressbar: true,
    tag: [
      { taginner: "Completed" },
      { taginner: "Requested" },
      { taginner: "Unresponsive" }
    ],
    progressbarType: "circular",
    progressbardata: [{ progressValue: "26.9", progressLabel: "Meeting" }, { progressValue: "44.28", progressLabel: "Engagement" }, { progressValue: "71.18", progressLabel: "Total" }],
  },
]
const BroadcastplansData = [
  {
    title: "Broadcast Performance",
    isTable: true,
    broadcastTableData: [
      {
        tabletitle: "Broadcast Title",
        rows: [
          "Beachfront Villas - Damac",
          "Elite Towers - Abu Dhabi",
          "Dubai Marina - Damac"
        ]
      },
      {
        tabletitle: "Response",
        rows: [
          "170 of 256",
          "210 of 230",
          "242 of 250"
        ]
      },
      {
        tabletitle: "Conversion",
        isProgressbar: true,
        progressbarType: "horizontal",
        rows: [
          { progressValue: "76" },
          { progressValue: "53" },
          { progressValue: "88" },
        ]
      }
    ]
  },
]

const PropertyInsightplansData = [
  {
    title: "Property Insights",
    isTable: true,
    broadcastTableData: [
      {
        tabletitle: "Property Title",
        rows: [
          "Beachfront Villas - Damac",
          "Elite Towers - Abu Dhabi",
          "Dubai Marina - Damac"
        ]
      },
      {
        tabletitle: "Lead Interaction",
        rows: [
          "422",
          "314",
          "233"
        ]
      },
      {
        tabletitle: "Viewing Rate",
        isProgressbar: true,
        progressbarType: "horizontal",
        rows: [
          { progressValue: "76" },
          { progressValue: "53" },
          { progressValue: "88" },
        ]
      }
    ]
  },
]

const agentperformanceplanData = [
  {
    title: "Agent Performance",
    isTable: true,
    broadcastTableData: [
      {
        tabletitle: "Name",
        rows: [
          "Gretchen Herwitz",
          "Chance Stanton",
          "Carla Dorwart",
          "Rayna Baptista",
          "Cooper Herwitz",
          "Total"
        ]
      },
      {
        tabletitle: "Broadcast",
        rows: [
          "08",
          "06",
          "08",
          "04",
          "09",
          "35",
        ]
      },
      {
        tabletitle: "Contacts",
        rows: [
          "1792",
          "1344",
          "1888",
          "896",
          "2015",
          "7935",
        ]
      },
      {
        tabletitle: "Conversion",
        rows: [
          "56%",
          "43%",
          "39%",
          "51%",
          "42%",
          "46.2%"
        ]
      },
    ]
  }
]

const Home = () => <div className="lg:px-[5px] xl:px-[20px] 3xl:px-[39px]">
      <Pagetitle title="Dashboard" />
      <div className="flex lg:gap-x-[14px] 3xl:gap-x-[29px]">
      <div className="w-[63%] flex flex-col gap-y-[20px]">
      <StandardPlans
        StandardPlansData={StandardPlansData}
        titleStyling="text-[#606465] text-[14px] lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[14px] font-[500] leading-[20px] pb-[10px]"
        statsStyling="text-[#606465] lg:text-[50px] xl:text-[64px] font-[500] leading-[1] pb-[10px]"
        engagementStyling="text-[#606465] text-[14px] font-[500] leading-[20px] hover:text-[#DDAF96]"
      />
      
        <div className="flex gap-[12px] w-100">
          <DashboardInnerPlans>
            <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] lg:p-[9px] xl:p-[14px]">
              <MeetingPlans MeetingPlansData={MeetingPlansData} />
            </Card>

            <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] lg:p-[9px] xl:p-[14px]">
              <SubscriptionPlans SubscriptionPlansData={SubscriptionPlansData} />
            </Card>

            <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] lg:p-[9px] xl:p-[14px]">
              <Conversationplans ConversationplansData={ConversationplansData} />
            </Card>

            <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px] lg:p-[9px] xl:p-[14px]">
              <BroadcastPlans BroadcastplansData={BroadcastplansData} />
            </Card>
          </DashboardInnerPlans>

          <DashboardInnerPlans>
            <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px]">
              <PropertyInsightPlans PropertyInsightplansData={PropertyInsightplansData} />
            </Card>

            <Card className="w-100 border-[1px] border-[#E5E2E2] rounded-[8px]  flex flex-col p-[14px]">
              <AgentperformancePlan agentperformanceplanData={agentperformanceplanData} />
            </Card>
          </DashboardInnerPlans>
        </div> 
      </div>
    <div className="w-[35.5%]">
      <TaskWrapper />
    </div>
      </div>
</div>
export default Home