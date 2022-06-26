import "./Board.css";
import BoardRow from "./BoardRow";

function Board() {
  return (
    <div className="board">
      <BoardRow word={"adios"}></BoardRow>
      <BoardRow word={"adios"}></BoardRow>
      <BoardRow word={"adios"}></BoardRow>
      <BoardRow word={"adios"}></BoardRow>
      <BoardRow word={"adios"}></BoardRow>
      <BoardRow word={"adios"}></BoardRow>
    </div>
  );
}

export default Board;
