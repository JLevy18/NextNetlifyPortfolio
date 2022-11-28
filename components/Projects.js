import React from 'react'
import { FaCode, FaYoutube } from 'react-icons/fa'

function Projects() {
  return (
    <div id='projects'>

      <div className='title'>
        <h1>
          Projects
        </h1>
      </div>

      <div className='pGrid'>

        {/* 2. Portfolio */}

        <div className='gridCard' id='portfolio'>
          <div className='title'>
            <h2>Portfolio</h2>
            <div className='seperator'/>
          </div>
          <div className='thumbnail'>
              <div className='wrapper'>
                <object className='icon' type="image/svg+xml" data="/PortfolioThumb.svg"></object>
              </div>
            </div>
          <div className='stack'>
            <p>HTML5, TailwindCSS, Javascript, NextJS/React, Netlify, GitHub</p>
          </div>
          <div className='links'>
            <div className='wrapper'>
              <button onClick={() => window.open('https://github.com/JLevy18/NextNetlifyPortfolioPublic', '_blank')}>
                <FaCode size={24}/>
                <p>View Project</p>
              </button>
            </div>
          </div>
        </div>

        {/* 3. RLGL */}

        <div className='gridCard' id='rlgl'>
            <div className='title'>
              <h2>Red Light, Green Light</h2>
              <div className='seperator'/>
            </div>
            <div className='thumbnail'>
              <div className='wrapper'>
                <object className='icon' type="image/svg+xml" data="/RLGLThumb.svg"></object>
              </div>
            </div>
            <div className='stack'>
              <p>Unreal Engine, C++, Agile/SCRUM, GitHub</p>
            </div>
            <div className='links'>
            <div className='wrapper'>
              <button onClick={() => window.open('https://www.youtube.com/watch?v=WIPBdc8r3qQ', '_blank')}>
                <FaYoutube size={24}/>
                <p>View Project</p>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects