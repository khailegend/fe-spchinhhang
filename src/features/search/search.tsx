import React, { useState, useEffect } from 'react';
import { SearchBar } from 'components/searchBar/SearchBar';

export default function Search() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      const requestUrl = 'http://localhost:3001/user';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      const result = responseJSON;
      setData(result);
    }
    fetchSearch();
  }, []);

  return <SearchBar searchResult={data} />;
}
