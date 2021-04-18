import React, { useState } from 'react';
import { Note } from '../components';
import 'styled-components/macro';
import { Cross } from '@styled-icons/entypo/Cross';

export default function NoteContainer() {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const handleButtonClick = () => setIsBoxActive(!isBoxActive);
  return (
    <Note>
      <Note.Box role="button" onClick={handleButtonClick}>
        <Cross
          size="24"
          css={`
            left: 3px;
            position: absolute;
            transition: opacity 300ms;
            top: -10;
            opacity: ${isBoxActive ? '1' : '0'};
          `}
        />

        <Note.Span
          role={isBoxActive ? 'button' : ''}
          css={`
            ${isBoxActive && 'transform : translate(-70px, 20px) scale(6.5)'}
          `}
        ></Note.Span>
        <Note.Span
          role={isBoxActive ? 'button' : ''}
          css={`
            ${isBoxActive && 'transform : translate(-30px, 60px) scale(6.5)'}
          `}
        ></Note.Span>
        <Note.Span
          role={isBoxActive ? 'button' : ''}
          css={`
            margin: 0;
            ${isBoxActive && 'transform : translate(20px, 70px) scale(6.5)'}
          `}
        ></Note.Span>
      </Note.Box>
      Hello guys
    </Note>
  );
}
