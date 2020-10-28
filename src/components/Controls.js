import React from "react";
import Volume from "./Volume";
import Switch from "./Switch";
import TextBox from "./TextBox";

function Controls({ power }) {
  return (
    <div className="controls-container">
      <Switch power={power} />
      <TextBox />
      <Volume />
    </div>
  );
}

export default Controls;
