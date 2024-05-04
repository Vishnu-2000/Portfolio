import React,{useState} from 'react'
import './nav.css'
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GiBookPile } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
// import {useState} from 'react'

// import Tooltip from './Tooltip';






const Nav = () => {
  // var section=document.querySelector()
  const [activeNav,setActiveNav] = useState('#home')
  // 

  

  return (
    <nav>
      <a id="nav_home" href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>< CiHome /></a>{/*<span className='material-symbols-outlined'></span> */}
      <a id="nav_about" href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >< CiUser /></a>
      <a id="nav_experience" href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>< GiBookPile /></a>
      <a id="nav_services" href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>< GrServices /></a>
      <a id='nav_contact' href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>< BsTelephone /></a>
      
    </nav>
    
  )
}

export default Nav