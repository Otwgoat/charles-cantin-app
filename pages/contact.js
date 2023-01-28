import React from 'react'
import Meta from '../components/Meta'
import Description from '../components/Description'
import fsPromises from 'fs/promises';
import path from 'path';
import Input from '../components/Input';


const contact = (props) => {
    let inputs = props.inputs;
    
    function encode(data) {
        return Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": event.target.getAttribute("name")
          }),
        })
          .then(() => alert('Nous avons bien reçu votre message'))
          .catch((error) => alert(error));
      };
  
    return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Me contacter'} description={'Une envie , une idée, un projet ? Contactez moi via le formulaire sur cette page, je m\'engage à y repondre dans les 24h.' } />
        <div className='contactContainer'>
            <h2>Me contacter</h2>
            <Description />
            <form name='contact' method='POST' netlify netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                {inputs.map((input) => (
                    <Input key={input.name} id={input.name} input={input} />
                ))}
                <div id='textAreaContainer'>
                    <label htmlFor='messageTextArea'>Message</label>
                    <textarea name='messageTextArea' id='messageTextArea' rows={5} cols={30} placeholder='ecrivez votre message'></textarea>
                </div>
                <button className='btn' type='submit'>Envoyer</button>
                
            </form>
            


        </div>
    </div>
  )
}

export default contact
/*** Import the data of the portfolio's json *********/
export const getStaticProps = async () => {
    
    const filePath = path.join(process.cwd(), 'content/contact.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData)

    
    return {
        props: objectData,
            
    }

    
    
    
}