import React, { Component } from "react";
import "./Body.css";
import Square from "../Square/Square";

export class Body extends Component {
  render() {
    return <div className="bodyBackground">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras dui arcu, feugiat eget dignissim sed, imperdiet vitae ante. 
            Nunc eros sem, hendrerit sed viverra ut, eleifend id metus. Proin 
            convallis ornare odio, sed elementum ante aliquam ac. Suspendisse 
            massa tellus, blandit nec ultricies id, ornare quis tortor. Morbi 
            ut dignissim nibh. Duis eget sapien eu erat rutrum pharetra porta 
            et sapien. Vestibulum justo ante, faucibus malesuada ligula a, 
            commodo pretium elit. Fusce quis enim nisi. Morbi pellentesque
             dui in lorem viverra, ac fermentum dolor suscipit. Suspendisse 
             consequat ultrices nisl nec hendrerit. Mauris nec scelerisque 
             lorem, sed egestas justo. Donec et ipsum leo. Morbi quis nunc 
             congue, varius sem ac, efficitur libero. In vehicula nibh eget 
             nunc porta tristique. Nam ac lacinia diam, eget aliquam ligula. 
             Proin porta interdum ligula eu malesuada.</p>
        <Square/>
    </div>;
  }
}

export default Body;
