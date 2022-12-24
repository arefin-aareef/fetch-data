import React from 'react'

const Button = ({ buttonText, reqType, setReqType }) => { // destructuring properties
  return (
    <button
        className={buttonText === reqType ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button