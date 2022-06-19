import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import './contact.css'

const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g9s10cu', 'template_4pvwnw5', form.current, '8qhiFjLksKDCRh2hC')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>christanfox@gmail.com</h5>
            <a href="mailto:testing@test.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>testingskils</h5>
            <a href="https://m.me/ChristanFox" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+3472365129" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact