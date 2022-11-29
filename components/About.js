import React from 'react'
import {FaGraduationCap, FaBriefcase, FaBook} from 'react-icons/fa'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CgProfile } from 'react-icons/cg'

function About() {

  const settings = {

    className: "center",
    centerMode: true,
    infnite: true,
    draggable: false,
    focusOnSelect: true,
    dots: true,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500
  };


  return (
    <div id='about'>
      <div className='card'>
        <div className='title'>
          <h1><CgProfile size={48} style={{paddingRight: 5}}/> Profile</h1>
        </div>
        <div className='content'>
          <p>I'm Justin Levy or LevTheDev on YouTube. I’m a 22-year-old software engineer, and indie game dev. My hobbies also include online gaming, frisbee golf, fitness, and enjoying time with friends.</p>
        </div>
      </div>
      <div className='timelineTitle'>
        <h2>Timeline of my life...</h2>
      </div>
      <div className='timelineWrapper'>
        <div className='timeline'>
          <Slider {...settings}>
            <div>
              <div className='timeCard'>
                <h1><FaBriefcase size={24}/><h2>Experience</h2></h1>
                <p>Java Spring Boot <br/>Software Developer @ Infosys</p>
                <footer>July 2022</footer>
              </div>
            </div>
            <div>
              <div className='timeCard'>
                <h1><FaBook size={24}/><h2>Education</h2></h1>
                <p>Took my first programming course <br/>Intro to Java in High School</p>
                <footer>August 2015</footer>
              </div>
            </div>
            <div>
              <div className='timeCard'>
                <h1><FaBook size={24}/><h2>Education</h2></h1>
                <p>Entered vocational school to understand<br/>Information Technology & Programming</p>
                <footer>August 2016</footer>
              </div>
            </div>
            <div>
              <div className='timeCard'>
                <h1><FaGraduationCap size={24}/><h2>Achievement</h2></h1>
                <p>Graduated vocational & high school<br/> with certifications in Microsoft Office Suite</p>
                <footer>May 2018</footer>
              </div>
            </div>
            <div>
              <div className='timeCard'>
                <h1><FaBook size={24}/><h2>Education</h2></h1>
                <p>Enrolled in Computer Science <br/>major @ Ohio University</p>
                <footer>August 2018</footer>
              </div>
            </div>
            <div>
              <div className='timeCard'>
                <h1><FaBriefcase size={24}/><h2>Experience</h2></h1>
                <p>Technical Support Intern <br/>@ FIT Technologes</p>
                <footer>May 2021</footer>
              </div>
            </div>
            <div>
              <div className='timeCard'>
                <h1><FaGraduationCap size={24}/><h2>Achievement</h2></h1>
                <p>Earned my bachelor's degree in <br/>Computer Science @ Ohio University</p>
                <footer>April 2022</footer>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default About