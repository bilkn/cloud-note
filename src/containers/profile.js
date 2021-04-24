import React, { useState } from 'react';
import { FlexWrapper, Form } from '../components';
import Avatar from '../components/avatar';
import 'styled-components/macro';
import Picture from '../assets/man-1.png';
import devices from '../styles/devices';

export default function ProfileContainer() {
  const [nameValue, setNameValue] = useState('');
  const [bioValue, setBioValue] = useState('');

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleBioChange = (e) => {
    setBioValue(e.target.value);
  };

  return (
    <>
      <FlexWrapper
        css={`
          margin: 0;
        `}
        align="center"
      >
        <Avatar size="120">
          {/* !!! Add username to the avatar */}
          <Avatar.Picture src={Picture} alt={'Avatar'} />
        </Avatar>
        <Form>
          <Form.Box>
            <Form.ButtonRed
              type="button"
              css={`
                margin: 22px 10px 16px 0;
              `}
            >
              Upload new picture
            </Form.ButtonRed>
            <Form.Button
              type="button"
              css={`
                margin: 22px 0 16px 0;
              `}
            >
              Delete
            </Form.Button>
          </Form.Box>
        </Form>
      </FlexWrapper>
      <Form>
        <Form.Fieldset>
          <Form.Label htmlhtmlFor="profile_name">
            Name<Form.Span>*</Form.Span>
          </Form.Label>
          <Form.Input
            type="text"
            id="profile_name"
            name="profile[name]"
            autocomplete="name"
            value={nameValue}
            onChange={handleNameChange}
            data-testid={'name-input'}
          />
        </Form.Fieldset>
        <Form.Fieldset
          css={`
            position: relative;
          `}
        >
          <Form.Label htmlhtmlFor="profile_bio">Bio</Form.Label>
          <Form.Span
            css={`
              color: #9e9ea7;
              position: absolute;
              right: 0;
              top: 0;
            `}
          >
            1200
          </Form.Span>
          <Form.Textarea
            as="textarea"
            id="profile_bio"
            name="profile[bio]"
            rows="10"
            maxlength="1200"
            value={bioValue}
            onChange={handleBioChange}
            data-testid={'bio-input'}
          />
        </Form.Fieldset>
        <Form.Box>
          <Form.ButtonRed
            css={`
              width: 100%;
              @media ${devices.mobile} {
                width: initial;
              }
            `}
          >
            Save Profile
          </Form.ButtonRed>
        </Form.Box>
      </Form>
    </>
  );
}
