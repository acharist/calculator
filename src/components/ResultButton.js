import React from 'react'

function ResultButton({ value, setValue }) {
    function calculate() {
        if(isNaN(value.slice(-1))) return
        setValue(eval(value).toString())
    }

    return (
        <button className="button" onClick={calculate}>=</button>
    )
}

export default ResultButton