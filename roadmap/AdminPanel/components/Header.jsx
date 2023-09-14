import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsFillEnvelopeAtFill}
from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header'>
           <div className='menu-icon'>
              <BsJustify className='icon'/>
           </div>
           <div className='header-left'>
              <BsSearch className='icon'/>
           </div>
           <div className='header-right'>
              <BsFillBellFill className='icon'/>
              <BsFillEnvelopeFill className='icon'/>
              <BsPersonCircle className='icon'/>
           </div>
    </div>
  )
}

export default Header
   