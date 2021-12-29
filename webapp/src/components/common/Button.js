import React from 'react'

export const Button = ({ title, disabled, onClick }) => {
    return(
        <button onClick={onClick()} disabled={disabled}>{title}</button>
    )
}