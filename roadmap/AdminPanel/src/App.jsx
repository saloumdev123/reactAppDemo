

import './App.css'
import Home from '../components/Home'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useState } from 'react'

function App() {

  const [openSideBarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar= () => {
    setOpenSidebarToggle(!openSideBarToggle)
  }
  return (
    <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar}/>
     <Sidebar openSideBarToggle={openSideBarToggle} OpenSidebar={OpenSidebar}/>
     <Home />
    </div>
  )
}

export default App