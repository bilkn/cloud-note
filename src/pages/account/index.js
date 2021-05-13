import React, { useState, useEffect } from 'react';
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
import * as ROUTES from '../../constants/routes';
import { useFirebaseAuth, useMatchLastSubpath } from '../../hooks';

export default function Account() {
  const { path } = useRouteMatch();
  const [crumb, setCrumb] = useState('');
  const { matchSubpath } = useMatchLastSubpath();
  const { currentUser } = useFirebaseAuth();

  useEffect(() => {
    if (matchSubpath(ROUTES.ACCOUNT)) setCrumb('Account Settings');
    else if (matchSubpath(ROUTES.PROFILE)) setCrumb('Edit Profile');
    else if (matchSubpath(ROUTES.PASSWORD)) setCrumb('Password');
  }, [matchSubpath]);

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
            @media ${devices.mobile} {
              padding-bottom: 0;
            }
          `}
        >
          <Navigation>
            <Navigation.Breadcrumb>
              <Navigation.Link to={ROUTES.ACCOUNT}>
                {currentUser?.displayName}
              </Navigation.Link>
              <Navigation.Span>/</Navigation.Span>
              <Navigation.Text>{crumb}</Navigation.Text>
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
              <Route exact path={`${ROUTES.ACCOUNT}`}>
                <SettingsContainer />
              </Route>
              <Route path={`${path}${ROUTES.PROFILE}`}>
                <ProfileContainer />
              </Route>
              <Route path={`${path}${ROUTES.PASSWORD}`}>
                <PasswordContainer />
              </Route>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Wrapper>
    </>
  );
}
