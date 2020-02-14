import React from "react";
import Product from "../Product/Product";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inventoryList = this.props.inventory.map((element, index) => {
      return (
        <Product
          inventory={this.props.inventory}
          key={index}
          product={element}
        />
      );
    });
    return (
      <div>
        Dashboard
        {inventoryList}
      </div>
    );
  }
}

export default Dashboard;
