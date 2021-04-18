import React, { useState } from 'react';
import { Note } from '../components';

export default function NoteContainer() {
  const [isBoxActive, setIsBoxActive] = useState(false);

  return (
    <Note>
      <Note.Button>
        <Note.Span
          css={`
            transform: ${isBoxActive} ? "translate(10px, 30px)" : "translate(0)";
          `}
        ></Note.Span>
        <Note.Span></Note.Span>
        <Note.Span
          css={`
            margin: 0;
          `}
        ></Note.Span>
      </Note.Button>
      Hello guys
    </Note>
  );
}
