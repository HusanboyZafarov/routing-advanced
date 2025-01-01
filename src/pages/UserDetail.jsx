import React from "react";
import { Link } from "react-router-dom";



const UserPage = ({ author }) => {
  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        Back to Home
      </Link>
      <h2>User Information</h2>
      <p>
        <strong>Username:</strong> {author.username}
      </p>
      <p>
        <strong>First Name:</strong>  {author.first_name}
      </p>
      <p>
        <strong>Last Name:</strong> {author.last_name}
      </p>
      <p>
        <strong>Email:</strong> {author.email}
      </p>
      <p>
        <strong>Gender:</strong> {author.gender}
      </p>
    </div>
  );
};

export default UserPage;
