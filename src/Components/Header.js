import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="light" variant="light" >
      <Link to="/#home">
        <Navbar.Brand>
          Clothes Store
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto"></Nav>

      <Navbar.Collapse className="justify-content-end">

          <nav>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;

            <Link to="/Men">Men</Link>&nbsp;&nbsp;&nbsp;

            <Link to="/Women">Women</Link>&nbsp;&nbsp;&nbsp;
          </nav>


      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;