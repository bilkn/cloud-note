import React, { useContext } from 'react';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Clipboard } from '@styled-icons/fa-regular/Clipboard';
import { Trash } from '@styled-icons/bootstrap/Trash';
import 'styled-components/macro';
import { Note } from '../components';
import { DialogContext, ToastContext } from '../context';
import { useData } from '../hooks';
import { copyToClipboard } from '../helpers';

export default function NoteButtonContainer(props) {
  const { showButtons, setIsActive, textValue, id } = props;
  const { dispatchToast } = useContext(ToastContext);
  const [, setDialog] = useContext(DialogContext);
  const { Delete } = useData();

  const createBoxButtons = () => {
    const handleEditMouseUp = () => {
      if (showButtons) {
        setIsActive(true);
      }
    };

    const handleCopyMouseUp = () => {
      if (showButtons) {
        copyToClipboard(textValue);
        dispatchToast({
          type: 'NOTIFICATION',
          payload: 'Note has been copied to the clipboard.',
        });
        setIsActive(false);
      }
    };

    const handleDeleteMouseUp = () => {
      if (showButtons) {
        setDialog({
          isOpen: true,
          text: 'Are you sure to delete this note?',
          handler: () => Delete(id),
          buttons: ['Cancel', 'Delete'],
        });
        setIsActive(false);
      }
    };

    const handlers = [
      handleEditMouseUp,
      handleCopyMouseUp,
      handleDeleteMouseUp,
    ];
    const translates = ['-90px, 40px', '-101px, 90px', '-112px, 140px'];
    const labels = ['Edit note', 'Copy to clipboard', 'Delete note'];
    const title = ['Edit', 'Copy', 'Delete'];
    const iconColor = 'white';
    const iconSize = showButtons ? '50%' : '0';
    const positions = ['left: 5px', 'left: 17px', 'left: 29px'];
    const icons = [
      <Edit color={iconColor} size={iconSize} />,
      <Clipboard color={iconColor} size={iconSize} />,
      <Trash color={iconColor} size={iconSize} />,
    ];
    return translates.map((translate, i) => {
      return {
        css: `
        ${positions[i]};
        ${
          showButtons
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

  return createBoxButtons().map(
    ({ css, children, label, title, handler }, index) => (
      <Note.ButtonWrapper active={showButtons} css={css} key={index}>
        <Note.Title
          onMouseUp={handler}
          active={showButtons}
          title={showButtons ? label : 'Toggle note menu'}
        >
          {title}
        </Note.Title>
        <Note.Button
          active={showButtons}
          role={showButtons ? 'button' : ''}
          tabIndex={showButtons ? '0' : '-1'}
          title={showButtons ? label : 'Toggle note menu'}
          aria-label={label}
          onMouseUp={handler}
          onKeyDown={(e) => {
            e.key === 'Enter' && handler(e);
          }}
        >
          {children}
        </Note.Button>
      </Note.ButtonWrapper>
    )
  );
}
