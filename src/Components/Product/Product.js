import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Product">
        <div className="product-img">IMAGE BOX</div>
        <div className="product-box">
          <p>{this.props.product.name}</p>
          <p>{this.props.product.price}</p>
          <p>{this.props.product.image}</p>
        </div>
      </div>
    );
  }
}

export default Product;
