import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  

  

  window.onscroll=()=>{ 
  let sections=document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('nav a')
  var sects=['home','about','experience','contact','services']

    // console.log('Scroll')
    // console.log(sections.length)
    
    // console.log(sections)
    sections.forEach((sec)=>{
      let top=window.scrollY;
      let offset=sec.offsetTop - 15
      let height=sec.offsetHeight
      let id=sec.getAttribute("id")
      // console.log(id)
      // alert(id)

      if (top>=offset && top<offset+height){
        navLinks.forEach((links)=>{
          links.classList.remove('active')
          if(['portfolio','testimonials','services'].includes(id)){
            id='services'
          }
          if (sects.includes(id)){
            
            console.log(`'#${id}'`,`'#${id}'`.length)
            console.log(document.querySelector(`[id='nav_${id}']`).classList)
          document.querySelector(`[id='nav_${id}']`).classList.add('active')}

          
          
        //   console.log('Class = '+activeNav)
          // }
          // else{
            // links.classList.remove('active')
            // console.log(id,'In else')
          // }
          
        })
      }

    })
    // console.log('Exit sections')
  }



  return (
          <>
        <Header id='head_component'/>
        <Nav id='nav_component'/>
        <About id='about_component'/>
        <Experience id='exp_component'/>
        <Services id='service_component'/>
        <Portfolio id='port_component'/>
        <Testimonials id='test_component'/>
        <Contact id='contact_component'/>
        <Footer/>

    </>
  )
}

export default App