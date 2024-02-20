import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';

const Select =({className, DropdownData})=> <div className="flex ">
    {DropdownData && DropdownData.map((item, index)=><div className='w-[145px]' key={index}><label className="w-full inline-block text-[#5B5454] text-[14px] font-[500] leading-[20px]">{item.label}</label></div>)}
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className={`${className} flex justify-between items-center border-[0.25px] border-[#000]`}>
            <span className='text-[#A1A1A1] text-[14px] font-[400] '>English (UK)</span>
            <FontAwesomeIcon icon="caret-down" className='text-[#C4C4C4] text-[17px] '></FontAwesomeIcon>
          </Dropdown.Toggle>
          <Dropdown.Menu className='flex flex-col w-[112px]'>
            <Dropdown.Item href="#/action-1" className='text-[#A1A1A1] text-[14px] font-[400] '>English (US)</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className='text-[#A1A1A1] text-[14px] font-[400] '>Sweedish</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className='text-[#A1A1A1] text-[14px] font-[400] '>English (DK)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
  </div>

export default Select;