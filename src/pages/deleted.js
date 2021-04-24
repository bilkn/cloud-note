import React, { useContext } from 'react';
import { Wrapper } from '../components';
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
      <MainContainer data={dataState.deleted} />
    </Wrapper>
  );
}
