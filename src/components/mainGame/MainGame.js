import "./MainGame.css";

import Board from "../board/Board";
import Keyboard from "../keyboard/Keyboard";

function MainGame() {
  const onKey = (keyVal) => console.log("onKey:" + keyVal);
  const onEnter = (keyVal) => console.log("onEnter:" + keyVal);
  const onDelete = (keyVal) => console.log("onDelete:" + keyVal);

  return (
    <div className="main-game">
      <div className="board-container">
        <Board></Board>
      </div>
      <div className="keyboard-container">
        <Keyboard
          onKey={onKey}
          onEnter={onEnter}
          onDelete={onDelete}
        ></Keyboard>
      </div>
    </div>
  );
}

export default MainGame;
