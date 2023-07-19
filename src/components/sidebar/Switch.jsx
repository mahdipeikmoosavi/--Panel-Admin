import React from "react";
import "./Switch.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Switch = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div class="wrapper">
      <input
        type="checkbox"
        name="checkbox"
        class="switch"
        onClick={() => dispatch({ type: "TOGGLE" })}
      />
    </div>
  );
};

export default Switch;
