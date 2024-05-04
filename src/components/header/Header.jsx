import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image-portfolio-react.png'
import HeaderSocials from './HeaderSocials'
import { FaAnglesDown } from "react-icons/fa6";
// import {Nav, setActiveNav} from "../nav/Nav"

const Header = () => {
  

  return (
    <section id="home" >
    <header >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vishnu Kulkarni</h1>
        <h5 className="text-light">Data Engineer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'><FaAnglesDown/></a>

      </div>

    </header>
    </section>
  )
}

export default Header