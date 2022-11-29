import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact'>
      <div className='infoWrap'>
        <div className='content'>
          <b>Lets work together...</b>
          <p>Get in touch if you have any questions of concerns. I'm happy to give you an updated resume or any additional information.</p>
        </div>
      </div>
      <div className='formWrap'>
        <div className='content'>
          <ContactForm/>
        </div>
      </div>
    </div>
    
  )
}

export default Contact