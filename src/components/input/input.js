import React from "react";

const Input = ({ InputFieldData, className }) => <>
  {InputFieldData.map((item, index) => <React.Fragment key={index}>
    {item.label && <label className="w-[145px] me-[46px] text-[#5B5454] text-[14px] font-[500] leading-[20px]">{item.label}</label>}
    <input 
      placeholder={item.placeholder}
      className={`${className}`} />
  </React.Fragment>)}
</>
export default Input;