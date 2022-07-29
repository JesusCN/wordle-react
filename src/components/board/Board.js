import "./Board.css";
import BoardRow from "./BoardRow";
import Proptypes from "prop-types";
import WordsUtils from "../../utils/WordsUtils";

Board.propTypes = {
  words: Proptypes.array,
  maxWords: Proptypes.number,
  maxLetters: Proptypes.number,
  correctWord: Proptypes.string,
  showWords: Proptypes.array,
};

function Board({
  words = [],
  maxWords = 6,
  maxLetters = 5,
  correctWord = "",
  showWords = [],
}) {
  const wordList = [...words, ...Array(maxWords - words.length).fill("")];

  console.log("showWords", showWords);

  const wordStatuses = [];
  showWords.forEach((val, i) => {
    if (words[i]) {
      wordStatuses.push(WordsUtils.GetStatusWord(words[i], correctWord));
    }
  });

  return (
    <div className="board">
      {wordList.map((w, i) => (
        <BoardRow
          key={"word_row_" + i}
          word={w}
          maxLetters={maxLetters}
          wordStatus={wordStatuses[i]}
        ></BoardRow>
      ))}
    </div>
  );
}

export default Board;
