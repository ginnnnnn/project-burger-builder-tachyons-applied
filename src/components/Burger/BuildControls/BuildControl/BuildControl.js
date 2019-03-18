import React from "react";
import "./BuildControl.css";

const buildControl = props => {
  let btn = "courier db b h2 w3 w-20-ns outline-0 ba b--orange br3 grow ph2";
  let btnAdd = btn + " pointer";
  let pName =
    "avenir ttu b ba pa2 w4 w-20-ns tc bw2 br-pill b--light-yellow ma0";
  switch (props.name) {
    case "salad":
      pName = pName + " bg-light-green";
      btnAdd = btnAdd + " yellow bg-dark-pink";
      btn = btn + " yellow bg-light-purple";
      break;
    case "meat":
      pName = pName + " bg-light-red";
      btnAdd = btnAdd + " yellow bg-navy";
      btn = btn + " yellow bg-dark-green";
      break;
    case "cheese":
      pName = pName + " bg-yellow";
      btnAdd = btnAdd + "near-black bg-yellow";
      btn = btn + " near-black bg-light-blue";
      break;
    default:
      pName = pName + " bg-light-blue";
      btnAdd = btnAdd + " yellow bg-orange";
      btn = btn + " yellow bg-blue";
  }
  const btnDel = props.disable === true ? btn + " Dis o-50" : btn + " pointer";
  return (
    <div className="flex justify-around items-center bg-lightest-blue w-100 w-70-ns br-pill mb1 o-80">
      <p className={pName}>{props.name}</p>
      <button className={btnAdd} onClick={props.add}>
        More
      </button>
      <div className="b h2 w1 yellow bg-yellow br2 ba b--yellow bw1"> </div>
      <button className={btnDel} onClick={props.del} disabled={props.disable}>
        Less
      </button>
    </div>
  );
};

export default buildControl;
