import Keyboard from "../keyboard/Keyboard";

function MainGame() {
  const onKey = (keyVal) => console.log("onKey:" + keyVal);
  const onEnter = (keyVal) => console.log("onEnter:" + keyVal);
  const onDelete = (keyVal) => console.log("onDelete:" + keyVal);

  return (
    <Keyboard onKey={onKey} onEnter={onEnter} onDelete={onDelete}></Keyboard>
  );
}

export default MainGame;
