import Image from 'next/image';
import React, {useEffect} from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

function Skills() {

  

  return (
    <div id='skills'>
      <div className='skillBrief'>
        <div className='card'>
          <div className='title'>
            <h1><FaRegLightbulb size={32} style={{paddingRight: 10}}/>Always Learning</h1>
          </div>
          <div className='content'>
            <p>When I was in high school one of my technical teachers told me something along the lines of: <br/><br/><b>"when one understands programming logic and design one can learn any new language in weeks."</b><br/><br/>In order to remain competitive, I am constantly sharpening my skills and learning new frameworks.</p>
          </div>
        </div>
      </div>
      <div className='skillSec'>
          <div className='skillGrid'>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/html5.svg" layout='fill' />
              </div>
              <p>HTML5</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/css3.svg" layout='fill' />
              </div>              
              <p>CSS3</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/react.svg" layout='fill' />
              </div>
              <p>ReactJS</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/spring.svg" layout='fill' />
              </div>
              <p id='js'>Spring</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/js.svg" layout='fill' />
              </div>
              <p id='js'>Javascript</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/sql.svg" layout='fill' />
              </div>
              <p>SQL</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/java.svg" layout='fill' />
              </div>
              <p>Java</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/c++.svg" layout='fill' />
              </div>
              <p>C++</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/unreal.svg" layout='fill' />
              </div>
              <p>Unreal</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/opengl.svg" layout='fill' />
              </div>
              <p>OpenGL</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/git.svg" layout='fill' />
              </div>
              <p>Git</p>
            </div>

            <div className="iconWrapper">
              <div className="icon">
                <Image src="/skills/bash.svg" layout='fill' />
              </div>
              <p>Bash</p>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Skills