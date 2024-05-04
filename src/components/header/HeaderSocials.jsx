import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vishnu-v-kulkarni" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/Vishnu-2000" target='_blank'><FaGithub/></a>
        <a href="https://learn.microsoft.com/en-us/users/vkulkarnivishnucognizant-7421/achievements" target='_blank'><TfiMicrosoftAlt/></a>

    </div>
  )
}

export default HeaderSocials