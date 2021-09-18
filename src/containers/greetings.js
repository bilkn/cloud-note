import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import "animate.css";
import { db } from "../lib/firebase.dev";
import { useParams } from "react-router";
import { useWindowKey } from "../hooks";

const Backdrop = styled.div`
  ${({ centerItem }) => centerItem && "align-items:center;"}
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100vh;
  ${({ centerItem }) => centerItem && "justify-content:center;"}
  left: 0;
  position: fixed;
  transition: opacity 300ms;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

const Container = styled.div`
  background: #fbfbfb;
  border-radius: 15px;
  display: flex;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  min-height: 50vh;
  max-width: 640px;
  padding: 20px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    min-height: 400px;
    min-width: 640px;
  }
`;

const Text = styled.p`
  color: #262626;
  font-family: "Space Mono", monospace;
  font-size: 2rem;
  margin: auto;
`;

const Button = styled.button`
  all: unset;
  align-items: center;
  background: #eeeeee;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  right: 20px;
  position: absolute;
  top: 20px;
  transition: background 150ms;
  width: 30px;

  &:hover {
    background: #eae8e8;
  }

  &:focus {
    box-shadow: 0 0 0 2px #797979;
  }
`;

const CrossIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2381 16.2381L5.7619 5.76191L16.2381 16.2381Z"
        stroke="currentColor"
        strokeWidth="1.04762"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2381 5.76191L5.7619 16.2381"
        stroke="currentColor"
        strokeWidth="1.04762"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function Greetings(props) {
  const { text = "Hello There!", className } = props;
  const [showGreetingModal, setShowGreetingModal] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef();

  const handleCloseClick = () => {
    ref?.current.classList.add("animate__fadeOutDownBig");
  };

  useWindowKey({
    keys: ["Escape"],
    handlers: [handleCloseClick],
    condition: true,
  });

  const handleAnimationEnd = (e) => {
    if (e?.currentTarget?.classList?.contains("animate__fadeOutDownBig")) {
      setShowGreetingModal(false);
    }
  };

  useEffect(() => {
    const speed = 150;
    let textLength = 0;
    const addLetter = () => {
      if (textLength === text.length) clearInterval(interval);
      setDisplayedText(text.slice(0, textLength));
      textLength++;
    };
    const interval = setInterval(addLetter, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return showGreetingModal ? (
    <Backdrop centerItem onClick={handleCloseClick}>
      <Container
        ref={ref}
        className={`${className} animate__animated animate__fadeInDown`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Button onClick={handleCloseClick}>
          <CrossIcon />
        </Button>
        <Text>{displayedText}</Text>
      </Container>
    </Backdrop>
  ) : null;
}

function GreetingsContainer() {
  const [text, setText] = useState("");
  const { greeting } = useParams();

  useEffect(() => {
    const getTextFromDB = async () => {
      const res = await db.collection("greetings").doc(greeting).get();
      setText(res.data().text);
    };
    try {
      if (greeting) {
        getTextFromDB();
      }
    } catch (err) {
      console.log(err);
    }
  }, [greeting]);
  return text && <Greetings text={text} />;
}

export default GreetingsContainer;
