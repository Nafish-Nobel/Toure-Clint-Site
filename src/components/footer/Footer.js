import React from "react";
import { Col, Row } from 'react-bootstrap';
import './footer.css';
/* this is the component for footer. */
const Footer = () => {
  return (
    <Row className='futter-section'>
    <Col>
  <h1 className="text-success fw-bold">Our Services </h1>
  <br />
  <p>Md Rezoun Shafiullah is a World class tourist. He assist Us </p>
  <img className="img-fluid" src="data:image/png;base64,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" alt=""/>
    </Col>
    <Col>

      <h3 className="text-danger fw-bold">Helpline</h3>
      <br />
      <p>Hotel Services</p>
      <p>Emergency Ticket</p>
      <p>Emergency </p>
      
    </Col>
    <Col>
     <h2 className="text-primary fw-bold">Opening Hours</h2>
     <br />
     <p>Mon-Tues: <span>              6:00-10:00</span></p>
     <hr />
     <p>Wed-Thurs: 6:00-10:00</p>
     <hr />
     <p>Sat-Sun: 6:00-10:00</p>
     <hr />
     <p>Friday: Closed</p>
     <hr />
    </Col>
</Row>
  );
};

export default Footer;
