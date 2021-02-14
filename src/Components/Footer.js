import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <Navbar  sticky="bottom" bg="dark" variant="dark">
          <Navbar.Collapse className="justify-content-center">
           <Link to="/#home">
          <Navbar.Brand>Clothes Store</Navbar.Brand>
          </Link>
          <Navbar.Text>© 2020.</Navbar.Text>
          <Navbar.Text>Powered by Clothes</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer
