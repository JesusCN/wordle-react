import "./BoardCell.css";
import Proptypes from "prop-types";

const CELL_STATUS = {
  normal: "normal",
  correct: "correct",
  present: "present",
  abscent: "abscent",
};

BoardCell.propTypes = {
  letter: Proptypes.string,
  status: Proptypes.string,
};

function BoardCell({ letter, status = "normal" }) {
  letter = letter.trim();

  if (!CELL_STATUS[status])
    console.warn("BoardCell: incorrect cell status:" + status);

  return (
    <div
      className={
        "board-cell board-cell--" + status + (letter ? " grow-animation" : "")
      }
    >
      <span>{letter}</span>
    </div>
  );
}

export default BoardCell;
