import React from 'react'

const NavbarLeft = () => {
  return (
    <div className="navbar">
        <span className='logo'>Mama Chat</span>
        <div className="user">
            <img src="https://media.gettyimages.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=612x612&w=gi&k=20&c=ZQP3cLAbP-M7JDStPkwPCSGUS0i1d7A6AvI-1VB7Ri4=" alt="" />
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default NavbarLeft