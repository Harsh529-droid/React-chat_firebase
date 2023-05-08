import React from 'react'
import Sidebar from '../components_for_home/SideBar';
import ChatRight from '../components_for_home/ChatRight';

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar />
            <ChatRight />
        </div>
    </div>
  )
}

export default Home