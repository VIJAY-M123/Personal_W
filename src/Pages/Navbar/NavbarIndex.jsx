import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home'
import NavBar from './NavBar'
import About from '../About'
import Image from '../Image'
import WorkExperience from '../Work Experience'
import Technology from '../Technology'
import Experience from '../../Components/Experience'

function NavbarIndex() {
  return (
  <>
  <NavBar/>
  
  <Routes>
  <Route path="/" element={<Home/>}/> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/image" element={<Image/>}/>
   <Route path="/experience" element={<Experience/>}/>
   <Route path="/project-experience" element={<WorkExperience/>}/>
   <Route path="/skills" element={<Technology/>}/>
  </Routes>
  </>
    
   
  )
}

export default NavbarIndex