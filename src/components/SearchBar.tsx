import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

type SearchProps = {
  onSearch: (query: string) => void;
  isLoading: boolean;
};

const SearchBar = ({ onSearch, isLoading }: SearchProps) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
  };

  return (
    <>
      {isLoading}
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='searchContainer'>
          <input
            type='search'
            id='search-plugins'
            className='formControl searchbar'
            placeholder='search-plugins'
            value={query}
            onChange={handleChange}
            required
            disabled={loading}
            data-testid='Search Plugins'
          />
          <button type='submit' data-testid='Search' className='btn searchBtn' disabled={loading}>
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
