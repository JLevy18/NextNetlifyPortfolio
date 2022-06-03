import React from 'react'
import netlogo from '../public/netlify-logo.svg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='copyright'>&copy; Copyright 2022 | LevTheDev</div>
        <div className='netlify'><object className="netlifylogo" type="image/svg+xml" data="/netlify-logo.svg">netlify-icon</object>Powered by Netlify </div>
    </div>
  )
}
