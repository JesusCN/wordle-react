import PropTypes from "prop-types";
import { useEffect } from "react";
import KeyboardKey from "../keyboard/KeyboardKey";
import "./Keyboard.css";

import WordsUtils from "../../utils/WordsUtils";

const KEYS_LINE_1 = "QWERTYUIOP".split("");
const KEYS_LINE_2 = "ASDFGHJKLÑ".split("");
const KEYS_LINE_3 = "ZXCVBNM".split("");

const ENTER_KEY = { value: "ENTER", label: "ENTER" };
const DEL_KEY = { value: "DEL", label: "DEL" };

KEYS_LINE_3.splice(0, 0, ENTER_KEY);
KEYS_LINE_3.splice(KEYS_LINE_3.length, 0, DEL_KEY);

const KEY_LINES = [KEYS_LINE_1, KEYS_LINE_2, KEYS_LINE_3];

Keyboard.propTypes = {
  onKey: PropTypes.func,
  onEnter: PropTypes.func,
  onDelete: PropTypes.func,
  usedWords: PropTypes.array,
  correctWord: PropTypes.string,
};

function isEnterEvKey(key) {
  return key === "Enter";
}

function isDeleteEvKey(key) {
  return key === "Backspace";
}

function isValidLetterEvKey(key) {
  return /^[a-zñ]$/.test(key.toLowerCase());
}

function Keyboard({
  onKey,
  onEnter,
  onDelete,
  usedWords = [],
  correctWord = "",
}) {
  const letterStatus = WordsUtils.GetStatusKeys(usedWords, correctWord);

  /**
   * Callback for keyPress
   */
  const onKeyPress = (val) => {
    if (val === ENTER_KEY.value) onEnter && onEnter(val);
    else if (val === DEL_KEY.value) onDelete && onDelete(val);
    else onKey && onKey(val);
  };

  /**
   * Listen to keyboard key press and invoke onKeyPress
   * dependening on which key is pressed (letter, enter or delete)
   */
  useEffect(() => {
    function keyEventHandler(ev) {
      const key = ev.key;

      if (isEnterEvKey(key)) onKeyPress(ENTER_KEY.value);
      else if (isDeleteEvKey(key)) onKeyPress(DEL_KEY.value);
      else if (isValidLetterEvKey(key)) onKeyPress(key.toUpperCase());
    }
    window.addEventListener("keydown", keyEventHandler);
    return () => {
      window.removeEventListener("keydown", keyEventHandler);
    };
  });


  return (
    <div className="keyboard">
      {KEY_LINES.map((line, lineIdx) => (
        <div key={"keyboard_line_" + lineIdx} className="keyboard-line">
          {line.map((key, keyIdx) => (
            <KeyboardKey
              key={"line_" + lineIdx + "_key_" + keyIdx}
              value={key.value || key}
              label={key.label || key}
              status={letterStatus[key.value || key]}
              onPress={() => onKeyPress(key.value || key)}
            ></KeyboardKey>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
