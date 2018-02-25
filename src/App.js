import React, { Component } from 'react';
import Output from './components/Output.js';
import Button from './components/Button.js';
import ClearButton from './components/ClearButton.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            amountOfButtons: 16,
            value: 0
        }

        this.valueAcum = 0;
    }

    clearOutput() {
        this.valueAcum = 0;
        this.setState({
            value: 0
        })
    }

    carryAction(operator) {
        // console.log(operator)
    }

    findsСoincidences() { // /\+|\-|\/|\*/;
        const pattern = /[+-/*]/;
        let operator;
        if(String(this.valueAcum).search(pattern) !== -1) {
            operator = this.valueAcum.substr(-1)
            switch(operator) {
                case '+':
                    this.carryAction('+')
                    break
                case '-':
                    this.carryAction('-')
                    break
                case '*':
                    this.carryAction('*')
                    break
                case '/':
                    this.carryAction('/')
                    break
                default:
                    throw new Error('The unexpected symbol')
            }
        }
    }

    setBtnValueToState(value) {

        if(String(this.valueAcum).charAt(0) === '0' && value === '+') {
            
        } else {
            this.valueAcum += value;
        }

        if(String(this.valueAcum).charAt(0) === '0') {
            this.valueAcum = String(this.valueAcum).charAt(0).substr(1);
        }
        
        if(value === '0' && String(this.valueAcum).split('').reduce((acc, c) => acc + c, 0) === '0') {
            this.valueAcum = 0;
        }
        
        this.setState({
            value: this.valueAcum
        });

        this.findsСoincidences();
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
                        <Output valueFromBtns={this.state.value}/>
                        <div className="button_cont">
                            {this.createNumBtns()}
                            {this.createOtherBtns()}
                        </div>
                        <ClearButton method={this.clearOutput.bind(this)}/>
                    </div>  
                </div>
            </div>
        );
    }
}

export default App;
