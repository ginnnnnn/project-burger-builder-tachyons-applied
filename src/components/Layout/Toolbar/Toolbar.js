import React from "react";

import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

let headerClass =
  "h2 w-100 fixed top-0 left-0 flex justify-between items-center border-box yellow bg-dark-green z-2";
const toolbar = props => {
  return (
    <header className={headerClass}>
      <Logo height="h-100" clicked={props.clicked} />
      <nav className="h-100 dn db-ns">
        <NavigationItems show="toolbar" />
      </nav>
    </header>
  );
};

export default toolbar;
