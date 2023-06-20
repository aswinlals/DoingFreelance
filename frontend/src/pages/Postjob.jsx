import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../stylesheets/formstyle.css";
import { WalletContext } from "../scripts/WalletContext";

const Postjob = () => {
  const { walletAddress } = useContext(WalletContext); // Use WalletContext to access walletAddress
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (skills === "Select" || experienceLevel === "Select") {
      setError("Please select a valid option for Skills and Experience Level.");
      return;
    }

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

      setSkills("Select");
      setExperienceLevel("Select");

      setPortfolioLink("");

      setPrice("");

      console.log("New Freelancer registered:", json);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>
           Name:<span className="required"></span>
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
          Skills: <span className="required"></span>
          <select
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
            required
            className="selectStyle"
          >
            <option  >Select</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="Smart Contract Developer">
              Smart Contract Developer
            </option>
            <option value="Blockchain Analyst">Blockchain Analyst</option>
            <option value="Blockchain Project Manager">
              Blockchain Project Manager
            </option>
            <option value="Blockchain Consultant">Blockchain Consultant</option>
            <option value="UI/UX Developer">UI/UX Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Blockchain Developer">Blockchain Developer</option>
          </select>
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
            <option  >Select</option>
            <option value="Entry">Entry</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>

        <br />
        <label>
          Portfolio link:
          <input
            type="url"
            value={portfolioLink}
            onChange={(event) => setPortfolioLink(event.target.value)}
          />
        </label>

        <br/>

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

        <label className="wallet-address">
          Wallet Address:<span className="required"></span>
          <input
            type="text"
            value={walletAddress}
            readOnly
            required
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
