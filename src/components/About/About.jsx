import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useState } from 'react'
import './about.css';

const About = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working Experience</small>         
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>COMING SOON</small>         
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Projects</small>         
            </article>
          </div>

          <p>
            Hello World! I am a 31 year old aspiring web developer currently living in Hillside, NJ. 
            Having recently graduated from A Full stack development coding bootcamp through Rutgers University, I am looking to change careers.
          </p>

          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About