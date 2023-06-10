import React from "react";
import Navbar from "../Components/Navbar";
import SignUpButtons from "../Components/SignUpButtons";
import Footer from "../Components/Footer";
import "../stylesheets/about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <center>
          <h1>About Us</h1>
          <p>
            Welcome to DoingFreelance! We are a decentralized freelance
            marketplace that aims to revolutionize the way freelancers and
            customers connect and collaborate.
          </p>
          <p>
            Our platform provides a secure and trusted environment for
            freelancers to showcase their skills and for customers to find the
            perfect talent for their projects.
          </p>

          <p>
            Customers can easily browse through a diverse pool of registered
            freelancers, each with their own unique set of skills and
            experience. Whether you need a web developer, data scientist, or
            mobile app developer, you'll find the right professional for your
            project on DoingFreelance.
          </p>

          <p>
            Join us today and experience the power of decentralized freelancing.
            Whether you are a freelancer looking for opportunities or a customer
            in need of skilled professionals, DoingFreelance is here to connect
            you with the talent you need.
          </p>
          <p>Start your freelancing journey with us today!</p>
        </center>
      </div>
      <SignUpButtons />
      <Footer />
    </div>
  );
};

export default About;
