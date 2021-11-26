import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../utilities/context/useAuth";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";

// All Nav
const Nevigation = () => {
  // auth
  const { user, logOut } = useAuth();
  const handelLogOut = () => {
    logOut();
  };


  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            {" "}
            <h2 className="fw-bold">Toure</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-primary align-items-md-center">
              <Nav.Link as={HashLink} className="navlink btn-success rounded p-1 m-1" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink btn-primary p-1 rounded m-1" to="/home#packages">
                Packages
              </Nav.Link>

              {/* here this will run when user is logged in , here is the logout button and user name */}
              {user?.email ? (
                <>
                  <Nav.Link as={HashLink} className="navlink btn-success p-1 m-1 rounded" to="/management">
                    Manage Orders
                  </Nav.Link>
                  <Nav.Link as={HashLink} className="navlink btn-primary p-1 m-1 rounded" to="/myOrders">
                    My Orders
                  </Nav.Link>
                  <Nav.Link as={HashLink} className="navlink btn-success p-1 m-1 rounded" to="/addPackage">
                    Add Packages
                  </Nav.Link>
                  <button
                    type="button"
                    onClick={handelLogOut}
                    className="btn btn-danger me-3 fw-bold m-1"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Nav.Link as={HashLink} className="navlink" to="/Login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as:
                  <span className="ms-2 text-danger fw-bold bg-warning m-1 p-1 rounded">
                    {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
