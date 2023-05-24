import React from 'react'
import Navbar from '../Components/Navbar';
import SignUpButtons from '../Components/SignUpButtons';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <center><h1>About us Page</h1>
      <p>Code your section here</p>
      <p>you can edit the section , go to Pages/About.jsx</p>
      <p>To reuse the Components, Navigate to src/Components</p>
      </center>
      <SignUpButtons/>
      <Footer/>
    </div>
  )
}

export default About
