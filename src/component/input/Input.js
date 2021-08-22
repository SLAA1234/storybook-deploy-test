import React from 'react'
import './Input.css'

const Input = (props) => {
    //set default size. how the rest will be used
    const { size='medium', ...rest} = props

    return (
        <input className={ `input ${size}`} {...rest} />
    )
}

export default Input