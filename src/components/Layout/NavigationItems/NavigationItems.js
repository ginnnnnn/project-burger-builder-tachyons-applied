import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  let ulClass = "";
  if (props.show === "toolbar") {
    ulClass = "list ma0 pa0 flex items-center h-100";
  } else if (props.show === "sidedraw") {
    ulClass = "list ma0 pa0 flex  h-100 flex-column justify-between";
  }
  return (
    <ul className={ulClass}>
      <NavigationItem name="Order" shows={props.show} />
      <NavigationItem name="login" shows={props.show} />
      <NavigationItem name="Order" shows={props.show} />
    </ul>
  );
};

export default navigationItems;
