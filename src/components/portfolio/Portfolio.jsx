import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Tableau-Project1.png'
import IMG2 from '../../assets/Tableau-Project2.png'
import IMG3 from '../../assets/Tableau-Project3.png'
import IMG4 from '../../assets/Tableau-Project4.png'
import IMG5 from '../../assets/Chess-Project5.png'
import IMG6 from '../../assets/Chatbot-Project6.png'

const data = [
  {
    id:1,
    image : IMG1,
    title : 'Executive Retail Sales Analytics',
    github : 'https://github.com/Vishnu-2000/Tableau' ,
    demo : 'https://public.tableau.com/app/profile/vishnu5591/viz/Dashboards_16753512810690/Story1'
  },
  {
    id:2,
    image : IMG2,
    title : 'Automobiles Sales Analysis',
    github : 'https://github.com/Vishnu-2000/Tableau',
    demo : 'https://public.tableau.com/app/profile/vishnu5591/viz/DashboardPractice_16753538185450/WashingtonBEVSandPHEVS'
  },
  {
    id:3,
    image : IMG3,
    title : 'UFO Spotting Analysis',
    github : 'https://github.com/Vishnu-2000/Tableau',
    demo : 'https://public.tableau.com/app/profile/vishnu5591/viz/WorkOnMarks/SightingStepChart'
  },
  {
    id:4,
    image : IMG4,
    title : 'Cricket Analysis',
    github :'https://github.com/Vishnu-2000/Tableau',
    demo : 'https://public.tableau.com/app/profile/vishnu5591/viz/CricketInfo/PlayersbyCountry'
  },
  {
    id:5,
    image : IMG5,
    title : 'Chess Game',
    github : 'https://github.com/Vishnu-2000/Chess-Game',
    demo : 'https://lambent-stardust-e77d7f.netlify.app/'
  },
  {
    id:6,
    image : IMG6,
    title : 'Chatbot Project',
    github : 'https://github.com/Vishnu-2000/Chat-Bot-Internship',
    demo : 'https://colab.research.google.com/github/Vishnu-2000/Chat-Bot-Internship/blob/main/Internship%20Final.ipynb#scrollTo=92d51cf6'
  }

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github,demo}) => {
            return (
                  <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className='portfolio_item-name'>
              <h3>{title}</h3></div>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }

        
      </div>

    </section>

  )
}

export default Portfolio