import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from '../TabPanel';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const CustomTabPanels = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Current Weather" {...a11yProps(0)} />
        <Tab label="Forecast" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Current Weather
      </TabPanel>
      <TabPanel value={value} index={1}>
        Forecast
      </TabPanel>
    </>
  );
};

export default CustomTabPanels;

