import React from "react";
import Product from "../Product/Product";

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Dashboard
        <Product />
      </div>
    );
  }
}

export default Dashboard;
