import React from 'react';
import { Spinner } from '../components';
import 'styled-components/macro';
import Avatar from '../components/avatar';
import { useProfileLogic } from '../hooks';
import { FlexWrapper, Form, Message, Wrapper } from '../components';
import devices from '../styles/devices';
import {colors} from '../styles/variables';

export default function ProfileContainer() {
  const {
    bio,
    setBio,
    name,
    setName,
    loading,
    pictureURL,
    showFileInput,
    setShowFileInput,
    errors,
    handleBioAndNameSubmit,
    handlePictureSubmit,
    handleFileChange,
    handleDeleteClick,
  } = useProfileLogic();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleUploadPictureClick = () => {
    setShowFileInput(true);
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
            <Avatar.Picture src={pictureURL} alt="Profile picture" />
          </Avatar>
        </Wrapper>
        <Form onSubmit={handlePictureSubmit}>
          <Form.Box>
            {!showFileInput && (
              <Form.Button
                variant="red"
                css={`
                  margin: 22px 16px 16px 0;
                `}
                type="button"
                onClick={handleUploadPictureClick}
              >
                Upload new picture
              </Form.Button>
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
                  accept="image/jpeg,image/png,image/gif"
                  onChange={handleFileChange}
                />
                {errors.picture?.length ? (
                  <Message>
                    <Message.List>
                      {errors.picture.map((message, i) => (
                        <Message.Item key={i}>{message}</Message.Item>
                      ))}
                    </Message.List>
                  </Message>
                ) : (
                  <Form.Text fontSize="0.75rem">
                    JPG, GIF or PNG. Max size of 1MB
                  </Form.Text>
                )}
              </Form.Fieldset>
            )}
            <Form.Button
              onClick={handleDeleteClick}
              css={`
                margin: 22px 0 16px 0;
                ${showFileInput ? 'margin-right: 16px' : ''}
              `}
              type="button"
            >
              Delete
            </Form.Button>
            {showFileInput && (
              <Form.Button
                disabled={loading}
                variant="red"
                css={`
                  ${loading ? 'position:relative; top:7px;' : ''}
                `}
              >
                {loading ? <Spinner color="white" /> : 'Upload Now '}
              </Form.Button>
            )}
          </Form.Box>
        </Form>
      </FlexWrapper>
      <Form onSubmit={handleBioAndNameSubmit}>
        <Form.Fieldset>
          <Form.Label htmlhtmlFor="profile_name">Name</Form.Label>
          <Form.Input
            type="text"
            id="profile_name"
            name="profile[name]"
            autocomplete="name"
            maxlength="100"
            value={name}
            onChange={handleNameChange}
            data-testid={'name-input'}
            required
          />
          {errors.name ? <Form.Error>{errors.name}</Form.Error> : null}
        </Form.Fieldset>
        <Form.Fieldset
          css={`
            position: relative;
          `}
        >
          <Form.Label htmlhtmlFor="profile_bio">Bio</Form.Label>
          <Form.Span
            css={`
              color: ${1200 - bio.length < 0 ? colors.red : '#9e9ea7'};
              position: absolute;
              right: 0;
              top: 0;
            `}
          >
            {1200 - bio.length}
          </Form.Span>
          <Form.Textarea
            as="textarea"
            id="profile_bio"
            name="profile[bio]"
            rows="10"
            maxlength="1200"
            value={bio}
            onChange={handleBioChange}
            data-testid={'bio-input'}
          />
          {errors.bio ? <Form.Error>{errors.bio}</Form.Error> : null}
        </Form.Fieldset>
        <Form.Box>
          <Form.Button
            disabled={loading}
            variant="red"
            css={`
              width: 100%;
              @media ${devices.mobile} {
                width: initial;
              }
            `}
          >
            {loading ? <Spinner color="white" /> : 'Save Profile'}
          </Form.Button>
        </Form.Box>
      </Form>
    </>
  );
}
