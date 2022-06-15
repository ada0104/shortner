import { Button, Tab, Tabs } from '@mui/material';
import { ReactNode, useEffect, useState, SyntheticEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

// components
import UrlTable from '@app/component/url/url-table-component';

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
  const [currentActivePage, setCurrentActivePage] = useState(1);
  const [currentExpiredPage, setCurrentExpiredPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  // TODO: 等接資料
  const activeTotalCount = 20;
  const expiredTotalCount = 5;

  // methods
  const handleModeChange = (_: SyntheticEvent, newIndex: number) => {
    // 下方的useEffect會判斷，然後去修改state的modeIndex
    setSearchParams({ tabIndex: newIndex.toString() });
  };

  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };

  const handlePageChange = (page: number, type: 'active' | 'expired') => {
    if (type === 'active') {
      setCurrentActivePage(page);
    } else if (type === 'expired') {
      setCurrentExpiredPage(page);
    }
  };

  // effects
  useEffect(() => {
    const paramTabIndex = searchParams.get('tabIndex');
    if (!paramTabIndex) {
      setSearchParams({ tabIndex: '0' });
    }

    if (paramTabIndex === '0' || paramTabIndex === '1') {
      setModeIndex(parseInt(paramTabIndex, 10));
    }
  }, [modeIndex]);

  return (
    <>
      <h2 className="text-4xl mb-[30px]">URL Board</h2>

      <div className="flex justify-between mb-3">
        <Tabs
          value={modeIndex}
          onChange={handleModeChange}
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
        <UrlTable
          rows={urlRows}
          currentPage={currentActivePage}
          pageCount={activeTotalCount}
          pageChange={(_, page: number) => handlePageChange(page, 'active')}
        />
      </TabPanel>
      <TabPanel value={modeIndex} index={1}>
        <UrlTable
          rows={urlRows}
          currentPage={currentExpiredPage}
          pageCount={expiredTotalCount}
          pageChange={(_, page: number) => handlePageChange(page, 'expired')}
          isExpired
        />
      </TabPanel>
    </>
  );
};

export default UrlBoardIndex;
