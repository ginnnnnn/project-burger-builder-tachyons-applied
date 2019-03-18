import React from "react";

const backdrop = props =>
  props.show === true ? (
    <div
      onClick={props.closed}
      className="fixed w-100 h-100 z-3 top-0 left-0 bg-black o-50"
    />
  ) : null;

export default backdrop;
