import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      imgurl: "",
      name: "",
      price: 0
    };

    //Preserve initial state
    this.baseState = this.state;

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  handleImageChange(event) {
    this.setState({
      imgurl: event.target.value
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handlePriceChange(event) {
    this.setState({
      price: event.target.value
    });
  }

  resetInputs = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <div className="form">
        <div className="form-img-preview">
          <h1>Image Preview Goes Here</h1>
        </div>
        <p>Image URL:</p>
        <input
          type="text"
          value={this.state.imgurl}
          onChange={this.handleImageChange}
        />
        <p>Product Name:</p>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <p>Price:</p>
        <input
          // type="text"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <div className="form-button-box">
          <button onClick={this.resetInputs}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
