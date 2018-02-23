import React, { Component } from 'react';
import Output from './components/Output.js';
import Button from './components/Button.js';
import ClearButton from './components/ClearButton.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            amountOfButtons: 16,
            buttonsValue: 0
        }
    }

    mergeValues() {

    }

    setBtnValueToState(value) {
        this.setState({
            buttonsValue: value
        })
        console.log(this.state.buttonsValue)
    }

    createNumBtns() {
        let numBtns = [];
        for(let i = 0; i < 10; i++) {
            numBtns.push(<Button 
                i={i}
                key={i}
                method={this.setBtnValueToState.bind(this)}
            />)
        }

        return numBtns;
    }

    createOtherBtns() {
        let otherBtns = [];

        for(let i = 0; i < 6; i++) {
            switch(i) {
                case 0:
                    otherBtns.push(<Button 
                        i={'%'}
                        key={i}
                        method={this.setBtnValueToState.bind(this)}
                    />)
                    break
                case 1:
                    otherBtns.push(<Button 
                        i={'+'}
                        key={i}
                        method={this.setBtnValueToState.bind(this)}
                    />)
                    break
                case 2:
                    otherBtns.push(<Button 
                        i={'-'}
                        key={i}
                        method={this.setBtnValueToState.bind(this)}
                    />)
                    break
                case 3:
                    otherBtns.push(<Button 
                        i={'*'}
                        key={i}
                        method={this.setBtnValueToState.bind(this)}
                    />)
                    break
                case 4:
                    otherBtns.push(<Button 
                        i={'/'}
                        key={i}
                        method={this.setBtnValueToState.bind(this)}
                    />)
                    break
                case 5:
                    otherBtns.push(<Button 
                        i={'='}
                        key={i}
                        method={this.setBtnValueToState.bind(this)}
                    />)
                    break
                default:
                    console.log('Test string');
            }
            
        }

        return otherBtns;
    }

    render() {
        return (
            <div className="App">
                <div className="Calculator">
                    <div className="inner_cont">
                        <h1>Made with React</h1>
                        <Output valueFromBtns={this.state.buttonsValue}/>
                        <div className="button_cont">
                            {this.createNumBtns()}
                            {this.createOtherBtns()}
                        </div>
                        <ClearButton />
                    </div>  
                </div>
            </div>
        );
    }
}

export default App;
