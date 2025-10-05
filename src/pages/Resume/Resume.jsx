import React from 'react'
import './Resume.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
export default function Resume() {
  return (
    <div className='main-div-05'>
      <div className="sub-div-05">
        <h1 className='h1-1-05'>Resume</h1>
        <div className="resume-container">
          <div className="name-and-place">
            <h1 className='h1-2-05'>
              SHIVNARAYAN SHINDE
            </h1>
            <p className="p1-05">
              Chhatrapti Sambhajinagar, Maharastra.
            </p>
          </div>
          <div className="contact-info-05">
            <div className="phone-iocn-05">
              <a href="tel:+919699591995" className='a-1-05'>
                <FaPhoneAlt className='icon-05' /> +919699591995
              </a>
            </div>
            <div className="mail-icon-05">
              <a href="mailto:shivshinde1630@gamil.com" target="_blank" className='a-1-05'>
                <IoMdMail className='icon-05' /> shivshinde1630@gmail.com
              </a>
            </div>
            <div className="linkedin-icon-05">
              <a href="http://www.linkedin.com/in/shivnarayan-shinde-a80724287" target="_blank" rel="noreferrer" className='a-1-05'>
                <BsLinkedin className='icon-05' /> http://www.linkedin.com/in/shivnarayan-shinde-a80724287
              </a>
            </div>
            <div className="github-icon-05">
              <a href="https://github.com/shivnarayan-dev" target="_blank" rel="noreferrer" className='a-1-05'>
                <FaGithubSquare className='icon-05' /> https://github.com/shivnarayan-dev
              </a>
            </div>
          </div>
          <div className="projects-container">
            <h2 className='h2-1-05'>Projects</h2><hr />
            <div className="projects-05">
              <div className="project-05" id='project-1-05'>
                <h3 className='ph'>Portfolio Web</h3>
                <p className='p-1-05'>
                  React js, CSS
                </p>
                <ul className='ul-1-05'>
                  <li className='li-1-05'>Build a Portfolio Website for showcase the my technical skills.</li>
                  <li className='li-1-05'>Display my Projects, Helps in Job Interviews, Easy to Share, It's helps me to Track my professional journey, Buuilding my online presence.</li>
                  <li className='li-1-05'>Please Visite to the Website: <a href="https://shivnarayan-shinde-portfolio.vercel.app/" target="_blank" rel="noreferrer" >https://shivnarayan-shinde-portfolio.vercel.app/</a></li>
                  <li className='li-1-05'>To Check the Repository follow the given link: <a href="https://github.com/shivnarayan-dev/shivnarayan-shinde-portfolio" target="_bank" rel="noreferrer">https://github.com/shivnarayan-dev/shivnarayan-shinde-portfolio</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <h2 className='h2-1-05'>Skills</h2><hr />
            <div className="skills-05">
              <div className="frontend-05">
                <h3 className="sh-05">Front-End</h3>
                <div className="ul-2-05">
                  <li className="li-2-05">HTML</li>
                  <li className="li-2-05">CSS</li>
                  <li className="li-2-05">JavaScript</li>
                  <li className="li-2-05">React</li>
                  <li className="li-2-05">Angular</li>
                </div>
              </div>
              <div className="backend-05">
                <h3 className="sh-05">Back-End</h3>
                <div className="ul-2-05">
                  <li className="li-2-05">Java</li>
                  <li className="li-2-05">SpringBoot</li>
                </div>
              </div>
              <div className="database-05">
                <h3 className="sh-05">Database</h3>
                <div className="ul-2-05">
                  <li className="li-2-05">SQL</li>
                  <li className="li-2-05">NoSQL (MongoDB)</li>
                </div>
              </div>
              <div className="testing-05">
                <h3 className="sh-05">Testing</h3>
                <div className="ul-2-05">
                  <li className="li-2-05">Testing in Java</li>
                </div>
              </div>
              <div className="cloud-deployment-05">
                <h3 className="sh-05">Cloud/Deployment</h3>
                <div className="ul-2-05">
                  <li className="li-2-05">AWS</li>
                  <li className="li-2-05">Git & GitHub</li>
                  <li className="li-2-05">Vercel</li>
                </div>
              </div>
            </div>
          </div>
          <div className="education-co  ntainer">
            <h2 className='h2-1-05'>Education</h2><hr />
            <div className="education-05">
              <div className="school-collage-05">
                <div className="bcs-05">
                  <h4 className='h4-1-05'>ShivChhatrapati Collage, Chhatrapati Sambhajinagar</h4>
                  <p className="s-c-1-05">Bachlores of Computer Science</p>
                </div>
                <div className="hsc-05">
                  <h4 className='h4-1-05'>Shree Sant Janardhan Swami Secondary and Higher Secondary Collage, Verul</h4>
                  <p className="s-c-1-05">HSC</p>
                </div>
                <div className="ssc-05">
                  <h4 className='h4-1-05'>Shree Saraswati Bhuvan High School, Chhatrapati Sambhajinagar</h4>
                  <p className="s-c-1-05">SSC</p>
                </div>
              </div>
              <div className="passing-year-05">
                <h4 className='h4-1-05'>July 2024 - 2027</h4>
                <h4 className='h4-1-05'>July 2022 - May 2023</h4>
                <h4 className='h4-1-05'>June 2019 - May 2021</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
