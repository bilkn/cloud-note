import React, { useContext } from 'react';
import { Heading, Wrapper } from '../components';
import { MainContainer } from '../containers';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';
import 'styled-components/macro';
import { DataContext } from '../context';

export default function Home() {
  const { dataState } = useContext(DataContext);
  return (
    <Wrapper
      css={`
        position: relative;
        @media ${devices.mobile} {
          margin-left: ${sizes.sidebar_width};
        }
      `}
    >
      {dataState?.results?.length ? (
        <MainContainer data={dataState.results} />
      ) : (
        <Heading>Looks like you don't have any notes.</Heading>
      )}
    </Wrapper>
  );
}
