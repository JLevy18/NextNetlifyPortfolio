import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact'>
      <div className='infoWrap'>
        <div className='content'>
          <b>Lets work together...</b>
          <p>Whatever your software needs, I've got you covered.</p>
          <p>Get in touch to learn more!</p>
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