import "./BoardRow.css";
import Proptypes from "prop-types";
import BoardCell from "./BoardCell";

BoardRow.propTypes = {
  word: Proptypes.string,
  maxLetters: Proptypes.number,
  wordStatus: Proptypes.array,
  show: Proptypes.bool,
};

function BoardRow({ word, maxLetters = 5, wordStatus = [] }) {
  const lettersArr = (word || "").padEnd(maxLetters, " ").split("");

  return (
    <div className="board-row">
      {lettersArr.map((letter, i) => (
        <BoardCell
          key={"boardCell_" + i}
          letter={letter}
          status={wordStatus[i] || "normal"}
          show={wordStatus[i] && wordStatus[i] !== "normal"}
        ></BoardCell>
      ))}
    </div>
  );
}

export default BoardRow;
