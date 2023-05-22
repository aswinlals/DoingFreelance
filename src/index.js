import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import logo from "../src/assets/doingfreelance.png";
//  import { Link } from "react-router-dom";
// import { Route ,Routes } from 'react-router-dom';

// import AboutUs from "./aboutus.js";

const App = () => {
  return (
    <div>
      <header>
        <a href="index.html">
          <img id="logo" src={logo} alt="DoingFreelance Logo" width="200" />
        </a>

        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul> */}
        </nav>

        <button id="connect-wallet">Connect Wallet</button>
      </header>

      <main>
        <div className="logo-text">
          <h1>Welcome to</h1>
          <img id="logo" src={logo} alt="DoingFreelance Logo" width="300" />
        </div>

        <h2>The decentralized marketplace for freelancers</h2>
        <div id="how-it-works">
          <ul style={{ listStyle: "none" }}>
            <li>
              Welcome to our decentralized freelance marketplace, where you can
              find and hire talented freelancers from around the world.
            </li>
            <li>
              Our platform offers a fair and transparent way for freelancers and
              clients to connect and collaborate, using the latest blockchain
              technology.
            </li>
            <li>
              Whether you're looking for a freelance writer, designer,
              programmer, or marketer, our platform has a diverse range of
              skilled professionals ready to work with you.
            </li>
            <li>
              With no intermediaries, you can trust that your payments will be
              securely and instantly transferred directly to your freelancer,
              with no hidden fees or delays.
            </li>
            <li>
              Join our growing community of freelancers and clients, and
              experience the benefits of a decentralized and borderless
              marketplace for the gig economy.
            </li>
          </ul>
        </div>
        <div id="signup-buttons">
          <button id="freelancer-signup">Sign up as a Freelancer</button>
          <button id="customer-signup">Sign up as a Customer</button>
        </div>
      </main>

      <footer>
        <p>DoingFreelance © 2023</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
