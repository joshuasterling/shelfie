import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
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

  componentDidUpdate() {}

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
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Dashboard
                  {...props}
                  inventory={this.state.inventory}
                  getProducts={this.getProducts}
                  getOne={this.getOne}
                />
              )}
            />

            <Route
              path="/form"
              render={props => (
                <Form
                  {...props}
                  getProducts={this.getProducts}
                  currentProduct={this.state.currentProduct}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
