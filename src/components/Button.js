import React from 'react';

function Button({ stateNumber, number, nextNumber, setNumber }) {
    function set() {
        if(stateNumber.length > 10) return
        if(stateNumber === '0') {
            setNumber(number = '')
            setNumber(number => number += nextNumber)
        } else {
            setNumber(number => number += nextNumber)
        }
    }

    return (
        <button className="button" onClick={set}>
            {number}
        </button>
    );
}

export default Button;