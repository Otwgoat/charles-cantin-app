import Head from 'next/head'
import React from 'react'


/** This component sets the meta for each page by using props */
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