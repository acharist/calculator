import React, { Component } from 'react';

class ClearButton extends Component {
    render() {
        return (
            <button className="clear_btn" onClick={this.props.method.bind(this)}>Clear</button>
        );
    }
}

export default ClearButton;