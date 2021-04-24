import React, { useEffect, useState } from 'react';
import { Main } from '../components';
import { DialogContainer, NoteContainer } from '../containers';
import 'styled-components/macro';

export default function MainContainer({ data }) {
  const [mouseClick, setMouseClick] = useState(true);
  const [currentId, setCurrentId] = useState('');
  const [dialog, setDialog] = useState({
    active: false,
    operation: null,
    text: '',
  });
  const dialogState = [dialog, setDialog]

  useEffect(() => {
    const handleWindowKeyDown = () => {
      setMouseClick(false);
    };
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, []);

  return (
    <>
      <Main>
        <Main.Wrapper>
          {data.map(({ text, color, timestamp, id }) => (
            <NoteContainer
              key={id}
              id={id}
              color={color}
              timestamp={timestamp}
              mouseClick={mouseClick}
              setMouseClick={setMouseClick}
              text={text}
              currentId={currentId}
              setCurrentId={setCurrentId}
              dialogState={dialogState}
            />
          ))}
        </Main.Wrapper>
      </Main>
      {dialog.active && (
        <DialogContainer
          text={dialog.text}
          operation={dialog.operation}
          dialogState={dialogState}
        />
      )}
    </>
  );
}
