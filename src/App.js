import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Square from "./components/Square/Square";

export class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="middle">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
