
   
import {BsFillBellFill,  BsPersonCircle, BsSearch, BsJustify, BsFillEnvelopeAtFill}
from 'react-icons/bs'
import React from 'react'

const Header = ({OpenSidebar}) => {
  return (
   <div className='header'>
   <div className='menu-icon'>
       <BsJustify className='icon' onClick={OpenSidebar}/>
    </div>
    <div className='header-left'>
       <BsSearch className='icon'/>
    </div>
    <div className='header-right'> 
       <BsFillBellFill className='icon' />
       <BsFillEnvelopeAtFill className='icon' />
       <BsPersonCircle className='icon' />
    </div>
</div>
  )
}

export default Header