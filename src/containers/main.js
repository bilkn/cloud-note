import React, { useEffect } from 'react';
import { Main } from '../components';
import 'styled-components/macro';
import { useLocation } from 'react-router';
import queryString from 'query-string';

export default function MainContainer(props) {
  const { children, data, setDisplayedData } = props;
  const { search: searchProp } = useLocation();

  useEffect(() => {
    const { search: searchQuery } = queryString.parse(searchProp);
    if (searchQuery) {
      const filteredData = data.filter(({ text }) =>
        text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedData(filteredData);
    } else {
      setDisplayedData(data);
    }
  }, [searchProp, data, setDisplayedData]);

  return <Main>{children}</Main>;
}
