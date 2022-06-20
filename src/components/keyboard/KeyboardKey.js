import PropTypes from "prop-types";
import "./KeyboardKey.css";

const STATUS_CLASS = {
  normal: "key-normal",
  correct: "key-correct",
  present: "key-present",
  abscent: "key-abscent",
};

KeyboardKey.propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
  status: PropTypes.string,
};

function KeyboardKey({ value, onPress, label = "", status = "normal" }) {
  const handleOnClick = (val) => {
    onPress && onPress(val);
  };

  const statusClass = STATUS_CLASS[status] || STATUS_CLASS.normal;
  if (!STATUS_CLASS[status]) {
    console.warn(`KeyboardKey: Incorrect status for key (${status})`);
  }

  return (
    <button
      className={"keyboard-key " + statusClass}
      onClick={() => handleOnClick(value)}
    >
      {label || value}
    </button>
  );
}
export default KeyboardKey;
