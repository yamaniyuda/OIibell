import React, { Component } from "react";
import Order from "../assets/basket.png";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar row">
        <div className="navbar-title col-2">
          <h3>Oibell</h3>
        </div>
        <div className="navbar-search col-8">
          <input type="search" placeholder="Cari Barang..." />
        </div>
        <div className="navbar-order col">
          <img src={Order} alt="https://www.flaticon.com/authors/smartline" />
          <div className="navbar-order-count">
            <h4>{}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
