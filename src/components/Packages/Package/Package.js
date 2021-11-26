import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Package.css';

const Package = (props) => {
  const { _id, name, description, image, price, status } = props.package;
  return (
    <Col sm={12} md={12} lg={4}>
      <CardGroup>
        <Card className="card-clr shadow" >
          <Card.Img variant="top" className="w-100 h-50" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-info">{description.slice(0, 100)}</Card.Text>
            <p className="text-success">Cost: {price}</p>
          </Card.Body>
          <Card.Footer>
            {status ? (
              <Link to={`/book/${_id}`}>
                <Button className="" variant="warning" >Book Now</Button>
              </Link>
            ) : (
              <Button disabled variant="dark">
                Not Available
              </Button>
            )}
          </Card.Footer>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Package;
