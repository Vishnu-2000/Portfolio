import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Snowpro-1.png'
import AVTR2 from '../../assets/PL-300-2.png'
import AVTR3 from '../../assets/AZ-900-3.png'
import AVTR4 from '../../assets/DP-900-4.png'
import AVTR5 from '../../assets/Tableau-Certificate-5.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination'
// import 'swiper/css/navigation'

const data=[
  
  {
    avatar : AVTR1,
    name : 'Snowflake SnowPro Core Certification',
    review : 'This certification offers the foundation you need to build your technical skills to start working with data in the cloud. Mastering the basics can help you jump-start your career and prepare you to dive deeper into other technical opportunities Azure offers.'
  },
  {
    avatar : AVTR2,
    name : 'Microsoft Certified Data Analyst Associate : PL - 300',
    review : 'As a Power BI data analyst, you work closely with business stakeholders to identify business requirements. You collaborate with enterprise data analysts and data engineers to identify and acquire data. You use Power BI to Transform the data,Create data models, Visualize data, Share assets.'
  },
  {
    avatar : AVTR3,
    name : 'Microsoft Azure Fundamentals : AZ - 900',
    review : 'This certification validates your foundational knowledge of cloud concepts in general and Azure in particular. As a candidate for this certification, you can describe Azure architectural components and Azure services, such as compute, networking, and storage, as well as features and tools to secure, govern, and administer Azure.'
  },
  {
    avatar : AVTR4,
    name : 'Microsoft Azure Data Fundamentals : DP - 900',
    review : 'This certification offers the foundation you need to build your technical skills to start working with data in the cloud. Mastering the basics can help you jump-start your career and prepare you to dive deeper into other technical opportunities Azure offers.'
  },
  {
    avatar : AVTR5,
    name : 'Tableau Desktop Certification : Maven Analytics',
    review : 'Tableau Desktop delivers everything you need to access, visualize, and analyze your data. With an intuitive drag and drop interface, you can uncover the hidden insights you need to make impactful business decisions faster, even when you are offline. All while leveraging trusted and governed data in a secure self-service environment.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What have you upskilled</h5>
      <h2>Certifications</h2>


      
      <Swiper className="container testimonials__container" 
      modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}}>
      
      {/* onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */}


      {
        data.map(({avatar, name, review},index)=>{
          return (
            <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
            
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>       
          
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials