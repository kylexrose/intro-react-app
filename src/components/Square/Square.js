import React, { Component } from 'react'
import Box from "./box"

export class Square extends Component {
    render() {
        return (
            <div style={{display:"flex"}}>
                <Box name="square 1" image="https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg"/>
                <Box name="square 2" image="https://www.servicehusky.com/imagehost/di/WBWM/Full-HD-Desktop-Hd-nature-wallpaper-for-Desktop-Background.jpg"/>
                <Box name="square 3" image="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"/>
            </div>
        )
    }
}

export default Square
