import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <p className="output_field">{this.props.valueFromBtns}</p>
        );
    }
}

export default Output;