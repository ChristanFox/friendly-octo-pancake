import React from 'react'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {RiTwitterLine} from 'react-icons/ri'
import {RiFacebookBoxLine} from 'react-icons/ri'

function HeaderSocials() {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target="_blank"><RiLinkedinBoxLine/></a>
        <a href="https://github.com" target="_blank"><RiGithubLine/></a>
        <a href="https://twitter.com" target="_blank"><RiTwitterLine/></a>
        <a href="https://facebook.com" target="_blank"><RiFacebookBoxLine/></a>
    </div>
  )
}

export default HeaderSocials