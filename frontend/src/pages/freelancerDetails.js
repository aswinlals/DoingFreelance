const FreelancerDetails = ({ freelancer }) => {
  return (
    <div>
      
      <div className="freelancers-list">
        

        <h4>{freelancer.name}</h4>
        <p>
          <strong>Skills: </strong>
          {freelancer.skills}
        </p>
        <p>
          <strong>Price: </strong>
          {freelancer.price}
        </p>
        <p>{freelancer.createdAt}</p>
      </div>
    </div>
  );
}

export default FreelancerDetails
