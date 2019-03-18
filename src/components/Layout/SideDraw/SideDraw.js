import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDraw.css";

const sideDraw = props => {
  let sideDrawClass =
    "fixed w-50 mw6 h-100 top-0 left-0 z-4 border-box bg-lightest-blue ph2 pv1 TSTF dn-ns";
  if (props.showSideDraw === true) {
    sideDrawClass = sideDrawClass + " On";
  } else {
    sideDrawClass = sideDrawClass + " Off";
  }
  return (
    <div className={sideDrawClass}>
      <Logo height="h2" clicked={props.clicked} />
      <nav>
        <NavigationItems show="sidedraw" />
      </nav>
    </div>
  );
};

export default sideDraw;
