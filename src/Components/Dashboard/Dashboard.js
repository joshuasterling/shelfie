import React from "react";
import axios from "axios";
import Product from "../Product/Product";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios
      .delete(`/api/product/${id}`)
      .then(() => this.props.getProducts())
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const inventoryList = this.props.inventory.map((element, index) => {
      return (
        <Product
          inventory={this.props.inventory}
          key={index}
          product={element}
          deleteProduct={this.deleteProduct}
          getOne={this.props.getOne}
        />
      );
    });
    return <div>{inventoryList}</div>;
  }
}

export default Dashboard;
