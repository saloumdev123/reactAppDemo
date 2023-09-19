
import React from 'react'
import { BsCart3, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'

const Sidebar = ({openSideBarToggle, OpenSidebar}) => {
  return ( 
   <aside id='sidebar' className={openSideBarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
          <div className='sidebar-brand'>
              <BsCart3 className='icon-header'/> SHOP
          </div>
          <span className='close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="">
                <BsGrid1X2Fill className='icon'/> Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGrid3X3GapFill className='icon'/> Categories
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillArchiveFill className='icon'/> Products
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsPeopleFill className='icon'/> Customer
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsListCheck className='icon'/> Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsMenuButtonWideFill className='icon'/> Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGearFill className='icon'/> Setting
            </a>
        </li>
      </ul>
   </aside>
  )
}

export default Sidebar