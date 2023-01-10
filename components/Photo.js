import React from 'react'
import Image from 'next/image'

const Photo = ({photo}) => {
  return (
    <div className='photoContainer'>
        <img src={'/public/' + photo.image} width={400} height={500} alt={photo.alt}></img>
    </div>
  )
}

export default Photo;