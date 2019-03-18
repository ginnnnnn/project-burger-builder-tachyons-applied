import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

let burgerClassName =
  "purple bg-burger w-100 center overflow-scroll tc b f4 b--light-yellow bw1 h5";
burgerClassName = burgerClassName + " "; //@media large
burgerClassName = burgerClassName + " "; //@media not small

const burger = props => {
  let BurgerIngredients = Object.keys(props.items)
    .map(itemKey => {
      return [...Array(props.items[itemKey])].map((_, i) => (
        <BurgerIngredient key={itemKey + i} type={itemKey} />
      )); // [[</>,</>],[..],[..]]
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []); // [</>,</>,.. ,...] flatten the array

  if (BurgerIngredients.length === 0) {
    BurgerIngredients = <p className="b">please start adding ingredients</p>;
  }
  return (
    <div className={burgerClassName}>
      <BurgerIngredient type="bread-top" />
      {BurgerIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
