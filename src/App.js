import React, { useState } from 'react'
import Button from './components/Button.js'
import ActionButton from './components/ActionButton.js'

function App() {
    const [ action, setAction ] = useState('')
    const [ number, setNumber ] = useState('0')
    const actionButtons = [
        { symbol: '+', appointment: 'addition' },
        { symbol: '-', appointment: 'subtraction' },
        { symbol: '*', appointment: 'multiplication' },
        { symbol: '/', appointment: 'division' },
        { symbol: '%', appointment: 'modulo' }
    ]

    function createActionButtons() {
        const buttons = [];
        actionButtons.forEach(({ symbol, appointment }) => {
            buttons.push(<ActionButton action={symbol} setAction={setAction} key={appointment} />)
        })
        return buttons
    }

    function createButtons() {
        const buttons = []
        for(let i = 0; i < 10; i++) {
            buttons.push(
                <Button stateNumber={number} number={i} nextNumber={i} setNumber={setNumber} key={i}/>
            )
        }
        return buttons
    }

    return (
        <div className="app">
        {number}
            <div className="calculator">
                <div className="inner_cont">
                    <h1>Made with React</h1>
                    <div className="button_cont">
                        {createButtons()}
                        {createActionButtons()}
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default App;
