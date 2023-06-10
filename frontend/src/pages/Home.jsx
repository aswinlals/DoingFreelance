import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import SignUpButtons from '../Components/SignUpButtons';




const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SignUpButtons/>
      <Footer/>
      
      
    </div>
  )
}

export default Home
