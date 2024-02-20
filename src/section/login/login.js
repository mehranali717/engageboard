import { Button, FontAwsom, Images, Input, Select } from "../../components";
import registerLogoImage from "../../assets/images/auth_logo.png";
import { Link } from "react-router-dom";
const InputFieldData = [
    { placeholder: "Username" },
    { placeholder: "Password" }
]
const FontAwesomIcons = [
    { prefix: 'fab', iconName: 'whatsapp', url: "https://web.whatsapp.com/" },
    { prefix: 'fab', iconName: 'instagram', url: "https://www.instagram.com/" },
    { prefix: 'fab', iconName: 'facebook', url: "https://www.facebook.com/" },
]
const btnData = [{ url: "/home", text: "Login" }]
const Login = () => <div className=" flex flex-col items-center">
    <div className="mb-[27px]">
        <Images image={registerLogoImage} />
    </div>
    <h3 className="font-[500] text-[25px] text-[#000000] tracking-[1px] leading-[34px] pb-[38px]">Welcome Back!</h3>
    <form className="flex flex-col gap-y-[38px] pb-[34px] items-center ">
        <Input InputFieldData={InputFieldData}
            className="
                w-full
                pb-[4px]
                focus:outline-transparent
                border-b-[1px]
                border-b-[#EAEAEA]
                placeholder-[#A0A0A0]
                text-[15px]
                font-[400]
                leading-[20.25px]"/>
        <Button btnData={btnData} className="w-100 h-[41px] flex justify-center items-center rounded-[9px] bg-[#7CD2D7] text-[#FFFFFF] text-[17px] font-[700] leading-[22.95px] mb-[21px] self-start" />
        <div className="flex items-center gap-x-[19px] pb-[31px] self-start">
            <span className="text-[#A0A0A0] text-[15px] leading-[20.25px] font-[400]">Don't have an account?</span>
            <Link to="/" className="text-[#7CD2D7] text-[15px] leading-[20.25px] font-[400]">Sign Up Now</Link>
        </div>
    </form>
    <div className="w-[118px] flex justify-between">
        <FontAwsom icons={FontAwesomIcons} className="text-[29px] text-[#009E9B] " />
    </div>
</div>
export default Login