import { Sidebar } from "../../section"
import authsidebarlogo from "../../assets/images/authsidebarlogo.png";

const Authlayout = ({ children }) =>{
    return  <div className="flex">
    <div className="w-75 py-[100px] flex justify-center">
        {children}
    </div>
    <Sidebar className="hidden sm:flex items-center w-25 bg-[#009E9BEB] fixed h-screen right-0" image={authsidebarlogo} imgWrapper="w-100 lg:ps-[64px] px-[10px]"/>
</div>
}
export default Authlayout