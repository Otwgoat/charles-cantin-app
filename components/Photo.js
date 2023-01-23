import React from 'react'
import Image from 'next/image'

const Photo = ({photo}) => {
  return (
    <div className='photoContainer'>
        <Image className='photoSquare' src={'/' + photo.image} width={400} height={500} alt={photo.alt} />
        <p>{photo.tag}</p>
    </div>
  )
}

export default Photo;