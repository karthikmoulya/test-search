import { useState } from 'react';
import SearchButton from './SearchButton';

import './SearchBox.css';

const SearchBox = ({ requestSearch }) => {
  const [query, setQuery] = useState('');

  const searchClick = () => {
    if (query) {
      requestSearch(query);
    }
  };

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <div className='container'>
      <input
        type='text'
        name='search'
        placeholder='Search'
        value={query}
        onChange={updateQuery}
      />
      <SearchButton testId='search-button' onClick={searchClick} />
    </div>
  );
};

export default SearchBox;
