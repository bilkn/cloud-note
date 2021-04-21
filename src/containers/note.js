import React, { useEffect, useRef, useState } from 'react';
import 'styled-components/macro';
import { Note } from '../components';
import { isSecondsPassed } from '../helpers';
import { Cross } from '@styled-icons/entypo/Cross';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import { v4 as uuidv4 } from 'uuid';

export default function NoteContainer(props) {
  const {
    id,
    mouseClick,
    setMouseClick,
    color,
    timestamp,
    text,
    currentId,
    setCurrentId,
  } = props;
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const textAreaRef = useRef(null);
  

  const handleButtonClick = () => {
    setIsButtonsActive(!isButtonsActive);
    setCurrentId(id);
  };

  const handleMouseDown = () => {
    setMouseClick(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsButtonsActive(!isButtonsActive);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const handleBlur = () => {
    setIsButtonsActive(false);
    setIsActive(false);
    setCurrentId('');
  };

  const createBoxButtons = () => {
    const handleEditClick = () => {
      if (isButtonsActive) {
        setIsActive(true);
      }
    };
    const handlers = [handleEditClick];
    const translates = ['-70px, 20px', '-30px, 60px', '23px, 70px'];
    const labels = ['Edit note', 'Copy to clipboard', 'Delete note'];
    const iconColor = 'white';
    const iconSize = isButtonsActive ? '3' : '0';
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
          isButtonsActive
            ? `transform : translate(${translate}) scale(6.5);`
            : ''
        } &:hover {
          ${
            isButtonsActive
              ? `transform : translate(${translate}) scale(7.5);`
              : ''
          }
        }
          &:focus {
              ${
                isButtonsActive && !mouseClick
                  ? `transform: translate(${translate}) scale(7.5);`
                  : ''
              }
          }
           
        `,
        children: icons[i],
        label: labels[i],
        handler: handlers[i],
      };
    });
  };

  useEffect(() => {
    if (currentId && currentId !== id) {
      setIsButtonsActive(false);
      setIsActive(false);
    }
  }, [currentId, id]);

  useEffect(() => {
    if (!isSecondsPassed(1, timestamp)) {
      setIsActive(true);
      setCurrentId(id);
    }
  }, [timestamp, id, setCurrentId, isActive]);

  useEffect(() => {
    if (isActive) {
      textAreaRef.current.focus();
    } else textAreaRef.current.blur();
  }, [isActive]);

  return (
    <Note color={color} animate={!isSecondsPassed(1, timestamp)}>
      <Note.Box
        active={isButtonsActive}
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
            opacity: ${isButtonsActive ? '1' : '0'};
          `}
        />
        {createBoxButtons().map(({ css, children, label, handler }) => (
          <Note.Button
            active={isButtonsActive}
            key={uuidv4()}
            role={isButtonsActive ? 'button' : ''}
            tabIndex={isButtonsActive ? '0' : '-1'}
            title={isButtonsActive ? label : ''}
            aria-label={label}
            css={css}
            onClick={handler}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {children}
          </Note.Button>
        ))}
      </Note.Box>
      <Note.TextArea
        value={textValue}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={!isActive}
        ref={textAreaRef}
      />
    </Note>
  );
}
