import React, { Component } from "react";
import Aux from "../../hoc/Aux";

import Modal from "../../components/UI/Modal/Modal";

import Burger from "../../components/Burger/Burger";
import BuildControlls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGRDIENT_PRICE = {
  salad: 0.6,
  meat: 0.8,
  bacon: 0.4,
  cheese: 0.3
};

class BurgerBuilder extends Component {
  state = {
    items: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0
    },
    totalPrice: 4,
    purchaseAble: false,
    showOrder: false
  };

  updatePurchaseAble = updatedIngredients => {
    const updateItems = { ...updatedIngredients };
    const sum = Object.keys(updateItems)
      .map(item => {
        return updateItems[item];
      })
      .reduce((newSum, curr) => {
        return newSum + curr;
      }, 0);
    this.setState({ purchaseAble: sum > 0 });
  };
  addCountsController = name => {
    const oldCount = this.state.items[name];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.items };
    updatedIngredients[name] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGRDIENT_PRICE[name];
    this.setState({ items: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseAble(updatedIngredients);
  };

  removeCountsController = name => {
    const oldCount = this.state.items[name];
    let updatedCount;
    if (oldCount <= 0) {
      return;
    }
    updatedCount = oldCount - 1;

    const updatedIngredients = { ...this.state.items };
    updatedIngredients[name] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGRDIENT_PRICE[name];
    this.setState({
      items: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseAble(updatedIngredients);
  };

  showOrderController = () => {
    this.setState({ showOrder: true });
  };
  closeOrderController = () => {
    this.setState({ showOrder: false });
  };

  render() {
    const disableInfo = { ...this.state.items };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.showOrder} closed={this.closeOrderController}>
          <OrderSummary
            items={this.state.items}
            totalPrice={this.state.totalPrice}
            closed={this.closeOrderController}
          />
        </Modal>
        <Burger items={this.state.items} />
        <BuildControlls
          price={this.state.totalPrice}
          items={this.state.items}
          add={this.addCountsController}
          del={this.removeCountsController}
          disableInfo={disableInfo}
          purchaseAble={this.state.purchaseAble}
          order={this.showOrderController}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
