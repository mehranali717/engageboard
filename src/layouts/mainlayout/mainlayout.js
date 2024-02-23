import { Header, Sidebar } from "../../section"
import sidebarImage from "../../assets/images/sidebarlogo.png";
import profileIcon from "../../assets/images/profile1img.png";
const Navbardata = [
    { title: "Dashboard", icon: [{ prefix: 'fas', iconName: 'house' }], url: "/home" },
    { title: "Leads", icon: [{ prefix: 'fas', iconName: 'user' }], url: "/leads" },
    { title: "Broadcast", icon: [{ prefix: 'fas', iconName: 'tower-broadcast' }], url: "/broadcast" },
    { title: "Calendar", icon: [{ prefix: 'fas', iconName: 'calendar-days' }], url: "/calendar" },
    { title: "Conversations", icon: [{ prefix: 'fas', iconName: 'message' }], url: "/conversations" },
    { title: "Analytics", icon: [{ prefix: 'fas', iconName: 'chart-simple' }], url: "/analytics" },
    { title: "Pipeline", icon: [{ prefix: 'fas', iconName: 'layer-group' }], url: "/pipeline" },
    { title: "Settings", icon: [{ prefix: 'fas', iconName: 'sliders' }], url: "/profile" },
    { title: "Log Out", icon: [{ prefix: 'fas', iconName: 'arrow-right-from-bracket' }], url: "/login" },
]
const headerData = [
    { icon: [{ prefix: 'fas', iconName: 'magnifying-glass' }] },
    { icon: [{ prefix: 'far', iconName: 'circle-question' }] },
    { icon: [{ prefix: 'far', iconName: 'bell' }] },
    { image: profileIcon }
]
const Mainlayout = ({ children }) => <div className="flex">
    <Sidebar className="w-[278px] lg:w-[200px] 2xl:w-[240px] 3xl:w-[278px] bg-[#009E9B] ps-[30px] py-[50px]" image={sidebarImage} Navbardata={Navbardata} imgWrapper="ps-[8px] pb-[55px] 3xl:pb-[82px] pe-[38px]" />
    <div className="flex-1" >
        <div className="pt-[20px] pb-[25px] 2xl:pt-[39px] 2xl:pb-[51px] me-[56px]">
            <Header headerData={headerData} />
        </div>
        {children}
    </div>
</div>
export default Mainlayout