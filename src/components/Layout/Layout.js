import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "./Toolbar/Toolbar";
import SideDraw from "./SideDraw/SideDraw";
import Backdrop from "../UI/Backdrop/Backdrop";

const contentClass = "h-100 w-100 pt4 ";

const layout = props => (
  <Aux>
    <Toolbar clicked={props.sideDrawClicked} />
    <SideDraw
      showSideDraw={props.showSideDraw}
      clicked={props.sideDrawClicked}
    />
    <Backdrop show={props.showSideDraw} closed={props.sideDrawClicked} />
    <main className={contentClass}>{props.children}</main>
  </Aux>
);
export default layout;
