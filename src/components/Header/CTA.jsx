import React from 'react'
import CV from '../../assets/cv-ChristanFox.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn'>Reach Me</a>
    </div>
  )
}

export default CTA