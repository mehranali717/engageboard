import { Link } from "react-router-dom"
import FontAwsom from "../fontAwsom/fontAwsom"

const Navbar =({Navbardata})=><nav className="">
    <ul className="flex flex-col gap-y-[50px]">
       {Navbardata.map((item, index)=> <div key={index} className="w-[144px] flex justify-between items-center">
       <FontAwsom icons={item.icon} className="text-[#fff]"/>
       <Link to={item.url} className="no-underline"> <li  className="w-[117px] text-[18px] text-[#FFFFFF] leading-[20px] font-[500] ">{item.title}</li></Link>
       </div>)}
    </ul>
</nav>
export default Navbar