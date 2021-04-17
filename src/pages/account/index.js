import React from 'react';
import { FlexWrapper, Navigation, Wrapper } from '../../components';
import 'styled-components/macro';
import {
  ProfileContainer,
  PasswordContainer,
  MobileNavMenuContainer,
  SettingsContainer,
  NavMenuContainer,
} from '../../containers';
import devices from '../../styles/devices';
import { sizes } from '../../styles/variables';
import { Route, useRouteMatch } from 'react-router';
import * as Routes from '../../constants/routes';

export default function Account() {
  const { path } = useRouteMatch();
  return (
    <>
      <Wrapper
        css={`
          margin-top: 4.5em;
          @media ${devices.mobile} {
            margin-left: ${sizes.sidebar_width};
          }
        `}
      >
        <FlexWrapper
          direction="column"
          css={`
            margin: 0 auto;
            max-width: 878px;
            padding: 1em;
            padding-bottom: 5.75em;
          `}
        >
          <Navigation>
            <Navigation.Breadcrumb>
              <Navigation.Link to="/name">Codebee</Navigation.Link> {/* !!! Change "to" prop */}
              <Navigation.Span>/</Navigation.Span>
              <Navigation.Text>Account Settings</Navigation.Text>
            </Navigation.Breadcrumb>
          </Navigation>
          <FlexWrapper
            direction="column"
            css={`
              margin-top: 1em;
              @media ${devices.tablet} {
                flex-direction: row;
              }
            `}
          >
            <NavMenuContainer />
            <MobileNavMenuContainer />
            <FlexWrapper
              direction="column"
              css={`
                flex: 1;
                margin-top: 1em;
                @media ${devices.tablet} {
                  margin: 0;
                }
              `}
            >
              <Route exact path={`${Routes.ACCOUNT}`}>
                <SettingsContainer />
              </Route>
              <Route path={`${path}${Routes.PROFILE}`}>
                <ProfileContainer />
              </Route>
              <Route path={`${path}${Routes.PASSWORD}`}>
                <PasswordContainer />
              </Route>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Wrapper>
    </>
  );
}
