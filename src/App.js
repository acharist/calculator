/* eslint no-eval: 0 */
import React, { Component } from 'react';
import Output from './components/Output.js';
import Button from './components/Button.js';
import ClearButton from './components/ClearButton.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfButtons: 16,
            value: 0
        }

        this.accumulator = 0;
    }

    clearOutput() {
        this.accumulator = 0;
        this.setState({
            value: 0
        })
    }

    outputResult() {
        if(this.state.value.length < 20) {
            let result;
            if(isNaN(this.accumulator)) {
                console.log(this.accumulator)
                result = eval(this.accumulator);
            } else {
                console.log(this.accumulator)
                result = 0;
                this.accumulator = 0;
            }
            this.setState({
                value: result
            })
        } else {
            this.accumulator = 0;
            this.setState({ value: 0 })
        }
    }

    setBtnValueToState(value) {
        if(String(this.accumulator).charAt(0) === '0' && (value === '+'
        || value === '-' || value === '*' || value === '/') ) {
            this.accumulator = 0;
        } else if(value === '0' && String(this.accumulator).split('').reduce((acc, c) => acc + +c, 0) === 0) {
            this.accumulator = 0;
        } else if(String(this.accumulator).charAt(0) === '0' && value !== 0) {
            this.accumulator = String(this.accumulator).charAt(0).substr(1);
            this.accumulator += value;
        } else {
            this.accumulator += value;
        }
        
        this.setState({
            value: this.accumulator.length >= 20 ? 'Sorry, the value is too big' : this.accumulator
        });
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
                        method={this.outputResult.bind(this)}
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
