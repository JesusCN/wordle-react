import Proptypes from "prop-types";
import BoardCell from "./BoardCell";

BoardRow.propTypes = {
  word: Proptypes.string,
  maxLetters: Proptypes.number,
};

function BoardRow({ word, maxLetters = 5 }) {
  const lettersArr = (word || "").padEnd(maxLetters, " ").split("");

  return (
    <div className="board-row">
      {lettersArr.map((letter) => (
        <BoardCell
          key={"boardCell_" + letter}
          letter={letter}
          status="normal"
        ></BoardCell>
      ))}
    </div>
  );
}

export default BoardRow;
