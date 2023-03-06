import React from 'react'
import Meta from '../components/Meta'
import Description from '../components/Description'
import ContactForm from '../components/ContactForm';
import fsPromises from 'fs/promises';
import path from 'path';

/** Contact page , getStaticProps return the form fields added on the cms.*/
const contact = (props) => {
    let inputs = props.inputs;
    return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Me contacter'} description={'Une envie , une idée, un projet ? Contactez moi via le formulaire sur cette page, je m\'engage à y repondre dans les 24h.' } />
        <div className='contactContainer'>
            <h2>Me contacter</h2>
            <Description />
            <ContactForm inputs={inputs}/>
        </div>
    </div>
  )
}

export default contact;
/*** Import the data of the portfolio's json *********/
export const getStaticProps = async () => {
    
    const filePath = path.join(process.cwd(), 'content/contact.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData)
  
    
    return {
        props: objectData,
            
    }
  
    
    
    
  }
