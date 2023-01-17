import React from 'react'

const Prestation = ({id, title, content, price}) => {
  return (
    <div className='prestationItem' id={id}>
        <h4>"{title}"</h4>
        <p>{content}</p>
        <p id='priceP'>{price} €</p>
    </div>
  )

}


export default Prestation