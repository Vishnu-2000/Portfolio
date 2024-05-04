import React from 'react'
import './experience.css'
import { IoShieldCheckmark } from "react-icons/io5";
const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Programming/Scripting Languages</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>C</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          
          {/* <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> */}
          
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
        </div>

        { /* End of Frontend */}
        <div className="experience__backend">
        <h3>Technical Concepts</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Data Structures & Algorithms</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Object Oriented Programming</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Database Management System</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Cloud</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          {/* <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> */}
        </div>
        {/* End of Backend */}

        
        </div>
        <div className="experience__frontend">
        <h3>Technologies/Frameworks</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Snowflake</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Azure</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Tableau</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Power BI</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

           <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>React.js</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
        
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>Microsoft Excel</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          {/*}
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <IoShieldCheckmark className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> */}
        </div>
        </div>
      </div>
    </section>
  )
}

export default experience