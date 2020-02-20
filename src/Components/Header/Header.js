import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App-header">
        <p>SHELFIE</p>
        <Link to="/">
          <p>Dashboard</p>
        </Link>
        <Link to="/form">
          <p>Form</p>
        </Link>
      </div>
    );
  }
}

export default Header;
