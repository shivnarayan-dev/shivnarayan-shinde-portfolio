import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from 'react-icons/si';
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";

export default function Skills() {
  return (
    <div className='main-div-04'>
      <div className="sub-div-04">
        <h1 className="h1-1-04">Skills</h1>
        <div className="skills-container-04">
          <div className="frontend-skills">
            <h2 className="h2-1-04">Front-End</h2>
            <div className="f-skills-icons">
              <div className="f-skill">
                <FaHtml5 className='skill-icon' /><br />HTML
              </div>
              <div className="f-skill">
                <FaCss3Alt className='skill-icon' /><br />CSS
              </div>
              <div className="f-skill">
                <FaBootstrap className='skill-icon' /><br />Bootstrap
              </div>
               <div className="f-skill">
                <IoLogoJavascript className='skill-icon' /><br />JavaScript
              </div>
              <div className="f-skill">
                <FaReact className='skill-icon' /><br />React
              </div>
              <div className="f-skill">
                <FaAngular className='skill-icon' /><br />Angular
              </div>
            </div>
          </div>
          <div className="backend-skills">
            <h2 className="h2-1-04">Back-End</h2>
            <div className="b-skills-icons">
             <div className="b-skill">
                <FaJava className="skill-icon" /><br />Java
              </div>
              <div className="b-skill">
                <SiSpringboot className="skill-icon" /><br />Springboot
              </div>
            </div>
          </div>
          <div className="database-skills">
            <h2 className="h2-1-04">Database</h2>
            <div className="d-skills-icons">
              <div className="d-skill">
                <SiMysql className="skill-icon"/><br />SQL
              </div>
              <div className="d-skill">
                <SiMongodb className="skill-icon"/><br />NoSQLMongoDB
              </div>
            </div>
          </div>
          <div className="testing-skills">
            <h2 className="h2-1-04">Testing</h2>
            <div className="t-skills-icons">
              <div className="t-skill">
                <FaJava className='skill-icon-1' /><br />Java
              </div>
            </div>
          </div>
          <div className="cloud-and-deployment-skills">
            <h2 className="h2-1-04">Could/Deployment</h2>
            <div className="c-skills-icons">
              <div className="c-skill">
                <FaAws className='skill-icon' /><br />AWS              
              </div>
              <div className="c-skill">
                <FaGitAlt className='skill-icon' /><br />Git & GitHub            
              </div>
              <div className="c-skill">
                <RiVercelLine className='skill-icon'/><br />Vercel              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
