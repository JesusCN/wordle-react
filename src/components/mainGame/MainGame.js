import "./MainGame.css";

import Board from "../board/Board";
import Keyboard from "../keyboard/Keyboard";
import { useState } from "react";

const MAX_WORDS = 6;
const MAX_LETTERS = 5;

function MainGame() {
  const [words, setWords] = useState([""]);
  const [usedWords, setUsedWords] = useState([""]);
  const [showBoardWords, setShowBoardWords] = useState([]);

  const correctWord = "adios";
  const lastWord = words[words.length - 1] || "";

  const addLetter = (letter) => {
    if (lastWord.length < MAX_LETTERS)
      setWords([...words.slice(0, -1), lastWord + letter]);
  };

  const deleteLetter = () => {
    if (lastWord.length > 0)
      setWords([...words.slice(0, -1), lastWord.slice(0, -1)]);
  };

  const addWord = () => {
    if (lastWord.length < MAX_LETTERS) {
      console.log("missing letters in word");
      return;
    }

    // TODO: check if word exist, else warning toast

    // TODO: check if words is correct, then game is over in win

    setUsedWords(words);
    setShowBoardWords([...showBoardWords, true]);

    if (words.length >= MAX_WORDS) {
      // TODO: game is over in lose
    } else {
      // get all

      setWords([...words, ""]);
    }
  };

  return (
    <div className="main-game">
      <div className="board-container">
        <Board
          words={words}
          maxWords={MAX_WORDS}
          maxLetters={MAX_LETTERS}
          showWords={showBoardWords}
          correctWord={correctWord}
        ></Board>
      </div>
      <div className="keyboard-container">
        <Keyboard
          onKey={addLetter}
          onEnter={addWord}
          onDelete={deleteLetter}
          usedWords={usedWords}
          correctWord={correctWord}
        ></Keyboard>
      </div>
    </div>
  );
}

export default MainGame;
