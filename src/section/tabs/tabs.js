import { useState } from 'react';
import { Form, Tabs } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import "./tabs.css"
import Images from '../../components/images/images';
import Profile2Image from "../../assets/images/profile2Img.png";
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import FontAwsom from '../../components/fontAwsom/fontAwsom';
import Select from '../../components/select/select';
import Card from '../../components/card/card';
import StandardPlanCard from '../../components/standardplancard/standardplancard';
const btnData = [{ url: "/home", text: "Change Profile" }]
const AccountbtnData = [
  { url: "/home", text: "Save Changes" },
  { url: "/home", text: "Cancel" }
]
const feedbackbtnData = [
  { url: "/home", text: "Submit" },
  { url: "/home", text: "Cancel" }
]
const InputFieldData = [
  { placeholder: "Adison Culhane" },
  { placeholder: "a.culhane@gmail.com" },
  { placeholder: "+971-55-2233445" }
]
const AccountInputFieldData = [
  { label: "Whatsapp Number", placeholder: "+971-55-2233445" },
  { label: "Email Address", placeholder: "a.culhane@gmail.com" },
  { label: "Meeting Schedule Link ", placeholder: "a.culhane@gmail.com" },
  { label: "Instagram Handle", placeholder: "@a.culhane" },
  { label: "Facebook Handle", placeholder: "@a_culhane" },
]
const DropdownData = [
  { label: "Language" }
]
const FontAwesomIcons = [
  { prefix: 'fas', iconName: 'pencil' },
  { prefix: 'fas', iconName: 'pencil' },
  { prefix: 'fas', iconName: 'pencil' },
]
const AccountFontAwesomIcons = [
  { prefix: 'fas', iconName: 'pencil' },
  { prefix: 'fas', iconName: 'pencil' },
  { prefix: 'fas', iconName: 'pencil' },
  { prefix: 'fas', iconName: 'pencil' },
  { prefix: 'fas', iconName: 'pencil' },
]
const CardData = [
  { title: "Basic", stats: "$ 99.91/", per: "month", engagments: "50 Engagements", version: "Current Package" },
  { title: "Pro", stats: "$ 199.9/", per: "month", engagments: "80 Engagements", version: "Upgrade" },
  { title: "Premium", stats: "$ 289.9/", per: "month", engagments: "200 Engagements", version: "Upgrade" },
]
const ControlledTabs = () => {
  const [key, setKey] = useState('Profile Setting');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-[60px] border-none flex gap-x-[51px]"
    >
      <Tab eventKey="Profile Setting" title="Profile Setting" className="border-none flex flex-col">
        <Images image={Profile2Image} className="mb-[20px] ms-[27px]" />
        <Button btnData={btnData} className="w-[181px] h-[40px] flex justify-center items-center rounded-[34px] bg-[#7DC5C4] ms-[1px] text-[#FFFFFF] text-[16px] font-[500] leading-[22.95px] mb-[30px] self-start" />
        <div className='flex gap-x-[13px]'>
          <div className='mb-[45px] flex flex-col gap-y-[30px]'>
            <Input InputFieldData={InputFieldData}
              className="
                      w-[767px]
                      h-[40px]
                      py-[10px]
                      ps-[26px]
                      focus:outline-transparent
                      border-[0.25px]
                      border-[#000]
                      placeholder-[#5B5454]
                      text-[16px]
                      font-[500]
                      leading-[20px] 
                      rounded-[5px]"/>
          </div>
          <div className='flex flex-col gap-y-[50px]'>
            <FontAwsom icons={FontAwesomIcons} className="text-[20px] text-[#BFBFBF]" />
          </div>
        </div>
        <div className='flex gap-x-[9px]'>
          <Button btnData={AccountbtnData} className="w-[181px] h-[40px] flex justify-center items-center rounded-[34px] bg-[#7DC5C4] ms-[1px] text-[#FFFFFF] text-[16px] font-[500] leading-[22.95px] " />
        </div>
      </Tab>
      <Tab eventKey="Account Setting" title="Account Setting" className="border-none">
        <div className='flex gap-x-[13px] '>
          <div className='mb-[45px] flex flex-col gap-y-[30px]'>
            <Input InputFieldData={AccountInputFieldData}
              className="
                      w-[767px]
                      h-[40px]
                      py-[10px]
                      ps-[26px]
                      focus:outline-transparent
                      border-[0.25px]
                      border-[#000]
                      placeholder-[#5B5454]
                      text-[16px]
                      font-[500]
                      leading-[20px] 
                      rounded-[5px]"/>
          </div>
          <div className='flex flex-col gap-y-[50px]'>
            <FontAwsom icons={AccountFontAwesomIcons} className="text-[20px] text-[#BFBFBF]" />
          </div>
        </div>
        <Select className="w-[767px] ms-[46px] mb-[60px]" DropdownData={DropdownData} />
        <div className='w-[598px] mb-[56px] ms-[192px] flex justify-between'>
          {/* <StandardPlanCard CardData={CardData} className="w-[188px] bg-[#6ACBCA] border-[1px] border-[#D9D9D9] rounded-[8px] flex justify-center"
          cardTitleStyling="text-[#FFF] text-[14px] font-[700] leading-[20px] pb-[28px]"
          cardStatsStyling="text-[#FFF] text-[16px] font-[500] leading-[20px] pb-[9px]"
          cardEngagementStyling="text-[#fff] text-[14px] font-[500] leading-[20px] pb-[21px]"
          cardVersionStyling="text-[#fff] text-[14px] font-[700] leading-[20px]"
          /> */}
          {/* <Card CardData={CardData} className="w-[188px] bg-[#6ACBCA] rounded-[8px] pt-[21px] pb-[13px] flex flex-col items-center" innerTextColor="text-[#fff]" statsStyling="text-[24px] pb-[9px]" engagmentsStyling="pb-[24px]" titleWeight="font-[700]" /> */}
        </div>
        <div className='flex gap-x-[9px] ms-[192px]'>
          <Button btnData={AccountbtnData} className="w-[181px] h-[40px] flex justify-center items-center rounded-[34px] bg-[#7DC5C4] ms-[1px] text-[#FFFFFF] text-[16px] font-[500] leading-[22.95px] " />
        </div>
      </Tab>
      <Tab eventKey="Feedback & Complaint" title="Feedback & Complaint" className="border-none">
        <Form className='flex flex-col'>
          <textarea className='w-[1133px] h-[329px] border-[0.5px] rounded-[5px] border-[#000] mb-[24px]' />
          <div className='flex gap-x-[81px] mb-[37px]'>
            {['Feedback', 'Complaint'].map((type, index) => (
              <div key={index} className="text-[#000] text-[16px] font-[500] leading-[20px]">
                <Form.Check
                  type="checkbox"
                  id={`default-${type}`}
                  label={`${type}`}
                />
              </div>
            ))}
          </div>
          <div className='flex gap-x-[9px]'>
            <Button btnData={feedbackbtnData} className="w-[181px] h-[40px] flex justify-center items-center rounded-[34px] bg-[#7DC5C4] ms-[1px] text-[#FFFFFF] text-[16px] font-[500] leading-[22.95px] " />
          </div>
        </Form>

      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;