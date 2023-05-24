import React from 'react'
import "../style.css";
import logo from "../assets/doingfreelance.png";
import {Link} from 'react-router-dom'


const navbar = () => {
  return (
    <div>
      <header>
        <a href="/">
          <img id="logo" src={logo} alt="DoingFreelance Logo" width="200" />
        </a>

        <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/">Browse Freelancers</Link></li>
          <li><Link to="/">Register as Freelancer</Link></li> */}
          <li><Link to="/about">About Us</Link></li>
          {/* <li><Link to="/">How it works</Link></li> */}
        </ul>
      </nav>

        <button id="connect-wallet">Connect Wallet</button>
      </header>
    </div>
  )
}

export default navbar
