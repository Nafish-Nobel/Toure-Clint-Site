import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const OPlased = () => {
  return (
    <div className="text-center">
      <h1 className="fw-bold bg-dark round text-white p-1 m-1">Order Has Been Delevired</h1>
      <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVIxNnbUkrwvPq6ZcqjSQ4YdSmJkDNCVQAA&usqp=CAU" alt=""/>
      <Link to="/home"><Button className="btn-success my-lg-4 fw-bold text-center">Home</Button></Link>
    </div>
  );
};

export default OPlased;
