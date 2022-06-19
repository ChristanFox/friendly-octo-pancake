import React from 'react'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {RiTwitterLine} from 'react-icons/ri'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Christan Fox</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
        <a href="https://instagram.com"><GrInstagram/></a>
        <a href="https://twitter.com"><RiTwitterLine/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Christan Fox. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer