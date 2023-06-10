import React from 'react';
import Navbar from '../Components/Navbar';
import SignUpButtons from '../Components/SignUpButtons';
import Footer from '../Components/Footer';
import '../stylesheets/how.css';

const How = () => {
  return (
    <div>
      <Navbar />
      <div className="how-it-works">
        <center>
          <h1>How It Works</h1>
          <p>
            Welcome to the DoingFreelance platform! We have simplified the process of hiring freelancers and completing
            projects. Here's a step-by-step guide on how it works:
          </p>
          <div className="step">
            <h2>Step 1: Connect Wallet</h2>
            <p>
              To get started, connect your wallet to the DoingFreelance platform. This step ensures that you have a secure
              and verified identity within our decentralized marketplace.
            </p>
          </div>
          <div className="step">
            <h2>Step 2: Browse Freelancers</h2>
            <p>
              Once your wallet is connected, browse through our list of registered freelancers. You can filter the results
              based on skills, experience, and more to find the perfect match for your project requirements.
            </p>
          </div>
          <div className="step">
            <h2>Step 3: Chat and Discuss</h2>
            <p>
              When you find a freelancer you're interested in, initiate a chat to discuss the project details and negotiate
              the terms. Our chat feature allows seamless communication and ensures all conversations are recorded for
              future reference.
            </p>
          </div>
          <div className="step">
            <h2>Step 4: Hire and Escrow</h2>
            <p>
              Once you and the freelancer agree on the project scope and terms, proceed to hire the freelancer. Our secure
              escrow system will hold the agreed-upon payment until the work is completed and approved.
            </p>
          </div>
          <div className="step">
            <h2>Step 5: Work Submission</h2>
            <p>
              The freelancer will complete the work within the agreed timeframe. They will submit the deliverables through
              the platform, and you will receive a notification when the work is ready for review.
            </p>
          </div>
          <div className="step">
            <h2>Step 6: Review and Verify</h2>
            <p>
              As a customer, you will review the submitted work and verify its quality and completion. If you are fully
              satisfied, you can mark it as verified and proceed to the next step. If there are any concerns or issues, you
              can communicate with the freelancer to resolve them.
            </p>
          </div>
          <div className="step">
            <h2>Step 7: Release Payment</h2>
            <p>
              Once the work is verified and approved, you can release the payment from the escrow account. The funds will be
              transferred to the freelancer's wallet as a fair compensation for their services.
            </p>
          </div>
          <div className="step">
            <h2>Step 8: Provide Feedback</h2>
            <p>
              Finally, you have the option to provide feedback and rate the freelancer based on their performance. Your
              feedback helps build a trusted community and benefits future customers and freelancers on the platform.
            </p>
          </div>
          <p>Start your freelancing journey with us today!</p>
        </center>
      </div>
      <SignUpButtons />
      <Footer />
    </div>
  );
};

export default How;
