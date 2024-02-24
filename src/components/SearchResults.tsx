import { readableClount } from '@/utils/lib/readableCount';
import { readabletime } from '@/utils/lib/readableTime';
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
          <div className='flex justify-between flex-col'>
            <div className='cardName text-xl'>{plugin.name}</div>
            <div className='cardTitle text-s'>{plugin.description}</div>
            <div className='releaseDate text-xs opacity-70'>
              Latest Release {plugin.latest_release_number}
              {' - '}
              {readabletime(plugin.latest_release_published_at as string)}
            </div>
            <div className='stars flex gap-1 text-xs opacity-70'>
              <img src='/assets/icons/star.svg' width={12} />
              {readableClount(plugin.stars as number)} Stars
            </div>
          </div>
          <div className='download'>
            <div className=''>
              <a href={plugin.latest_download_url as string}>Download</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
