import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact'>
      <div className='infoWrap'>
        <div className='content'>
          <b>Lets work together...</b>
          <p>Get in touch for answers to any questions about services, to learn more about what I do, or to request an updated resume.</p>
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