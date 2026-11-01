import React from 'react'
import './about.css'
import ME from '../../assets/react-about.png'
import { LiaAwardSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { LuFolders } from "react-icons/lu";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5>Experience</h5>
              <small>~4 Years Project Experience</small>
            </article>

            <article className='about__card'>
              <LuUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Professional Clients</small>
            </article>

            <article className='about__card'>
              <LuFolders className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Working Projects</small>
            </article>
          </div>
          <p>
          {/* Seeking a beginner role to enhance and explore my technical knowledge gained in my education in B.E. and a year in IT industry. Aiming to leverage my abilities to successfully fill required role at your company. I can be relied upon to achieve the goals set with perfection and in time. */}
          Snowflake Certified Data Engineer Professional with ~4 years of experience designing and managing data solutions across the healthcare, health insurance, and banking domains. Proficient in building and optimizing data pipelines and ETL processes. Experienced in collaborating with cross-functional teams to align solutions with business objectives and communicating complex technical concepts clearly to drive actionable insights. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About