import React, { Component } from 'react'

export class Inputs extends Component {

    state = {
        color: "black"
    }

    handleClick = (e) => {
        this.setState({
            color: e.target.style.color
        })
    }

    render() {
        return (
            <div>
                <h2 style={{ color: this.state.color }}>글자색이 변화합니다.</h2>
                <button style={{ color: "red" }} onClick={this.handleClick}>빨강색</button>
                <button style={{ color: "blue" }} onClick={this.handleClick}>파란색</button>
                <button style={{ color: "green" }} onClick={this.handleClick}>초록색</button>
            </div >
        )
    }
}

export default Inputs
