import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom w-40-ns w-30-l">{""}</div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop w-40-ns w-30-l">
            <div className="Seeds1">{""}</div>
            <div className="Seeds2">{""}</div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="Meat w-40-ns w-30-l">{""}</div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese w-40-ns w-30-l">{""}</div>;
        break;
      case "salad":
        ingredient = <div className="Salad w-40-ns w-30-l">{""}</div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon w-40-ns w-30-l">{""}</div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
