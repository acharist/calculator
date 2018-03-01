import React, { Component } from 'react';

class Output extends Component {
    handleInput() {
        
    }

    render() {
        return (
            <input className="output_field" value={this.props.valueFromBtns} onInput={this.handleInput.bind(this)}/>
        );
    }
}

export default Output;