import React from 'react';
import { FlexWrapper, Form, Heading } from '../components';
import 'styled-components/macro';
import devices from '../styles/devices';
import { sizes } from '../styles/variables';
import * as ROUTES from '../constants/routes';

export default function NotFound() {
  return (
    <FlexWrapper
      direction="column"
      align="center"
      css={`
        @media ${devices.mobile} {
          margin-left: ${sizes.sidebar_width};
        }
      `}
    >
      <Heading
        css={`
          margin-left: auto;
          margin-right: auto;
        `}
      >
        404 Page not found
      </Heading>
      <Form.ButtonLink to={ROUTES.HOME}>Go to Homepage</Form.ButtonLink>
    </FlexWrapper>
  );
}
