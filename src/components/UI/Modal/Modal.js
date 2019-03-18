import React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

let modalClass = "";

const modal = props => {
  modalClass = props.show === true ? "Modal On" : "Modal";
  return (
    <Aux>
      <div className={modalClass}>{props.children}</div>
      <Backdrop show={props.show} closed={props.closed} />
    </Aux>
  );
};

export default modal;
