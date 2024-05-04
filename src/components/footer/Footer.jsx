import React from 'react'
import './footer.css'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';




const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vishnu's Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://m.me/vishnu.kulkarni.79"><CiFacebook/></a>
        <a href="https://www.instagram.com/vishnu_klk/"><CiInstagram/></a>
        <a href="https://github.com/Vishnu-2000"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vishnu Kulkarni</small>
      </div>
      


    </footer>

  )
}

export default Footer