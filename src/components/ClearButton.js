import React from 'react'

function ClearButton({ setValue }) {
    return (
        <button className="clear_btn" onClick={() => setValue('0')}>Clear</button>
    )
}

export default ClearButton