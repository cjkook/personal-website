import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

import "./style.css";

const styles = {
  backgroundColor: "black",
  color: "#edddd4",
};
function NavigationBar() {
  return (
    <Navbar style={styles} fixed="top">
      <Container>
        <Navbar.Brand href="home" style={styles}>
          cjko-ok
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="portfolio" style={styles}>
            portfolio
          </Nav.Link>
          <Nav.Link href="about" style={styles}>
            about
          </Nav.Link>
          <Nav.Link href="contact" style={styles}>
            contact
          </Nav.Link>
        </Nav>
        {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form> */}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
