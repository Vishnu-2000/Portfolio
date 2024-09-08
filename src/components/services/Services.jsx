import React from 'react'
import './services.css'
// import { IoMdCheckmark } from "react-icons/fa6";
// import { IoMdCheckmark } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";



const Services = () => {
  return (

    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Data Engineering</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Developed and maintained data pipelines using Snowflake, improving data processing efficiency.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Designed and implemented ETL processes to integrate data from multiple sources, ensuring data accuracy and
consistency.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Optimized Snowflake queries and database performance, leading to a reduction in query execution time.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Created and managed Snowflake tasks and streams to automate data loading and transformation processes.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Collaborated with data analysts to understand data requirements and deliver actionable insights.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Developed SQL code and created materialized views for feeding the data to the Visualization team while following
the industry standards.
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Data Visualization</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop interactive visualizations and dashboards in Tableau to provide insights into data
              </p>
            </li>

            {/* <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Create and maintain Tableau data sources and data extracts
              </p>
            </li> */}

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Design and develop Tableau workbooks to support business objectives.
              </p>
            </li>

            {/* <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop Tableau reports and dashboards to meet customer requirements
              </p>
            </li> */}

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop and maintain Tableau data models
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop Tableau dashboards to monitor KPIs
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop Tableau dashboards to support data-driven decision making
              </p>
            </li>
            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop Tableau dashboards to support data storytelling
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Develop Tableau dashboards to support data exploration
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Data Validation/ Dashboard Test</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Use ODBC driver for Snowflake to import data in Excel and transforming the data using PowerQuery.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Use MS Excel to organize company data and budget reports into detailed pivot tables.
              
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Data Mapping according to the Business rules and requirements.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Perform CROSS JOIN, LEFT JOIN, RIGHT JOIN and other relationships between tables using PowerQuery.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Perform Functionality Test on Dashboards to check its proper working.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Perform Data Test on Dashboards to check the consistency of data between database and dashboards.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Manage large datasets with functions: IF, SUM, INDEX, MATCH, VLOOKUP
              </p>
            
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
      

    </section>
    
  )
}

export default Services