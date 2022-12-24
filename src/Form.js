import React from 'react'
import Button from './Button';

const Form = ({ reqType, setReqType }) => { // form is receiving properties --destructuring
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button
            buttonText="users" // button properties
            reqType={reqType}
            setReqType={setReqType}
        />
        <Button
            buttonText="posts"
            reqType={reqType}
            setReqType={setReqType}
        />
        <Button
            buttonText="comments"
            reqType={reqType}
            setReqType={setReqType}
        />
    </form>
  )
}

export default Form