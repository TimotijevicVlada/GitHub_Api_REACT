import React from 'react';
import SearchInput from './SearchInput';
import SearchProfile from './SearchProfile';
import SearchProfileRepos from './SearchProfileRepos';

const Search = () => {
  return (
    <div className='search'>
      <SearchInput />
      <SearchProfile />
      <SearchProfileRepos />
    </div>
  )
};

export default Search;
