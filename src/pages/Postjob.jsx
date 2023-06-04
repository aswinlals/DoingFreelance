import { useState , useEffect} from 'react';
import React from 'react';
import { useNavigate , Link} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../stylesheets/formstyle.css';
import { walletAddress } from '../Components/Navbar';


function Postjob() {
  const history=useNavigate();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [languagesKnown, setLanguagesKnown] = useState('');
  const [skills, setSkills] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Entry');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');


 

  async function submit(event) {
    event.preventDefault();
  
    const formData = {
      firstName,
      middleName,
      lastName,
      languagesKnown,
      skills,
      experienceLevel,
      portfolioLink,
      walletAddress,
    };
  
    try {
      const response = await fetch('/postjob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert(`Welcome ${firstName}. You are successfully registered!`);
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Failed to submit the form', error);
      alert('Failed to submit the form');
    }
  }


  



  return (
    <div>
      <Navbar/>
      <form onSubmit={submit} action='POST'>
      <label>
        First Name:<span className="required"></span>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
          className="required"
        />
      </label>
      <br />
      <label>
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(event) => setMiddleName(event.target.value)}
          required 
        />
      </label>
      <br />
      <label>
        Last Name:<span className="required"></span>
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required className="required"
        />
      </label>
      <br />


      <label>
        Languages Known:<span className="required"></span>
        <input
          type="text"
          value={languagesKnown}
          onChange={(event) => setLanguagesKnown(event.target.value)}
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
      
      <button onClick={submit}>Register</button>
    </form>
    <Footer/>
    </div>
  )
}


export default Postjob