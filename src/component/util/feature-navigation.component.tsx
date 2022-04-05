/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import { ReactElement } from 'react';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';

const navigationFeature = (
  RouteComponent: ({
    nextElementPage,
  }: {
    nextElementPage: () => void;
  }) => ReactElement,
  path: FeaturePageType | FeatureRouteType | FeaturePath | undefined,
) => {
  const NavigationFeature = () => {
    const navigate = useNavigate();

    const nextElementPage = () => {
      if (path) navigate(path, { replace: true });
    };

    return <RouteComponent nextElementPage={nextElementPage} />;
  };

  return NavigationFeature;
};

export default navigationFeature;
