import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({inputs}) => {
  
  const [state, handleSubmit] = useForm("xpzeqrdr");
  if (state.succeeded) {
    return <p>Merci pour votre message. Je reviendrai vers vous dans les prochaines 24h !</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
          <div className='inputContainer'>
            <label htmlFor={input.name}>{input.label}</label>
            <input required name={input.name} id={input.name} type={input.type} placeholder={input.placeholder} className='inputText' />
            <ValidationError field={input.name} prefix={input.label} errors={state.errors} />
          </div>

      ))}
      <div id='textAreaContainer'>
        <label htmlFor='messageTextArea'>Message</label>
        <textarea name='messageTextArea' id='messageTextArea' rows={5} cols={30} placeholder='ecrivez votre message'></textarea>
        <ValidationError prefix="Message" field="messageTextArea" errors={state.errors} />
      </div>
      <button className='btn' type='submit' disabled={state.submitting}>Envoyer</button>
      <ValidationError errors={state.errors} />
    </form>

  )
}

export default ContactForm;
