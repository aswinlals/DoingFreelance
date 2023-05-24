import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
      
    </div>
  )
}

export default Home
