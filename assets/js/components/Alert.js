import React from 'react'

const Alert = ({ message }) => {
    if (!message) return null;

    return (
        <div class="alert alert-primary" role="alert">
            {message}
        </div>
    )
}

export default Alert