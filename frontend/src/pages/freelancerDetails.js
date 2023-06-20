import React from "react";

const FreelancerDetails = ({ freelancer }) => {
  return (
    <div>
      <div className="freelancers-list">
        <h3>{freelancer.name}</h3>
        <p>
          <strong>Skills: </strong>
          {freelancer.skills}
        </p>
        <p>
          <strong>Portfolio Link: </strong>
          <a href={freelancer.portfolioLink} target="_blank" rel="noopener noreferrer">
            {freelancer.portfolioLink}
          </a>
        </p>
        <p>
          <strong>Price: </strong>
          {freelancer.price} <strong>USDT</strong>
        </p>
       
        
      </div>
    </div>
  );
};

export default FreelancerDetails;
