import React from 'react'
import Image from 'next/image'

const Photo = ({photo}) => {
  return (
    <div className='photoContainer'>
        <Image className='photoSquare' src={'/' + photo.image} width={photo.width} height={photo.height} alt={photo.alt} />
    </div>
  )
}

export default Photo;