import React from 'react'

const Input = ({input}) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={input.name}>{input.label}</label>
      <input required name={input.name} type={input.type} placeholder={input.placeholder} className={input.type === 'text' || input.type === 'email' ? 'inputText' : 'inputTextArea'} />
    </div>
  )
}

export default Input;