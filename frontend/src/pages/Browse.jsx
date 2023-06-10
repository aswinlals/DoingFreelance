import React from "react";
import Navbar from "../Components/Navbar";
import "../stylesheets/browse.css";
import FreelancerDetails from "./freelancerDetails";
import { useEffect, useState } from "react";

const Browse = () => {
  const [freelancers, setFreelancers] = useState(null);

  useEffect(() => {
    const fetchFreelancers = async () => {
      const response = await fetch("/api/freelancers");
      const json = await response.json();

      if (response.ok) {
        setFreelancers(json);
      }
    };

    fetchFreelancers();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Browse Freelancers</h1>

      
        <div className="freelancers">
          {freelancers &&
            freelancers.map((freelancer) => (
              <FreelancerDetails freelancer={freelancer} key={freelancer._id} />
            ))}
        </div>
      
    </div>
  );
};

export default Browse;
