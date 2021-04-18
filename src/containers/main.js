import React, { useContext } from 'react';
import { Main, Note } from '../components';
import { DataContext } from '../context';

export default function MainContainer() {
  const [data] = useContext(DataContext)
  // !!! Add isNow helper to add animation.

  return (
    <Main>
      <Main.Wrapper>
        {data.results.map((note) => (
          <Note contentEditable key={note.id} date={true} color={note.color}>{note.text}</Note>
        ))}
        <Note>Hello guys</Note>
        <Note>Hello guys</Note>
        <Note>Hello guys</Note>
        <Note>Hello guys</Note>
        <Note>Hello guys</Note>
        <Note>Hello guys</Note>
        <Note>Hello guys</Note>
      </Main.Wrapper>
    </Main>
  );
}
