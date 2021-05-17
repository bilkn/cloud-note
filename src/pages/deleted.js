import React, { useContext } from 'react';
import { Heading, FlexWrapper } from '../components';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';
import 'styled-components/macro';
import { MainContainer, FooterContainer } from '../containers';
import { DataContext } from '../context';

export default function Deleted() {
  const { dataState } = useContext(DataContext);

  return (
    <FlexWrapper
      direction="column"
      css={`
        padding-bottom: 100px;
        position: relative;
        min-height: 100vh;
        @media ${devices.mobile} {
          margin-left: ${sizes.sidebar_width};
          padding-bottom: 0;
        }
      `}
    >
      {dataState?.deleted?.length ? (
        <MainContainer data={dataState.deleted} />
      ) : (
        <Heading>You can recover your deleted notes here.</Heading>
      )}
      <FooterContainer />
    </FlexWrapper>
  );
}
