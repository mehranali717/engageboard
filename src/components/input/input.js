import React from "react";

const Input = (props) => <>
  {props.InputFieldData.map((item, index) => <React.Fragment key={index}>
    {item.label && <label className="w-[145px] me-[46px] text-[#5B5454] text-[14px] font-[500] leading-[20px]">{item.label}</label>}
    <input 
    {...props}
      placeholder={item.placeholder}
      className={`${props.className}`} />
  </React.Fragment>)}
</>
export default Input;