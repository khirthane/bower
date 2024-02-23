import { useQuery } from 'react-query';
import { searchPlugins } from '../services/searchApi';
import { QUERY_KEYS } from './queryKeys';

const pageSize = 5;

export const useSearchPlugin = (text: string, page: number, sort: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH_PLUGIN, text, page, pageSize, sort],
    queryFn: () => searchPlugins(text, page, pageSize, sort),
    keepPreviousData: true,
    enabled: !!text,
    staleTime: Infinity,
  });
};
