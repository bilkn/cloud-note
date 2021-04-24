import React, { useEffect, useState } from 'react';
import { Main } from '../components';
import { NoteContainer } from '../containers';
import 'styled-components/macro';

export default function MainContainer({ data }) {
  const [mouseClick, setMouseClick] = useState(true);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    const handleWindowKeyDown = () => {
      setMouseClick(false);
    };
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, []);

  return (
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
          />
        ))}
      </Main.Wrapper>
    </Main>
  );
}
