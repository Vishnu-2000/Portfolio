import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'





const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aa6pphh', 'template_re4o5bn', form.current, 'REYUGC_RkpbQaTVP1')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>1rn18cs126.vishnukulkarni@gmail.com</h5> */}
            <a href="mailto:vishnu.kulkarni2000.official@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            {/* <h5>Vishnu Kulkarni</h5> */}
            <a href="https://m.me/vishnu.kulkarni.79" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            {/* <h5>+91-9480198290</h5> */}
            <a href="https://api.whatsapp.com/send?phone=919480198290" target='_blank'>Send a message</a>
          </article>
        </div>
     
      {/* End of Contact options */}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='Name' placeholder='Your Full Name' required />
        <input type="email" name="Email" placeholder='Your Email' required />
        <textarea name="Message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact