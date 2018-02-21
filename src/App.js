import React, { Component } from 'react';
import Output from './components/Output.js';
import Button from './components/Button.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 0,
            amountOfButtons: 16
        }
    }

    changeInputValue(value) {
        this.setState({
            inputValue: value
        })
    }

    createButtons() {
        const length = this.state.amountOfButtons;
        let uiComponents = [];
        for(let i = 0; i < length; i++) {
            uiComponents.push(<Button i={i} key={i} method={this.changeInputValue.bind(this)} />)
        }

        return uiComponents;
    }

    render() {
        console.log(this.state.inputValue)
        return (
            <div className="App">
                <div className="inner_cont">
                    <h1>Made with React</h1>
                    <Output />
                    <div className="button_cont">
                        {this.createButtons()}
                    </div>
                </div>  
            </div>
        );
    }
}

export default App;
