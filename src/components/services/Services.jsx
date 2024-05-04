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
            <h3>Data Loading/ Ingestion</h3>
          </div>

          <ul className='service__list'>
            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Bulk loading from external stage, internal stage to Snowflake cloud using the COPY command.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Loading data into Snowflake tables using snowql.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Use COPY, LIST, PUT and GET commands for validating the internal stage files.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Take backup of the existing tables to secure the data from getting corrupted before manipulations.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Use FLATTEN table function to produce a lateral view of OBJECT and ARRAY column.
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Export Result set to Microsoft Excel as Comma Separated Values file.
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
              Use CData ODBC driver for Snowflake to import data in Excel with Microsoft Query
              </p>
            </li>

            <li>
              <IoMdCheckmark className='service__list-icon'/>
              <p>
              Use MS Excel to organize company data and budget reports into detailed pivot tables
              
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