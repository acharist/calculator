import React from "react";

function Button({ stateValue, value, setValue }) {
  function set() {
    if (stateValue.length > 10) return;
    if (isNaN(stateValue.slice(-1)) && isNaN(value)) return;
    if (stateValue === "0") {
      setValue((stateValue = ""));
      setValue((stateValue) => (stateValue += value));
    } else {
      setValue((stateValue) => (stateValue += value));
    }
  }

  return (
    <button className="button" onClick={set}>
      {value}
    </button>
  );
}

export default Button;
