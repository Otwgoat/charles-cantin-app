import React from 'react'

const Input = ({input}) => {
  return (
    <>
    <input name={input.name} type={input.area} placeholder={input.placeholder} className={input.type === 'text' || input.type === 'email' ? 'inputText' : 'inputTextArea'} />
    </>
  )
}

export default Input;