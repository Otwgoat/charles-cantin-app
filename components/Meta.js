import Head from 'next/head'
import React from 'react'

const Meta = ({title, description}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        
    </Head>
  )
}
Meta.defaultProps = {
    title: "Charles Cantin - Photographe professionel",
    description: "J'immortalise les scénes mémorable de votre vie.",
}

export default Meta