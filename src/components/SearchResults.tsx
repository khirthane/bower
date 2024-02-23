import { readableClount } from '@/utils/lib/readableCount';
import { readabletime } from '@/utils/lib/readableTime';
import { RecordUnknownList } from '@/utils/services/searchApi';
import { useEffect, useState } from 'react';

type SearchResultsProps = {
  plugins: RecordUnknownList;
};
const SearchResults = ({ plugins }: SearchResultsProps) => {
  const [results, setResults] = useState<RecordUnknownList>([]);

  useEffect(() => {
    if (plugins.length) {
      setResults(plugins);
    }
  }, [plugins]);

  return (
    <>
      {results.map((plugin, index) => (
        <div className='card' key={index}>
          <div className='cardName text-xl'>{plugin.name}</div>
          <div className='cardTitle text-s'>{plugin.description}</div>
          <div className='releaseVersion flex justify-between text-xs opacity-70'>
            <div>
              Latest Release {plugin.latest_release_number}
              {' - '}
              {readabletime(plugin.latest_release_published_at as string)}
            </div>
            <div>{readableClount(plugin.stars as number)} Stars</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
