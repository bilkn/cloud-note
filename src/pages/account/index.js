import React from 'react';
import { FlexWrapper, Navigation, Form } from '../../components';
import 'styled-components/macro';
import {
  ProfileContainer,
  PasswordContainer,
  MobileNavMenuContainer,
  SidebarContainer,
  HeaderContainer,
  NavMenuContainer,
} from '../../containers';
import devices from '../../styles/devices';

export default function Account() {
  return (
    <>
      <SidebarContainer />
      <HeaderContainer />
      <FlexWrapper
        direction="column"
        css={`
          margin: 0 auto;
          margin-top: 4.5em;
          max-width: 768px;
          padding: 1em;
          padding-bottom: 5.75em;
          @media ${devices.tablet} {
            margin-left: 90px;
          }
        `}
      >
        <Navigation>
          <Navigation.Breadcrumb>
            <Navigation.Link>Codebee</Navigation.Link>
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
            {/* <ProfileContainer /> */}
              {/*  <PasswordContainer />  */}
            {/* <Form>
              <Form.Wrapper>
                <Form.Fieldset
                  name=""
                  css={`
                    margin: 0;
                  `}
                >
                  <Form.Label for="user_login">Username</Form.Label>
                  <Form.Input
                    type="text"
                    id="user_login"
                    name="user[login]"
                    value="Mr. Johnson"
                    autocorrect="username"
                  />
                </Form.Fieldset>
                <Form.Fieldset>
                  <Form.Label for="user_email">Email</Form.Label>
                  <Form.Input
                    type="email"
                    id="user_email"
                    name="user[email]"
                    autocomplete="email"
                  />
                </Form.Fieldset>
              </Form.Wrapper>
              <Form.Button>Save</Form.Button>
              <Form.Line />
              <Form.Wrapper>
                <Form.Subtitle>danger zone</Form.Subtitle>
                <Form.ButtonRed>Delete all notes</Form.ButtonRed>
                <Form.ButtonRed>Delete account</Form.ButtonRed>
              </Form.Wrapper>
            </Form> */}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
}
