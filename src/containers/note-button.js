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
    const translates = ['-90px, 40px', '-101px, 90px', '-112px, 140px'];
    const labels = ['Edit note', 'Copy to clipboard', 'Delete note'];
    const title = ["Edit","Copy","Delete"];
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
        ${
          isButtonsActive
            ? `transform : translate(${translate}); height:46px; width:46px;`
            : ''
        } 
        `,
        children: icons[i],
        label: labels[i],
        title: title[i],
        handler: handlers[i],
        position: positions[i],
      };
    });
  };

  return createBoxButtons().map(({ css, children, label, title, handler },index) => (
    <Note.ButtonWrapper active={isButtonsActive} css={css} key={index}>
      <Note.Title active={isButtonsActive}>{title}</Note.Title>
      <Note.Button
        active={isButtonsActive}
        role={isButtonsActive ? 'button' : ''}
        tabIndex={isButtonsActive ? '0' : '-1'}
        title={isButtonsActive ? label : ''}
        aria-label={label}
        onMouseUp={handler}
        onKeyDown={(e) => {
          e.key === 'Enter' && handler(e);
        }}
      >
        {children}
      </Note.Button>
    </Note.ButtonWrapper>
  ));
}
