import React, { Component } from "react";
import "./Sidebar.css";

export class Sidebar extends Component {
  state = {
    sideBarColor: "red",
  };

  handleColorChange = (color) => {
    this.setState({
      sideBarColor: color,
    });
  };
  render() {
    return (
      <div
        className="sidebarMain"
        style={{ backgroundColor: this.state.sideBarColor, cursor: "pointer" }}
      >
        <ul>
          <li onClick={() => this.handleColorChange("yellow")}>Yellow</li>
          <li onClick={() => this.handleColorChange("red")}>Red</li>
          <li onClick={() => this.handleColorChange("blue")}>Blue</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
