import "./BoardCell.css";
import Proptypes from "prop-types";

const SET_LETTER_CLASS = "grow-animation";
const SHOW_ANIM_CELL_FRONT = "half-rotate-from-0-animation";
const SHOW_ANIM_CELL_BACK = "half-rotate-from-90-animation";

const CELL_STATUS = {
  normal: "normal",
  correct: "correct",
  present: "present",
  abscent: "abscent",
};

BoardCell.propTypes = {
  letter: Proptypes.string,
  status: Proptypes.string,
  show: Proptypes.bool,
};

function BoardCell({ letter, status = "normal", show = false }) {
  letter = letter.trim();

  if (!CELL_STATUS[status])
    console.warn("BoardCell: incorrect cell status:" + status);

  return (
    <div className="board-cell-container">
      <div
        className={
          "board-cell" +
          (letter ? ` ${SET_LETTER_CLASS} ` : "") +
          (show ? ` ${SHOW_ANIM_CELL_FRONT} ` : "")
        }
      >
        <span>{letter}</span>
      </div>
      <div
        className={
          "board-cell rotate--90deg" +
          (show ? ` ${SHOW_ANIM_CELL_BACK} ` : "") +
          ` board-cell--${status}`
        }
      >
        <span>{letter}</span>
      </div>
    </div>
  );
}

export default BoardCell;
