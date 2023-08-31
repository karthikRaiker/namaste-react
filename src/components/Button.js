import React from "react";

function Button({
  controler = () => {},
  children = "",
  style = { cursor: "pointer" },
}) {
  return (
    <button style={style} onClick={controler}>
      {children}
    </button>
  );
}

export default Button;
