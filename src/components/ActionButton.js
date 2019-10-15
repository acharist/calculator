import React from 'react';

function Button({ action, setAction }) {
    return (
        <button className="button" data-action={action} onClick={(e) => setAction(action = e.target.dataset.action)}>
            {action}
        </button>
    );
}

export default Button;