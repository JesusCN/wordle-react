import "./MainGame.css";

import Board from "../board/Board";
import Keyboard from "../keyboard/Keyboard";
import { useState } from "react";
import WordsUtils from "../../utils/WordsUtils";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAX_WORDS = 6;
const MAX_LETTERS = 5;

const TOAST_ERROR_CONFIG = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
  closeButton: false,
  pauseOnHover: false,
  closeOnClick: false,
  theme: "dark",
  style: {
    textAlign: "center",
    opacity: "0.9",
    width: "inherit",
  },
};

function MainGame() {
  const [words, setWords] = useState([""]);
  const [usedWords, setUsedWords] = useState([""]);
  const [showBoardWords, setShowBoardWords] = useState([]);

  console.log("Word of the day", WordsUtils.WordOfTheDay());

  const correctWord = WordsUtils.WordOfTheDay();
  const lastWord = words[words.length - 1] || "";

  function GameIsOver() {
    return words.length >= MAX_WORDS;
  }

  const addLetter = (letter) => {
    if (lastWord.length < MAX_LETTERS)
      setWords([...words.slice(0, -1), lastWord + letter]);
  };

  const deleteLetter = () => {
    if (lastWord.length > 0)
      setWords([...words.slice(0, -1), lastWord.slice(0, -1)]);
  };

  const addWord = () => {

    if (!GameIsOver()) return;

    if (lastWord.length < MAX_LETTERS) {
      toast("Faltan letras!", TOAST_ERROR_CONFIG);
      return;
    }

    // TODO: check if word exist, else warning toast
    if (!WordsUtils.ExistWord(lastWord)) {
      toast("La palabra no existe!", TOAST_ERROR_CONFIG);
      return;
    }

    setUsedWords(words);
    setShowBoardWords([...showBoardWords, true]);

    // IF WON
    if (
      correctWord.localeCompare(lastWord, "en", { sensitivity: "base" }) === 0
    ) {
      toast.success("Ganaste !!!");
      return;
    }

    // IF LOST
    if (words.length >= MAX_WORDS) {
      toast.error("Perdiste !!!", TOAST_ERROR_CONFIG);
      return;
    }

  

    // IF CONTINUE
    setWords([...words, ""]);
  };

  return (
    <div className="main-game">
      <ToastContainer draggable="false" />
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
