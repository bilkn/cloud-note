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
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsBoxActive(!isBoxActive);
    }
  };

  const createBoxButtons = () => {
    const translates = ['-70px, 20px', '-30px, 60px', '23px, 70px'];
    const iconColor = 'white';
    const iconSize = isBoxActive ? '3' : '0';
    const icons = [
      <Edit color={iconColor} size={iconSize} />,
      <Clipboard color={iconColor} size={iconSize} />,
      <Trash color={iconColor} size={iconSize} />,
    ];
    return translates.map((translate, i, arr) => {
      return {
        css: `
        ${i === arr.length - 1 ? 'margin:0;' : ''}
        ${
          isBoxActive ? `transform : translate(${translate}) scale(6.5);` : ''
        } &:hover {
          ${
            isBoxActive ? `transform : translate(${translate}) scale(7.5);` : ''
          }
        }`,
        children: icons[i],
      };
    });
  };

  console.log(createBoxButtons());
  return (
    <Note>
      <Note.Box
        active={isBoxActive}
        role="button"
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        <Cross
          color={colors.gray_4}
          css={`
            left: 3px;
            position: absolute;
            transition: opacity 300ms;
            opacity: ${isBoxActive ? '1' : '0'};
          `}
        />
        {createBoxButtons().map(({ css, children }, i) => (
          <Note.Span
            role={isBoxActive ? 'button' : ''}
            tabIndex="0"
            key={i}
            css={css}
          >
            {children}
          </Note.Span>
        ))}
      </Note.Box>
      Hello guys
    </Note>
  );
}
