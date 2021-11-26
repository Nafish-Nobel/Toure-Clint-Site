import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
/* not found!*/
const PageNotFound = () => {
  return (
    <div className="text-center">
      <img className="img-fluid p-1" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt=""/>
      <Link to="/home">
        <Button variant="danger mb-5">Home</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
