import React from 'react'


const Photo = ({photo}) => {
  return (
    <div className='photoContainer'>
        <img className='photoSquare' src={photo.image} width={400} height={500} alt={photo.alt}></img>
    </div>
  )
}

export default Photo;