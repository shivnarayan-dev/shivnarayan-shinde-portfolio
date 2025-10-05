import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="footer-01">
        <p className='p-1-01'>
          &copy; 2025 Shivnarayan Shinde. All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default App
