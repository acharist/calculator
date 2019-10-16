import React, { useState } from 'react'
import Button from './components/Button.js'
import ClearButton from './components/ClearButton.js'
import Output from './components/Output.js'
import ResultButton from './components/ResultButton.js'

function App() {
    const [ value, setValue ] = useState('0')
    const actionButtons = [
        { symbol: '+', appointment: 'addition' },
        { symbol: '-', appointment: 'subtraction' },
        { symbol: '*', appointment: 'multiplication' },
        { symbol: '/', appointment: 'division' },
        { symbol: '%', appointment: 'modulo' }
    ]

    function createActionButtons() {
        const buttons = []
        actionButtons.forEach(({ symbol, appointment }) => {
            buttons.push(
                <Button stateValue={value} value={symbol} setValue={setValue} key={appointment} />
            )
        })
        return buttons
    }

    function createButtons() {
        const buttons = []
        for(let i = 0; i < 10; i++) {
            buttons.push(
                <Button stateValue={value} value={i} setValue={setValue} key={i} />
            )
        }
        return buttons
    }

    return (
        <div className="app">
            <div className="calculator">
                <div className="inner_cont">
                    <h1>Made with React</h1>
                    <Output value={value}/>
                    <div className="button_cont">
                        {createButtons()}
                        {createActionButtons()}
                        <ResultButton value={value} setValue={setValue} />
                        <ClearButton setValue={setValue} />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default App
