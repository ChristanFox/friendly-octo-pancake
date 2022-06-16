import React from 'react'
import './nav.css'
import {RiHome5Line} from 'react-icons/ri'
import {RiUser3Line} from 'react-icons/ri'
import {RiBook2Line} from 'react-icons/ri'
import {RiServiceLine} from 'react-icons/ri'
import {RiBriefcaseLine} from 'react-icons/ri'
import {RiMessage3Line} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome5Line/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser3Line/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiBriefcaseLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Line/></a>
    </nav>
  )
}

export default Nav