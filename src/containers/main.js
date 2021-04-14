import React, { useContext } from 'react';
import { Main } from '../components';
import { DataContext } from '../context';

export default function MainContainer({state}) {
  const [data, setData] = useContext(DataContext)
  
  return (
    <Main>
      <Main.Wrapper>
        {data.results.map((note) => (
          <Main.Note color={note.color}>{note.text}</Main.Note>
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
