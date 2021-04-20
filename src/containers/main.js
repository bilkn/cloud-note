import React, { useContext, useEffect, useState } from 'react';
import { Main } from '../components';
import { isSecondsPassed } from '../helpers';
import { NoteContainer } from '../containers';
import { DataContext } from '../context';
import 'styled-components/macro';

export default function MainContainer() {
  const [data] = useContext(DataContext);
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
        {data.results.map(({ text, color, timestamp, id }) => (
          <NoteContainer
            key={id}
            id={id}
            color={color}
            timestamp={timestamp}
            mouseClick={mouseClick}
            setMouseClick={setMouseClick}
            text={text}
            active={currentId === id}
            setCurrentId={setCurrentId}
          />
        ))}
      </Main.Wrapper>
    </Main>
  );
}
