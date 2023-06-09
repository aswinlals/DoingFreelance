import React, { useContext } from "react";
import "../style.css";
import logo from "../assets/doingfreelance.png";
import { Link } from "react-router-dom";
import { WalletContext } from "../scripts/WalletContext";

const Navbar = () => {
  const { walletAddress, connectWallet } = useContext(WalletContext);

  return (
    <div>
      <header>
        <a href="/">
          <img id="logo" src={logo} alt="DoingFreelance Logo" width="200" />
        </a>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse Freelancers</Link>
            </li>
            <li>
              <Link to="/postjob">Register as Freelancer</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/how">How it works</Link>
            </li>
          </ul>
        </nav>

        <button
          id="connect-wallet"
          onClick={connectWallet}
          title={walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
        >
          {walletAddress ? "Disconnect" : "Connect"}
        </button>

        {/* {walletAddress && (
          <p>Connected wallet address: {walletAddress}</p>
        )} */}
      </header>
    </div>
  );
};

export default Navbar;
