import { Button, Images, Input, Select } from "../../components";
import registerLogoImage from "../../assets/images/auth_logo.png";
import { Link } from "react-router-dom";
const InputFieldData = [
    { placeholder: "First Name" },
    { placeholder: "Last Name" },
    { placeholder: "Email Address" },
    { placeholder: "Whatsapp Business Number" },
    { placeholder: "Choose Password" },
    { placeholder: "Re-Enter Password" },

]
const btnData = [{url:"/home", text:"Create Account"}]
const SignUp = () => <div className="w-[404px] flex flex-col items-center">
    <div className="mb-[27px]">
        <Images image={registerLogoImage} />
    </div>
    <h3 className="font-[500] text-[25px] text-[#000000] tracking-[1px] leading-[34px] pb-[38px]">Create Account</h3>
    <form 
        className="flex flex-col gap-y-[38px] pb-[34px] items-center ">
        <Input InputFieldData={InputFieldData}
             className="
                w-[404px]
                pb-[4px]
                focus:outline-transparent
                border-b-[1px]
              border-b-[#EAEAEA]
              placeholder-[#A0A0A0]
                text-[15px]
                font-[400]
                leading-[20.25px]" />
        <Button btnData={btnData} className="w-[376px] h-[41px] flex justify-center items-center rounded-[9px] bg-[#7CD2D7] ms-[2px] text-[#FFFFFF] text-[17px] font-[700] leading-[22.95px] mb-[21px] self-start" />
        <div className="flex items-center gap-x-[4px] pb-[31px] self-start">
            <span className="text-[#A0A0A0] text-[15px] leading-[20.25px] font-[400]">Already have an account?</span>
            <Link to="login" className="text-[#7CD2D7] text-[15px] leading-[20.25px] font-[400]">Log in</Link>
        </div>
        <Select className="w-[112px]"/>
    </form>
</div>
export default SignUp