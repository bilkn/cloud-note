import React, { useContext } from 'react';
import { Wrapper} from '../components';
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
      <MainContainer data={dataState.results} />
    </Wrapper>
  );
}
