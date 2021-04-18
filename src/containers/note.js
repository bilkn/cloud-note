import React, { useState } from 'react';
import { Note } from '../components';
import 'styled-components/macro';
import { Cross } from '@styled-icons/entypo/Cross';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import { colors } from '../styles/variables';

export default function NoteContainer() {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const handleButtonClick = () => setIsBoxActive(!isBoxActive);
  return (
    <Note>
      <Note.Box role="button" onClick={handleButtonClick}>
        <Cross
          color={colors.gray_4}
          css={`
            left: 3px;
            position: absolute;
            transition: opacity 300ms;
            opacity: ${isBoxActive ? '1' : '0'};
          `}
        />

        <Note.Span
          role={isBoxActive ? 'button' : ''}
          css={`
            ${isBoxActive && 'transform : translate(-70px, 20px) scale(6.5)'};

            &:hover {
              ${isBoxActive && 'transform : translate(-70px, 20px) scale(7.5)'}
            }
          `}
        >
          <Edit color="white" size={isBoxActive ? '3' : '0'} />
        </Note.Span>
        <Note.Span
          role={isBoxActive ? 'button' : ''}
          css={`
            ${isBoxActive && 'transform : translate(-30px, 60px) scale(6.5)'};

            &:hover {
              ${isBoxActive && 'transform : translate(-30px, 60px) scale(7.5)'}
            }
          `}
        >
          <Clipboard color="white" size={isBoxActive ? '3' : '0'} />
        </Note.Span>
        <Note.Span
          role={isBoxActive ? 'button' : ''}
          css={`
            margin: 0;
            ${isBoxActive && 'transform : translate(23px, 70px) scale(6.5)'};

            &:hover {
              ${isBoxActive && 'transform : translate(23px, 70px) scale(7.5)'}
            }
          `}
        >
          <Trash color="white" size={isBoxActive ? '3' : '0'} />
        </Note.Span>
      </Note.Box>
      Hello guys
    </Note>
  );
}
