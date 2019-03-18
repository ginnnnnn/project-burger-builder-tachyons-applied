import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawController = () => {
    this.setState(prevState => {
      return { showSideDraw: !prevState.showSideDraw };
    });
  };
  render() {
    return (
      <div className="bg-light-pink w-100 vh-100 ">
        <Layout
          showSideDraw={this.state.showSideDraw}
          sideDrawClicked={this.sideDrawController}
        >
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
