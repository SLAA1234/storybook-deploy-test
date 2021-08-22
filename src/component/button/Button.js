import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

//button receives props, it is a reusable button
const Button = ({variant, children, disabled, ...props}) => {
    //The rest parameter syntax allows a function to accept an indefinite number 
    //of arguments as an array, meaning methods like sort, map, forEach or pop can be applied on it directly
   
    return (
        <div>
            <button className={`button ${variant} small`} disabled={disabled} {...props}>
                {children}
            </button>
        </div>
    )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    variant: 'secondary',
    children: 'Button args',
    onClick: undefined,
    disabled: false
}
export default Button
