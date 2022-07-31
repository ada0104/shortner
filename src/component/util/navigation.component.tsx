import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

// images
import LogoImage from '@app/assets/logo.svg';

// constants
import { NAVIGATION_DEFAULT_LIST } from '@app/constants/list';

// mui components
import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import { FeaturePageType } from '@app/enum/feature-page-type.enum';
import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';

const mockSubItems = [
  {
    id: '1',
    label: '行銷部門',
  },
  {
    id: '2',
    label: '台北辦公室',
  },
  {
    id: '3',
    label: '電商專案',
  },
];

const Navigation: FC = () => {
  const [navigationList, setNavigationList] = useState(NAVIGATION_DEFAULT_LIST);
  const { pathname } = useLocation();

  useEffect(() => {
    // Get group subItems from api
    const tempCompletedList = [...navigationList];
    const groupIndex = tempCompletedList.findIndex(
      (navItem) => navItem.path === FeaturePageType.GroupBoard,
    );
    tempCompletedList[groupIndex].subItems = mockSubItems;

    setNavigationList(tempCompletedList);
  }, []);

  return (
    <div className="w-60 min-w-[240px] shadow-normal py-9 px-6 bg-white flex flex-col z-10">
      <div className="flex-1">
        <div className="w-[170px] mb-8">
          <img src={LogoImage} alt="logo" className="w-full" />
        </div>

        {navigationList.map((navItem) => (
          <div className="w-full " key={navItem.label}>
            <NavLink to={`${navItem.path}`}>
              {({ isActive }) => {
                return (
                  <MenuItem
                    className={classNames('px-[6px] py-4 w-full text-black', {
                      'opacity-75': !isActive,
                    })}
                  >
                    <div
                      className={
                        isActive
                          ? 'w-1 h-[28px] bg-main-blue-300 mr-3'
                          : 'hidden'
                      }
                    />
                    <ListItemIcon>
                      <i
                        className={classNames(
                          'text-2xl text-black',
                          navItem.icon,
                        )}
                      />
                    </ListItemIcon>
                    <Typography className="text-lg">{navItem.label}</Typography>
                  </MenuItem>
                );
              }}
            </NavLink>

            {/* sun-items */}
            {navItem.subItems?.map((item) => {
              const parentPath = pathname.split('/')?.[2];
              const isNavItemIsActive = parentPath === navItem.path;

              if (!isNavItemIsActive) return null;

              return (
                <NavLink
                  to={`${navItem.path}/${item.id}`}
                  key={item.id}
                  className="no-underline text-black hover:text-main-blue-300"
                >
                  {() => {
                    const parentPath = pathname.split('/')?.[2];
                    const iaParentActive = parentPath === navItem.path;

                    return (
                      <Typography className="text-sm pl-5 py-2">
                        {item.label}
                      </Typography>
                    );
                  }}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      <NavLink
        to={getFeatureDefaultPath(Feature.Home)}
        className="text-black hover:text-main-blue-300"
      >
        <Typography className="text-sm pl-5 py-2 underline">
          回到首頁
        </Typography>
      </NavLink>
    </div>
  );
};

export default Navigation;
