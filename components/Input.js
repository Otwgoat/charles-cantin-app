import React from 'react'

const Input = (name, type, placeholder) => {
  return (
    <>
      <input className={type === 'text' || type === 'email' ? inputText : inputTextArea} name={name} type={type} placeholder={placeholder} />
    </>
  )
}

export default Input;