import { FeaturePageType } from '@app/enum/feature-page-type.enum';

interface INavigationItem {
  label: string;
  path: FeaturePageType;
  icon: string;
  subItems?: Array<{ label: string; id: string }>;
}

export const NAVIGATION_DEFAULT_LIST: Array<INavigationItem> = [
  {
    label: 'URL Board',
    path: FeaturePageType.UrlBoard,
    icon: 'ri-link',
  },
  {
    label: '群組列表',
    path: FeaturePageType.GroupBoard,
    icon: 'ri-group-fill',
    subItems: [],
  },
];
