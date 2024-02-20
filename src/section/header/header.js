import { FontAwsom, Images } from "../../components"

const Header = ({headerData}) =><div className="w-100 flex justify-end">
    <div className="w-[223px] flex items-center justify-between">
        {headerData.map((item, index)=>item.image?<Images image={item.image} key={index}/>:<FontAwsom key={index} icons={item.icon} className="text-[24px] text-[#A6A6A6] "/>)}
    </div>
</div>
export default Header