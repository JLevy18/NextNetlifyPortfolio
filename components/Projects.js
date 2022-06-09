import React from 'react'
import Image from 'next/image'
import { FaCode, FaGlobe } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Projects() {
  return (
    <div id='projects'>
      <div className='pGrid'>

        {/* 1. Voxplor */}

        <div className='gridCard'>
          <div className='thumbnail'>
            <h1>Voxplor</h1>
            <Image src='/placeholderThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p><i>Voxplor is game built to display the features and capabilities of my voxel engine, SimplyVoxel.</i></p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p><i>For updates on the timeline, visit my YouTube</i></p>
            </div>
          </div>
          <div className='links'>
            <button onClick={() => window.open('', '_blank')}>
              <FaGlobe size={24}/>
            </button>
          </div>
        </div>

        {/* 2. SimplyVoxel */}

        <div className='gridCard'>
          <div className='thumbnail'>
            <h1>SimplyVoxel</h1>
            <Image src='/placeholderThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p><i>SimplyVoxel is a custom built, open-source, voxel engine with the aim to make voxel games easier to develop.</i></p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p><i>For updates on the timeline, visit my YouTube</i></p>
            </div>
          </div>
          <div className='links'>
            <button onClick={() => window.open('', '_blank')}>
              <FaCode size={24}/>
            </button>
          </div>
        </div>

        {/* 3. VisualizeIt */}

        <div className='gridCard'>
          <div className='thumbnail'>
            <h1>VisualizeIt</h1>
            <Image src='/placeholderThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p><i>VisualizeIt is a web app designed for people learning algorithms better to understand how they work.</i></p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p><i>For updates on the timeline, visit my YouTube</i></p>
            </div>
          </div>
          <div className='links'>
            <button onClick={() => window.open('', '_blank')}>
              <FaGlobe size={24}/>
            </button>
            <button onClick={() => window.open('', '_blank')}>
              <FaCode size={24}/>
            </button>
          </div>
        </div>

        {/* 4. Portfolio */}

        <div className='gridCard'>
          <div className='thumbnail'>
            <h1>Portfolio</h1>
            <Image src='/portfolioThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p>A website to display my skills and projects to potential clients, recruiters, and the general public.</p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p>NextJS</p> <p>TailwindCSS</p> <p>Netlify</p> <p>Git</p>
            </div>
          </div>
          <div className='links'>
            <Link to='landing' className='site' spy={true} smooth={true} offset={0} duration={500}>
              <FaGlobe size={24}/>
            </Link>
            <button onClick={() => window.open('https://github.com/JLevy18/NextNetlifyPortfolio', '_blank')}>
              <FaCode size={24}/>
            </button>
          </div>
        </div>

        {/* 5. MovieApp */}

        <div className='gridCard'>
          <div className='thumbnail'>
            <h1>Movie App</h1>
            <Image src='/placeholderThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p><i>A webapp tool to search the internet movie database and find information on a particular movie.</i></p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p><i>For updates on the timeline, visit my YouTube</i></p>
            </div>
          </div>
          <div className='links'>
            <button onClick={() => window.open('', '_blank')}>
              <FaGlobe size={24}/>
            </button>
            <button onClick={() => window.open('', '_blank')}>
              <FaCode size={24}/>
            </button>
          </div>
        </div>

        {/* 6. RLGL */}

        <div className='gridCard' id='rlgl'>
          <div className='thumbnail'>
            <h1>Red Light Green Light</h1>
            <Image src='/RLGLThumb.png' layout='fill' />
          </div>
          <div className='desc'>
            <h1>Brief</h1>
            <p>Video game created to aid in the study of a psychological behavior known temporal discounting. In use at Ohio University to perform the case study.</p>
          </div>
          <div className='tools'>
            <h1>Stack</h1>
            <div className='items'>
              <p>Unreal</p><p>Git</p><p>Agile/Scrum</p>
            </div>
          </div>
          <div className='links'>
            <button onClick={() => window.open('', '_blank')}>
              <FaGlobe size={24}/>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects