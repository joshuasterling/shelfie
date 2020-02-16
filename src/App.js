import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentProduct: {}
    };

    this.getProducts = this.getProducts.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate() {
    this.getProducts();
  }

  getProducts() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  getOne(id) {
    axios.get(`/api/inventory/${id}`).then(res => {
      this.setState({
        currentProduct: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          getProducts={this.getProducts}
          getOne={this.getOne}
        />
        <Form
          getProducts={this.getProducts}
          currentProduct={this.state.currentProduct}
        />
      </div>
    );
  }
}

export default App;
