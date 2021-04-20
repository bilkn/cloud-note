import React, { useState } from 'react';
import { Note } from '../components';
import 'styled-components/macro';
import { Cross } from '@styled-icons/entypo/Cross';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import { v4 as uuidv4 } from 'uuid';

export default function NoteContainer(props) {
  const { mouseClick, setMouseClick, color, date, text } = props;
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const handleButtonClick = () => {
    setIsBoxActive(!isBoxActive);
  };

  const handleMouseDown = () => {
    setMouseClick(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsBoxActive(!isBoxActive);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const createBoxButtons = () => {
    const translates = ['-70px, 20px', '-30px, 60px', '23px, 70px'];
    const labels = ['Edit note', 'Copy to clipboard', 'Delete note'];
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
        }
          &:focus {
              ${
                isBoxActive && !mouseClick
                  ? `transform: translate(${translate}) scale(7.5);`
                  : ''
              }
          }
           
        `,
        children: icons[i],
        label: labels[i],
      };
    });
  };

  return (
    <Note color={color} date={date}>
      <Note.Box
        active={isBoxActive}
        mouseClick={mouseClick}
        onClick={handleButtonClick}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
        aria-label="Toggle note menu"
      >
        <Cross
          css={`
            color: inherit;
            left: 3px;
            position: absolute;
            transition: opacity 300ms;
            opacity: ${isBoxActive ? '1' : '0'};
          `}
        />
        {createBoxButtons().map(({ css, children, label }) => (
          <Note.Button
            active={isBoxActive}
            key={uuidv4()}
            role={isBoxActive ? 'button' : ''}
            tabIndex={isBoxActive ? '0' : '-1'}
            title={label}
            aria-label={label}
            css={css}
          >
            {children}
          </Note.Button>
        ))}
      </Note.Box>
      <Note.TextArea value={textValue} onChange={handleChange} />
    </Note>
  );
}
