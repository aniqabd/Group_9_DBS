import React from "react";
import "../App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {


  let history = useNavigate();

  function logout() {
    window.localStorage.removeItem("token");
    history.push("/");
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="home"><img
              src="/Dbs_logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>

            {/* to Delete this link later!! */}
            <Nav.Link href="/claimdetail">ClaimDetail</Nav.Link>
            <Nav.Link onClick={logout} href="/">
              Logout
            </Nav.Link>


            {/* <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;