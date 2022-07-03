import { cloneDeep } from 'lodash';
import { FeaturePageType } from './feature-page-type.enum';
import { FeaturePath } from './feature-path.enum';
import { Feature } from './feature.enum';

export interface IFeatureMapItem {
  // feature id
  featureId: Feature;
  // feature parent path
  featureParentPath?: FeaturePath[];
  // feature path
  featurePath: FeaturePath;
  // feature route
  featureRoute: { [key in FeaturePageType]?: FeaturePageType };
  // feature default page
  featureDefaultRoute: FeaturePageType;
  notLoadResource?: boolean;
}

const featureMap: IFeatureMapItem[] = [
  {
    featureId: Feature.Landing,
    featurePath: FeaturePath.Landing,
    featureRoute: {
      index: FeaturePageType.Index,
    },
    featureDefaultRoute: FeaturePageType.Index,
    notLoadResource: true,
  },
  {
    featureId: Feature.Home,
    featurePath: FeaturePath.Home,
    featureDefaultRoute: FeaturePageType.Index,
    featureRoute: {
      index: FeaturePageType.Index,
    },
  },
  {
    featureId: Feature.Login,
    featurePath: FeaturePath.Login,
    featureDefaultRoute: FeaturePageType.Index,
    featureRoute: {
      index: FeaturePageType.Index,
    },
  },
  {
    featureId: Feature.Account,
    featurePath: FeaturePath.Account,
    featureDefaultRoute: FeaturePageType.Index,
    featureRoute: {
      index: FeaturePageType.Index,
    },
  },
  {
    featureId: Feature.UserCenter,
    featurePath: FeaturePath.UserCenter,
    featureDefaultRoute: FeaturePageType.Index,
    featureRoute: {
      index: FeaturePageType.Index,
    },
  },
  {
    featureId: Feature.Management,
    featurePath: FeaturePath.Management,
    featureRoute: {
      index: FeaturePageType.Index,
      'url-board': FeaturePageType.UrlBoard,
      'group-board': FeaturePageType.GroupBoard,
    },
    featureDefaultRoute: FeaturePageType.Index,
  },
  {
    featureId: Feature.Error,
    featurePath: FeaturePath.Error,
    featureDefaultRoute: FeaturePageType.NotFound,
    featureRoute: {
      notFound: FeaturePageType.NotFound,
    },
    notLoadResource: true,
  },
];

export const getFeatureDefaultPath = (featureId: Feature) => {
  const featureMapItem = cloneDeep([...featureMap]).find(
    (x) => x.featureId === featureId,
  );

  let path;

  if (featureMapItem) {
    if (featureMapItem.featureParentPath) {
      path = `/${featureMapItem.featureParentPath.join('/')}/${
        featureMapItem.featurePath
      }/${featureMapItem.featureDefaultRoute}`;
    } else {
      path = `/${featureMapItem.featurePath}/${featureMapItem.featureDefaultRoute}`;
    }
  }

  return path;
};

export const getFeatureFullPath = (
  featureId: Feature,
  pageType: FeaturePageType,
) => {
  const featureMapItem = cloneDeep([...featureMap]).find(
    (x) => x.featureId === featureId,
  );

  let path: string | undefined = featureMapItem?.featureRoute[pageType];

  if (featureMapItem) {
    if (featureMapItem.featureParentPath) {
      path = `/${featureMapItem.featureParentPath.join('/')}/${
        featureMapItem.featurePath
      }/${path}`;
    } else {
      path = `/${featureMapItem.featurePath}/${path}`;
    }
  }

  return path;
};

export const getFeatureConfig = (featureId: Feature) => {
  return cloneDeep([...featureMap]).find((x) => x.featureId === featureId);
};
