import React from "react";
import burgerIcon from "../../../assets/burger.png";

const logo = props => (
  <div className={props.height} onClick={props.clicked}>
    <img src={burgerIcon} alt="icon" className="h-100 ml1" />
  </div>
);

export default logo;
