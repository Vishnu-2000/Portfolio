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
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <LuUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Professional Clients</small>
            </article>

            <article className='about__card'>
              <LuFolders className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Working Projects</small>
            </article>
          </div>
          <p>
          {/* Seeking a beginner role to enhance and explore my technical knowledge gained in my education in B.E. and a year in IT industry. Aiming to leverage my abilities to successfully fill required role at your company. I can be relied upon to achieve the goals set with perfection and in time. */}
          Dynamic and results-driven Snowflake ETL Developer with 2 years of hands-on experience in designing, developing, and optimizing data pipelines within the Snowflake environment. Proficient in crafting robust ETL solutions tailored to business needs, leveraging Snowflake's powerful capabilities. Skilled in SQL, Python, and other ETL tools, adept at transforming raw data into actionable insights efficiently. Proven ability to collaborate cross-functionally, translating complex requirements into scalable and efficient ETL workflows. Committed to staying abreast of emerging trends and technologies in data engineering to drive continuous improvement and deliver value-added solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About