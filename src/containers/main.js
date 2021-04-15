import React, { useContext } from 'react';
import { Main } from '../components';
import { DataContext } from '../context';

export default function MainContainer() {
  const [data] = useContext(DataContext)
  // !!! Add isNow helper to add animation.

  return (
    <Main>
      <Main.Wrapper>
        {data.results.map((note) => (
          <Main.Note key={note.id} date={true} color={note.color}>{note.text}</Main.Note>
        ))}
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
        <Main.Note>Hello guys</Main.Note>
      </Main.Wrapper>
    </Main>
  );
}
