import { readableClount } from '@/utils/lib/readableCount';
import { readabletime } from '@/utils/lib/readableTime';
import intl from '@/utils/locales/en.json';
import { IRecordUnknownList } from '@/utils/services/searchApi';
import { useEffect, useState } from 'react';

type SearchResultsProps = {
  plugins: IRecordUnknownList;
};
const SearchResults = ({ plugins }: SearchResultsProps) => {
  const [results, setResults] = useState<IRecordUnknownList>([]);

  useEffect(() => {
    if (plugins.length) {
      setResults(plugins);
    }
  }, [plugins]);

  return (
    <>
      {results.map((plugin, index) => (
        <div className='card' key={index}>
          <div className='packageName text-xl'>{plugin.name}</div>
          <div className='cardTitle text-s'>{plugin.description}</div>
          <div className='flex justify-between'>
            <div className='releaseDate text-xs opacity-70'>
              {intl.latestRelease} {plugin.latest_release_number}
              {' - '}
              {readabletime(plugin.latest_release_published_at as string)}
            </div>
            <div className='stars flex gap-1 text-xs opacity-70'>
              <img src='/assets/icons/star.svg' width={12} />
              {readableClount(plugin.stars as number)} {intl.stars}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
