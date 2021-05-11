import React, { useState, useContext } from 'react';
import { FlexWrapper, Form, Wrapper } from '../components';
import { DataContext } from '../context';
import { useFirebaseAuth } from '../hooks';
import { getUserDocRef } from '../helpers/manageFirestore';
import Avatar from '../components/avatar';
import 'styled-components/macro';
import Picture from '../assets/man-1.png';
import devices from '../styles/devices';

export default function ProfileContainer() {
  const { dataState, dispatchData } = useContext(DataContext);
  const { currentUser } = useFirebaseAuth();
  const [name, setName] = useState(dataState?.profile?.name || '');
  const [bio, setBio] = useState(dataState?.profile?.bio || '');
  const [showFileInput, setShowFileInput] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleUploadPictureClick = () => {
    setShowFileInput(true);
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
  };

  const handleBioAndNameSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        const docRef = getUserDocRef(currentUser.uid);
        await docRef.update({
          'profile.name': name,
          'profile.bio': bio,
        });
        dispatchData({
          type: 'SET_PROFILE',
          payload: { name, bio, picture: null }, // !!! Change picture.
        });
      } catch (err) {
        console.log(err);
      }
    }
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
            {showFileInput && (
              <Form.Button variant="red">Upload Now</Form.Button>
            )}
          </Form.Box>
        </Form>
      </FlexWrapper>
      <Form onSubmit={handleBioAndNameSubmit}>
        <Form.Fieldset>
          <Form.Label htmlhtmlFor="profile_name">
            Name<Form.Span>*</Form.Span>
          </Form.Label>
          <Form.Input
            type="text"
            id="profile_name"
            name="profile[name]"
            autocomplete="name"
            value={name}
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
            value={bio}
            onChange={handleBioChange}
            data-testid={'bio-input'}
          />
        </Form.Fieldset>
        <Form.Box>
          <Form.Button
            variant="red"
            css={`
              width: 100%;
              @media ${devices.mobile} {
                width: initial;
              }
            `}
          >
            Save Profile
          </Form.Button>
        </Form.Box>
      </Form>
    </>
  );
}
