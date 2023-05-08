import React from 'react'

const Message = () => {
  return (
    // if owner, message will come in right with changed colors/
    <div className="message "> 
        <div className="messageInfo">
            <img src="https://media.gettyimages.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=612x612&w=gi&k=20&c=ZQP3cLAbP-M7JDStPkwPCSGUS0i1d7A6AvI-1VB7Ri4=" alt="" />
            <span>Just Now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src="https://media.gettyimages.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=612x612&w=gi&k=20&c=ZQP3cLAbP-M7JDStPkwPCSGUS0i1d7A6AvI-1VB7Ri4=" alt="" />

        </div>
    </div>
  )
}

export default Message