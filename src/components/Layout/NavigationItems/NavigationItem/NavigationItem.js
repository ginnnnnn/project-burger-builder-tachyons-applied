import React from "react";

const navigationItem = props => {
  let liClass = "";
  let pClass = "";
  if (props.shows === "toolbar") {
    liClass =
      "bg-dark-green grow-large bg-animate shadow-hover border-box mr2 mr4-ns db ph2 br3 hover-bg-purple flex h-100 items-center tc";
    pClass = "b yellow link h-100 pt2 border-box db";
  } else if (props.shows === "sidedraw") {
    pClass = "f6 link dim br2 ph3 pv2 mb2 dib yellow bg-dark-gray w-60 h2";
  }

  return (
    <li className={liClass}>
      <p className={pClass}>{props.name}</p>
    </li>
  );
};

export default navigationItem;
