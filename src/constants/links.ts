import { INavLink } from '@/types';
import intl from '@/utils/locales/en.json';

export const NavBarLinks: INavLink[] = [
  {
    imgURL: '/assets/icons/home.svg',
    route: '/',
    label: intl.home,
  },
  {
    imgURL: '/assets/icons/search.svg',
    route: '/search',
    label: intl.searchPackages,
  },
];
