import React, { useContext, useEffect, useState } from 'react';
import { Main } from '../components';
import { NoteContainer } from '../containers';
import { DataContext } from '../context';
import 'styled-components/macro';

export default function MainContainer() {
  const [data] = useContext(DataContext);
  const [mouseClick, setMouseClick] = useState(true);

  useEffect(() => {
    const handleWindowKeyDown = () => {
      setMouseClick(false);
    };
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, []);

  // !!! Add isNow helper to add animation.
  return (
    <Main>
      <Main.Wrapper>
        {data.results.map(({ text, color, date }) => (
          <NoteContainer
            color={color}
            date={date}
            mouseClick={mouseClick}
            setMouseClick={setMouseClick}
          >
            {text}
          </NoteContainer>
        ))}
      </Main.Wrapper>
    </Main>
  );
}
