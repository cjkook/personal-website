import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Parallax, Background } from "react-parallax";
import Badge from "react-bootstrap/Badge";
import projects from "../../projects.js";

// view/access public images in build
// {/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} /> */}

const image1 = "./assets/images/processing/01.02.16 oysterium_1.png";
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(projects);
    return (
      <>
        <Container><br></br>
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + projects[1].image}
              />
              <Card.Body>
                <Card.Title>{projects[1].title}</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
                <Badge variant="primary">Web Development</Badge>{" "}
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardColumns>
        </Container>
        <br></br>
      </>
    );
  }
}

export default Portfolio;

{
  /* <div>
  <Badge pill variant="primary">
    Primary
  </Badge>{' '}
  <Badge pill variant="secondary">
    Secondary
  </Badge>{' '}
  <Badge pill variant="success">
    Success
  </Badge>{' '}
  <Badge pill variant="danger">
    Danger
  </Badge>{' '}
  <Badge pill variant="warning">
    Warning
  </Badge>{' '}
  <Badge pill variant="info">
    Info
  </Badge>{' '}
  <Badge pill variant="light">
    Light
  </Badge>{' '}
  <Badge pill variant="dark">
    Dark
  </Badge>
</div> */
}
