import React, { useRef } from 'react'
import emailjs from "emailjs-com";
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
export default function Contact() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a413plq",
        "template_61p5jin",
        form.current,
        "p86tkZmyyk1dX2ILe"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
          console.log(result.text);
          
        },
        (error) => {
          alert("Failed to send message. Please try agian.");
        }
      
      );
    };
  return (
    <div className='main-div-06'>
      <div className="sub-div-06">
        <h1 className='h1-06'>Contact</h1>
        <div className="icon-container-06">
          <div className="phone-iocn-06">
            <a href="tel:+919699591995" className='a-1-06'>
              <FaPhoneAlt className='icon-06' /> +919699591995
            </a>
          </div>
          <div className="mail-icon-06">
            <a href="mailto:shivshinde1630@gamil.com" target="_blank" className='a-1-06'>
              <IoMdMail className='icon-06' /> shivshinde1630@gmail.com
            </a>
          </div>
          <div className="linkedin-icon-06">
            <a href="http://www.linkedin.com/in/shivnarayan-shinde-a80724287" target="_blank" rel="noreferrer" className='a-1-06'>
              <BsLinkedin className='icon-06' /> http://www.linkedin.com/in/shivnarayan-shinde-a80724287
            </a>
          </div>
          <div className="github-icon-06">
            <a href="https://github.com/shivnarayan-dev" target="_blank" rel="noreferrer" className='a-1-06'>
              <FaGithubSquare className='icon-06' /> shivnarayan-dev
            </a>
          </div>
        </div>
        <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name" className="lable-1-06">Name:</label>
        <input type="text" name="user_name" placeholder="Enter your name" required className="input-1-06"/>

        <label htmlFor="email" className="lable-1-06">Email:</label>
        <input type="email" name="user_email" placeholder="Enter your email" required className="input-1-06"/>

        <label htmlFor="message" className="lable-1-06">Message:</label>
        <textarea name="message" placeholder="Enter your message" className="input-1-06" required></textarea>

        <button type="submit" className="btn-1-06">Send</button>
      </form>
    </div>
      </div>
    </div>
  )
}
