import React, { useState } from 'react'
import Button from './components/Button.js'

function App() {
    const [ symbol, setSymbol ] = useState('')
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
            buttons.push(<Button symbol={symbol} setSymbol={setSymbol} key={appointment} />)
        })
        return buttons
    }

    return (
        <div className="app">
        {symbol}
            <div className="calculator">
                <div className="inner_cont">
                    <h1>Made with React</h1>
                    <div className="button_cont">
                        {createActionButtons()}
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default App;
