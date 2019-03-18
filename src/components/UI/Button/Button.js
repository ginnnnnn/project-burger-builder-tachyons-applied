import React from "react";

const button = props => (
  <button
    onClick={props.clicked}
    className={`f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib ${props.btnType}`}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default button;
