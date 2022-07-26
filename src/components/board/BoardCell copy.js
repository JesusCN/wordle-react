import "./BoardCell.css";
import Proptypes from "prop-types";

const SET_LETTER_CLASS = "grow-animation";
const SHOW_CLASS = "show-animation";

const SHOW_STATUS_CLASS = "half-rotate-from-0-animation";
const SHOW_STATUS_CLASS_2 = "half-rotate-from-90-animation";

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

  // return (
  //   <div
  //     className={
  //       "board-cell" +
  //       ` board-cell--${status}` +
  //       (letter ? ` ${SET_LETTER_CLASS} ` : "") +
  //       (show ? ` ${SHOW_CLASS} ` : "")
  //     }
  //   >
  //     <span>{letter}</span>
  //   </div>
  // );

  return (
    <div style={{ position: "relative" }}>
      <div
        className={
          "board-cell" +
          (letter ? ` ${SET_LETTER_CLASS} ` : "") +
          (show ? ` ${SHOW_STATUS_CLASS} ` : "")
        }
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <span>{letter}</span>
      </div>
      <div
        className={
          "board-cell" +
          (show ? ` ${SHOW_STATUS_CLASS_2} ` : "") +
          ` board-cell--${status}`
        }
        style={{
          transform: "rotateY(-90deg)",
        }}
      >
        <span>{letter}</span>
      </div>
    </div>
  );
}

export default BoardCell;
