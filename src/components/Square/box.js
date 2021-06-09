import React, { Component } from 'react'
import "./box.css"

export class Box extends Component {
    render() {
        return (
            <div className="boxes" style={{backgroundImage: `url(${this.props.image}`}}>
                {this.props.name}
            </div>
        )
    }
}

export default Box
