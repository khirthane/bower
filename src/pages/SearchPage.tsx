import Loader from '@/components/Loader';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearchResults';
import { pluginSortOptions } from '@/constants/pluginSortOptions';
import intl from '@/utils/locales/en.json';
import { useSearchPlugin } from '@/utils/react-query/queries';
import { ChangeEventHandler, useState } from 'react';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const { data: plugins, isLoading, isError, isFetching } = useSearchPlugin(search, page, sort);

  const handleSearch = async (searchText: string) => {
    searchText && setSearch(searchText);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const onSortChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSort(event.currentTarget.value);
  };

  const cardButtons = () => {
    return (
      <div className='flex justify-between'>
        <div className='sorting'>
          <select className='select' value={sort} onChange={onSortChange}>
            {pluginSortOptions.map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className='pagination'>
          <button className='btnIcon mr-2' onClick={prevPage} disabled={page === 1}>
            {'<'}
          </button>
          <button className='btnIcon' onClick={nextPage}>
            {'>'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-full md:w-9/12'>
          <h2 className='text-center text-3xl m-4'>{intl.searchPackages}</h2>
          <SearchBar onSearch={handleSearch} isLoading={isLoading || isFetching} />
          {isLoading || isFetching ? (
            <Loader size={40} />
          ) : (
            <>
              {plugins && (
                <>
                  {cardButtons()}
                  <SearchResults plugins={plugins} />
                </>
              )}
            </>
          )}
          {isError && <div>{intl.errorMsgs.notAbleFetchResults}</div>}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
