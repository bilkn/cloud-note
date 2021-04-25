import React, { useState } from 'react';
import { FlexWrapper, Form, Wrapper } from '../components';
import Avatar from '../components/avatar';
import 'styled-components/macro';
import Picture from '../assets/man-1.png';
import devices from '../styles/devices';

export default function ProfileContainer() {
  const [nameValue, setNameValue] = useState('');
  const [bioValue, setBioValue] = useState('');
  const [showFileInput, setShowFileInput] = useState(false);

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleBioChange = (e) => {
    setBioValue(e.target.value);
  };

  const handleUploadPictureClick = () => {
    setShowFileInput(true);
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
  };

  return (
    <>
      <FlexWrapper
        css={`
          margin: 0;
        `}
        align={showFileInput ? 'flex-start' : 'center'}
      >
        <Wrapper
          css={`
            ${showFileInput ? 'min-height:150px' : ''}
          `}
        >
          <Avatar size="120">
            {/* !!! Add username to the avatar */}
            <Avatar.Picture src={Picture} alt={'Avatar'} />
          </Avatar>
        </Wrapper>
        <Form>
          <Form.Box>
            {!showFileInput && (
              <Form.ButtonRed
                css={`
                  margin: 22px 16px 16px 0;
                `}
                type="button"
                onClick={handleUploadPictureClick}
              >
                Upload new picture
              </Form.ButtonRed>
            )}
            {showFileInput && (
              <Form.Fieldset
                css={`
                  margin: 0;
                  margin-top: 0.3em;
                `}
              >
                <Form.Input
                  css={`
                    cursor: pointer;
                    margin: 0;
                  `}
                  type="file"
                  onChange={handleFileChange}
                />
              </Form.Fieldset>
            )}
            <Form.Button
              css={`
                margin: 22px 0 16px 0;
                ${showFileInput ? 'margin-right: 16px' : ''}
              `}
              type="button"
            >
              Delete
            </Form.Button>
            {showFileInput && <Form.ButtonRed>Upload Now</Form.ButtonRed>}
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
            required
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
