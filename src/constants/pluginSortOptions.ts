import { ISelect } from '@/types';
import intl from '@/utils/locales/en.json';

export const pluginSortOptions: ISelect[] = [
  {
    label: intl.relevance,
    value: '',
  },
  {
    label: intl.sourceRank,
    value: 'rank',
  },
  {
    label: intl.stars,
    value: 'stars',
  },
  {
    label: intl.dependents,
    value: 'dependents_count',
  },
  {
    label: intl.mostUsed,
    value: 'dependent_repos_count',
  },
  {
    label: intl.latestRelease,
    value: 'latest_release_published_at',
  },
  {
    label: intl.contributers,
    value: 'contributions_count',
  },
  {
    label: intl.newest,
    value: 'created_at',
  },
];
