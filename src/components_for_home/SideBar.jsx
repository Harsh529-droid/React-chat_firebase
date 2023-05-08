import React from 'react'
import Navbar from './NavbarLeft'
import SearchLeft from './SearchLeft'
import ChatLogLeft from './ChatLogLeft'
import '../style.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Navbar />
        <SearchLeft />
        <ChatLogLeft />
    </div>
  )
}

export default Sidebar