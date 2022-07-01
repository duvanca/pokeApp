import React from 'react'
import logo from "../img/pokedex.png";
const Header = () => {
  return (
    <>
    
    
    <div className="background">
    <img className="logo-pokedex-header" src={logo} alt="pokedex" />
       <span className="circle">
        <span className="circle-small"></span>
       </span>
       <span className="barra"> </span> 
    </div>
    </>
    
  )
}

export default Header