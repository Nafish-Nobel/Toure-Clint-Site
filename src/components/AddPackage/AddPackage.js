import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const AddPackage = () => {
  const history = useHistory();
  const nameRef = useRef();
  const detailsRef = useRef();
  const priceRef = useRef();
  const fileRef = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    const image = fileRef.current.value;
    const description = detailsRef.current.value;
    const price = priceRef.current.value;
    const name = nameRef.current.value;
    const item = {
      name,
      description,
      image,
      price,
      status: true,
    };

    fetch("  https://dark-skeleton-11734.herokuapp.com/addPackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      history.push("/home#packages");
    });
  };
  return (
    <Container>

    <h2 className="text-center fw-bold bg-dark text-warning p-1 m-1 rounded">Please Fill The form With Information</h2>
      <div className="row">
      <div className=" col-lg-6 form text-start border-4 rounded-3 p-5 my-4 border-dark border bg-success">
      <h3 className="text-warning fw-bold bg-dark p-1 rounded">Add New Package</h3>
      <Form onSubmit={handelSubmit} className=" mx-auto">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label className="text-danger fw-bold">Package Name:</Form.Label>
          <Form.Control
            ref={nameRef}
            required
            type="text"
            placeholder="Enter Package Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDetails">
          <Form.Label className="text-danger fw-bold">Package Details:</Form.Label>
          <Form.Control
            type="text"
            ref={detailsRef}
            required
            placeholder="Enter Details"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupprice">
          <Form.Label className="text-danger fw-bold">Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="number"
            required
            placeholder="Enter Price"
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label className="text-danger fw-bold">Image Url:</Form.Label>
          <Form.Control ref={fileRef} required type="text" size="sm" />
        </Form.Group>
        <Button type="submit" variant="dark" className="fw-bold">
          Add Package
        </Button>
      </Form>
      </div>

      <div className="col-lg-6 m-5">
      <img className="img-fluid" src="https://img.freepik.com/free-vector/people-using-online-appointment-booking-app_74855-5556.jpg?size=626&ext=jpg" alt=""/>
      </div>
      </div>
      
      
    </Container>
  );
};

export default AddPackage;
