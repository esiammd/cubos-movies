import React from 'react';

import search from '../../assets/icons/search.svg';

import { SearchContent } from './styles';

const SearchInput: React.FC = () => {
  return (
    <SearchContent>
      <input type="text" placeholder="Pesquise por filmes" />
      <img src={search} />
    </SearchContent>
  );
};

export default SearchInput;
