import React from 'react'
import Image from 'next/image'

/** Displays a photo */
const Photo = ({photo}) => {
  return (
    <div className='photoContainer'>
        <Image className='photoSquare' src={'/' + photo.image} width={400} height={500} alt={photo.alt} priority={true} />
        
    </div>
  )
}

export default Photo;