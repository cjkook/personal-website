import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import "./style.css";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="home">cjko-ok</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="portfolio">portfolio</Nav.Link>
        <Nav.Link href="about">about</Nav.Link>
        <Nav.Link href="contact">contact</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form> */}
    </Navbar>
  );
}

export default NavigationBar;
