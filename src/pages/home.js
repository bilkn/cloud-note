import React, { useContext } from "react";
import { Heading, FlexWrapper } from "../components";
import { MainContainer, FooterContainer, GreetingsContainer } from "../containers";
import devices from "../styles/devices";
import { sizes } from "../styles/variables";
import "styled-components/macro";
import { DataContext } from "../context";

export default function Home() {
  const { dataState } = useContext(DataContext);
  return (
    <>
      <GreetingsContainer />
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
        {dataState?.results?.length ? (
          <MainContainer data={dataState.results} />
        ) : (
          <Heading>Looks like you don't have any notes.</Heading>
        )}
        <FooterContainer />
      </FlexWrapper>
    </>
  );
}
