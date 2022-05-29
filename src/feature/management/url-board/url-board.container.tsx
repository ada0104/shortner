import { Button, Tab, Tabs } from '@mui/material';
import { ReactNode, useState } from 'react';

// components
import UrlTable from '@app/core/component/url-table-component';

// mocks
import { urlRows } from '@app/mock/url';

interface ITabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && children}
    </div>
  );
};

const UrlBoardIndex = () => {
  const [modeIndex, setModeIndex] = useState(0);

  // methods
  const handleChange = (_: any, newIndex: number) => {
    setModeIndex(newIndex);
  };

  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };

  return (
    <>
      <h2 className="text-4xl mb-[30px]">URL Board</h2>

      <div className="flex justify-between mb-3">
        <Tabs
          value={modeIndex}
          onChange={handleChange}
          className="min-h-[0px]"
          TabIndicatorProps={{
            className: 'h-1',
          }}
        >
          <Tab
            className="text-[18px] font-bold py-2 min-h-[auto]"
            label="活動中"
            {...a11yProps(0)}
          />
          <Tab
            className="text-[18px] font-bold py-2 min-h-[auto]"
            label="已失效"
            {...a11yProps(1)}
          />
        </Tabs>

        <div className="flex items-end">
          <p className="text-[14px] font-bold text-secondary-gary-400 mr-5">
            Page 1 of 20
          </p>
          <Button
            variant="contained"
            className="rounded-3xl shadow-none px-6 leading-none"
            startIcon={<i className="ri-add-circle-fill" />}
          >
            <span className="text-[14px] font-bold">新增短網址</span>
          </Button>
        </div>
      </div>

      <TabPanel value={modeIndex} index={0}>
        <UrlTable rows={urlRows} />
      </TabPanel>
      <TabPanel value={modeIndex} index={1}>
        <UrlTable rows={urlRows} isExpired />
      </TabPanel>
    </>
  );
};

export default UrlBoardIndex;
