import React from 'react'

const Input = ({input}) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={input.name}>{input.label}</label>
      <input required name={input.name} id={input.name} type={input.type} placeholder={input.placeholder} className='inputText' />
    </div>
  )
}

export default Input;