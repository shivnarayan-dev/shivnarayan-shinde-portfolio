import React from 'react';
import './Home.css';
import profilepic from "../../assets/profile-pic.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
    return (
        <div className='main-div-01' id='home'>
            <div className="sub-div-01">
                <div className="text-and-icon">
                    <div className="text">
                        <h1 className='h1-1-01'>
                            Hi,
                        </h1>
                        <h1 className='h1-2-01'>
                            My Self, Shivnarayan Shinde
                        </h1>
                        <h3 className='h3-01'>
                            The Java Full Stack Developer
                        </h3>
                    </div>
                    <div className="icon-container-01">
                        <div className="phone-iocn-01">
                            <a href="tel:+919699591995" className='a-1-01'>
                                <FaPhoneAlt className='icon-01' />
                            </a>
                        </div>
                        <div className="mail-icon-01">
                            <a href="mailto:shivshinde1630@gamil.com" target="_blank" className='a-1-01'>
                                <IoMdMail className='icon-01' />
                            </a>
                        </div>
                        <div className="linkedin-icon-01">
                            <a href="http://www.linkedin.com/in/shivnarayan-shinde-a80724287" target="_blank" rel="noreferrer" className='a-1-01'>
                                <BsLinkedin className='icon-01' />
                            </a>
                        </div>
                        <div className="github-icon-01">
                            <a href="https://github.com/shivnarayan-dev" target="_blank" rel="noreferrer" className='a-1-01'>
                                <FaGithubSquare className='icon-01' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="profile-pic-div-01">
                    <img src={profilepic} alt="profile-pic" className='profile-pic' />
                </div>
            </div>
            
        </div>
    );
}
