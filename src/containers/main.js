import React, { useContext } from 'react';
import { Main } from '../components';
import { NoteContainer } from '../containers';
import { DataContext } from '../context';
import 'styled-components/macro';
export default function MainContainer() {
  const [data] = useContext(DataContext);
  // !!! Add isNow helper to add animation.

  return (
    <Main>
      <Main.Wrapper>
        {/* {data.results.map((note) => (
          <Note contentEditable key={note.id} date={true} color={note.color}>
            {note.text}
          </Note>
        ))} */}
        <NoteContainer />
        <NoteContainer />
        <NoteContainer />
        <NoteContainer />
        <NoteContainer />   
      </Main.Wrapper>
    </Main>
  );
}
