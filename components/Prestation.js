import React from 'react'

const Prestation = ({id, title, content}) => {
  return (
    <div className='prestationItem' id={id}>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default Prestation