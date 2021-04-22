import React, { useContext } from 'react';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import 'styled-components/macro';
import { Note } from '../components';
import { ToastContext } from '../context';

export default function NoteButton(props) {
  const { isButtonsActive, setIsActive, textValue, mouseClick } = props;
  const [, dispatch] = useContext(ToastContext);

  const createBoxButtons = () => {
    const handleEditMouseUp = () => {
      if (isButtonsActive) {
        setIsActive(true);
      }
    };

    const handleCopyMouseUp = () => {
      if (isButtonsActive) {
        const elem = document.createElement('textarea');
        document.body.appendChild(elem);
        elem.value = textValue;
        elem.select();
        elem.setSelectionRange(0, 99999); // For mobile devices.
        document.execCommand('copy');
        document.body.removeChild(elem);
        dispatch({ type: 'COPY' });
      }
    };

    const handlers = [handleEditMouseUp, handleCopyMouseUp];
    const translates = ['-70px, 20px', '-30px, 60px', '23px, 70px'];
    const labels = ['Edit note', 'Copy to clipboard', 'Delete note'];
    const iconColor = 'white';
    const iconSize = isButtonsActive ? '50%' : '0';
    const positions = ['left: 5px', 'left: 17px', 'left: 29px'];
    const icons = [
      <Edit color={iconColor} size={iconSize} />,
      <Clipboard color={iconColor} size={iconSize} />,
      <Trash color={iconColor} size={iconSize} />,
    ];
    return translates.map((translate, i, arr) => {
      return {
        css: `
        ${positions[i]};
        ${i === arr.length - 1 ? 'margin:0;' : ''}
        ${
          isButtonsActive
            ? `transform : translate(${translate}); height:46px; width:46px;`
            : ''
        } &:hover {
          ${
            isButtonsActive
              ? `transform : translate(${translate}) scale(1.2);`
              : ''
          }
        }
          &:focus {
              ${
                isButtonsActive && !mouseClick
                  ? `transform: translate(${translate}); scale(1.2)`
                  : ''
              }
          }
           
        `,
        children: icons[i],
        label: labels[i],
        handler: handlers[i],
        position: positions[i],
      };
    });
  };

  return createBoxButtons().map(({ css, children, label, handler }, index) => (
    <Note.Button
      active={isButtonsActive}
      key={index}
      role={isButtonsActive ? 'button' : ''}
      tabIndex={isButtonsActive ? '0' : '-1'}
      title={isButtonsActive ? label : ''}
      aria-label={label}
      css={css}
      onMouseUp={handler}
      onKeyDown={(e) => {
        e.key === 'Enter' && handler(e);
      }}
    >
      {children}
    </Note.Button>
  ));
}
