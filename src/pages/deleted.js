import React, { useContext } from 'react';
import { Heading, Wrapper } from '../components';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';
import 'styled-components/macro';
import { MainContainer } from '../containers';
import { DataContext } from '../context';

export default function Deleted() {
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
      {!dataState.deleted.length && <Heading>You can recover your deleted notes here</Heading>}
      <MainContainer data={dataState.deleted} />
    </Wrapper>
  );
}
