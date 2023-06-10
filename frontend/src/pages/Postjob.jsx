import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../stylesheets/formstyle.css";
import { walletAddress } from "../Components/Navbar";

const Postjob = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const freelancer = {
      name,
      skills,
      price,
      experienceLevel,
      portfolioLink,
      walletAddress,
      
    };

    const response = await fetch("/api/freelancers", {
      method: "POST",
      body: JSON.stringify(freelancer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setName("");

      setSkills("");
      setExperienceLevel("");
      
      setPortfolioLink("");
      setWalletAddress("");
      setPrice("");

      console.log("New Freelancer registered:", json);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:<span className="required"></span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="required"
          />
        </label>
        <br />
        
        

        <label>
          Price in USDT:<span className="required"></span>
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Skills: <span className="required"></span>
          <input
            type="text"
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Experience Level:<span className="required"></span>
          <select
            value={experienceLevel}
            onChange={(event) => setExperienceLevel(event.target.value)}
            required
            className="selectStyle"
          >
            <option value="Entry">Entry</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>
        <br />
        <label>
          Portfolio link:<span className="required"></span>
          <input
            type="url"
            value={portfolioLink}
            onChange={(event) => setPortfolioLink(event.target.value)}
            required
          />
        </label>

        <label>
          Wallet Address:<span className="required"></span>
          <input
            type="text"
            value={walletAddress}
            readOnly
            className="required"
          />
        </label>

        <br />

        <button>Register</button>
        {error && <div className="error">{error}</div>}
      </form>
      <Footer />
    </div>
  );
};

export default Postjob;
