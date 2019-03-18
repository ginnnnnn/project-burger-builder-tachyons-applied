import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.items).map((igKey, i) => {
    return props.items[igKey] > 0 ? (
      <li className="ttc" key={igKey + i}>
        {igKey} ({props.items[igKey]})
      </li>
    ) : null;
  });
  return (
    <div className="bg-washed-yellow pa3 ba bw2 b--mid-gray near-black ma0 i">
      <p className="h1">Your order</p>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p className="b">Total Price: ${props.totalPrice.toFixed(1)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="bg-light-yellow b">Continue</Button>
      <Button clicked={props.closed} btnType="bg-light-pink b">
        Cancel
      </Button>
    </div>
  );
};

export default orderSummary;
