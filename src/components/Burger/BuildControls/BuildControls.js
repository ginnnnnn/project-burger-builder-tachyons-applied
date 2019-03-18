import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";
import Button from "../../UI/Button/Button";

const buildControls = props => {
  const orderClassDis =
    "b ba f6 br-pill ma2 dib blue bg-grey Dis dim b--light-pink";
  const orderClass =
    "b ba f6 br-pill pa1 ma2 blue bg-light-yellow grow b--light-pink";
  const Controls = Object.keys(props.items).map((itemKey, i) => {
    return (
      <BuildControl
        key={itemKey + i}
        name={itemKey}
        add={() => props.add(itemKey)}
        del={() => props.del(itemKey)}
        disable={props.disableInfo[itemKey]}
      />
    );
  });
  return (
    <div className="b--light-blue bg-light-blue h-50 flex flex-column items-center center ph3 shadow-1">
      <p className="mb1 mid-gray b">Total: ${props.price.toFixed(1)}</p>
      {Controls}
      <Button
        btnType={props.purchaseAble === true ? orderClass : orderClassDis}
        disabled={!props.purchaseAble}
        clicked={props.order}
      >
        Order Now
      </Button>
    </div>
  );
};

export default buildControls;
