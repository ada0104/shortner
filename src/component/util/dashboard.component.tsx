import { FC } from 'react';
import { NavLink } from 'react-router-dom';

// images
import AvatarDefaultImage from '@app/assets/avatar.png';

// mui components
import { AppBar, Avatar, Button, Typography } from '@mui/material';

// components
import Navigation from './navigation.component';
import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';

// constants

const Dashboard: FC = (props) => {
  return (
    <div className="w-screen h-screen flex">
      {/* left navigation */}
      <Navigation />

      {/* top header */}
      <div className="flex flex-col flex-1">
        <AppBar
          position="relative"
          className="h-20 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] justify-center items-end px-14"
        >
          <div className="flex items-center">
            <NavLink
              to={getFeatureDefaultPath(Feature.UserCenter)}
              className="text-black hover:text-main-blue-300 mr-6 flex items-center"
            >
              <Avatar alt="default" src={AvatarDefaultImage} className="mr-2" />
              <Typography className="text-base underline">Linda</Typography>
            </NavLink>

            <Button className="rounded-2xl bg-black text-white font-medium px-4 py-1">
              LOGOUT
            </Button>
          </div>
        </AppBar>
        <div className="flex-1 h-full overflow-y-auto bg-base-back-gray py-12 px-14">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
