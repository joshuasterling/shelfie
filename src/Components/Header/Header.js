import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App-header">
        {/* <img src="" alt="logo" /> */}
        <p>SHELFIE</p>
      </div>
    );
  }
}

export default Header;
