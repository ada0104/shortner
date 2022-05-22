import { FeaturePath } from '@app/enum/feature-path.enum';

type FeaturePathType = `${FeaturePath}`;

interface INavigationItem {
  label: string;
  path: FeaturePathType;
  icon: string;
  subItems?: Array<{ label: string; id: string }>;
}

export const NAVIGATION_DEFAULT_LIST: Array<INavigationItem> = [
  {
    label: 'URL Board',
    path: FeaturePath.UrlBoard,
    icon: 'ri-link',
  },
  {
    label: '群組列表',
    path: FeaturePath.GroupBoard,
    icon: 'ri-group-fill',
    subItems: [],
  },
];
