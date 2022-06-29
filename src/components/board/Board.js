import "./Board.css";
import BoardRow from "./BoardRow";
import Proptypes from "prop-types";

Board.propTypes = {
  words: Proptypes.array,
  maxWords: Proptypes.number,
  maxLetters: Proptypes.number,
};

function Board({ words = [], maxWords = 6, maxLetters = 5 }) {
  
  const wordList = [...words, ...Array(maxWords - words.length).fill("")];

  return (
    <div className="board">
      {wordList.map((w, i) => (
        <BoardRow
          key={"word_row_" + i}
          word={w}
          maxLetters={maxLetters}
        ></BoardRow>
      ))}
    </div>
  );
}

export default Board;
