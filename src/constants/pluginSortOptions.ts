import { ISelect } from '@/types';
export const pluginSortOptions: ISelect[] = [
  {
    label: 'Relevance',
    value: '',
  },
  {
    label: 'SourceRank',
    value: 'rank',
  },
  {
    label: 'Stars',
    value: 'stars',
  },
  {
    label: 'Dependents',
    value: 'dependents_count',
  },
  {
    label: 'Most Used',
    value: 'dependent_repos_count',
  },
  {
    label: 'Latest Release',
    value: 'latest_release_published_at',
  },
  {
    label: 'Contributers',
    value: 'contributions_count',
  },
  {
    label: 'Newest',
    value: 'created_at',
  },
];
