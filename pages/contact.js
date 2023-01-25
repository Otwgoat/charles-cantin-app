import React from 'react'
import Meta from '../components/Meta'
import Description from '../components/Description'

const contact = () => {
  return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Me contacter'} description={'Une envie , une idée, un projet ? Contactez moi via le formulaire sur cette page, je m\'engage à y repondre dans les 24h.' } />
        <div className='contactContainer'>
            <h2>Me contacter</h2>
            <Description />
            <form name='contact' method='POST' data-netlify="true">
                <input className='inputText' type='text' name='lastname' placeholder='Nom' />
            </form>
            


        </div>
    </div>
  )
}

export default contact