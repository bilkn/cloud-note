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

    /*   const handleDeleteMouseUp = () => {
      if (showButtons) {
        setDialog({
          isOpen: true,
          text: 'Are you sure to delete this note?',
          handler: () => Delete(id),
          buttons: ['Cancel', 'Delete'],
        });
        setIsActive(false);
      }
    }; */

    /*  const handlers = [
      handleEditMouseUp,
      handleCopyMouseUp,
      handleDeleteMouseUp,
    ];
  */

    /* <Note.Title
          onMouseUp={handler}
          active={showButtons}
          title={showButtons ? label : 'Toggle note menu'}
        >
          {title}
        </Note.Title>
        <Note.Button
          onMouseUp={handler}
          onKeyDown={(e) => {
            e.key === 'Enter' && handler(e);
          }}
        >
        </Note.Button>
    )
  ); */

    return null;
  };
}
