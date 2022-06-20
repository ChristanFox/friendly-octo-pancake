import React from 'react'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {RiTwitterLine} from 'react-icons/ri'
import {RiFacebookBoxLine} from 'react-icons/ri'

function HeaderSocials() {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/christan-fox-491739139/" target="_blank"><RiLinkedinBoxLine/></a>
        <a href="https://github.com/ChristanFox" target="_blank"><RiGithubLine/></a>
        <a href="https://twitter.com/ChristanFox" target="_blank"><RiTwitterLine/></a>
        <a href="https://www.facebook.com/ChristanFox/" target="_blank"><RiFacebookBoxLine/></a>
    </div>
  )
}

export default HeaderSocials