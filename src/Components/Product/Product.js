import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

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
          <div>
            <button
              className="button"
              onClick={() => this.props.deleteProduct(this.props.product.id)}
            >
              Delete
            </button>
            <Link to="/form">
              <button
                className="button"
                onClick={() => this.props.getOne(this.props.product.id)}
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
