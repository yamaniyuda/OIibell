import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="main">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Home;
