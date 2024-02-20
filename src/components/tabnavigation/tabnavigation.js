import { useState } from 'react';
import { Tabs } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

const TabNavigation = () => {
  const [key, setKey] = useState('Profile Setting');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-[60px] border-none flex gap-x-[51px]"
    >
      <Tab eventKey="Profile Setting" title="Profile Setting" className="border-none flex flex-col">
      </Tab>
      <Tab eventKey="Account Setting" title="Account Setting" className="border-none">
      </Tab>
    </Tabs>
  );
}

export default TabNavigation;