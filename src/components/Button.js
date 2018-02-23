import React, { Component } from 'react';

class Button extends Component {
    handleInput(event) {
        const target = event.target;
        this.props.method(target.value);
    }

    render() {
        return (
            <button className={'btn_' + this.props.i} value={this.props.i} onClick={this.handleInput.bind(this)}>
                {this.props.i}
            </button>
        );
    }
}

export default Button;