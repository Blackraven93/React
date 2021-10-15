import React, { Component } from 'react'
import './ValidationSample.css';


export class ValidationSample extends Component {

    state = {
        value: '',
        className: ''
    }

    handleOnClick = () => {
        if (this.state.value === '0000') {
            this.setState({
                className: 'sucess'
            })

        } else {
            this.setState({
                className: 'failure'
            })

        }
        this.input.focus()
    }

    handleOnChange = (e) => {
        this.setState(
            {
                value: e.target.value
            }
        )
    }

    render() {
        return (
            <>
                <h2>비밀번호 유효성 검증</h2>
                <input
                    ref={(ref) => this.input = ref}
                    type="password"
                    name="password"
                    className={this.state.className}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                />
                <button onClick={this.handleOnClick}>Validate</button>
            </>
        )
    }
}

export default ValidationSample
