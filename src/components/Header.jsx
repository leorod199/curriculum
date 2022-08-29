import React from 'react'
import "./Header.scss"
import pic from "../../public/imgs/pic.jpg"
const Header = ({ name, career }) => {
  return (
    <header className="Header">
      <div className="container">
        <div className="wrapper">
          <img src={pic} alt={name} className="img" />
          <div className="info">
            <h1 className="name">{name}</h1>
            <p className="career">{career}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header