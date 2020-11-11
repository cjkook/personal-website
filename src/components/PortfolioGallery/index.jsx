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
const styles = {
  backgroundColor: "black",
  color: "#edddd4",
};

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: 0,
    };
  }

  // When this component mounts
  componentDidMount() {
    this.setState({ results: projects });
  }

  // assign badge for each project item
  fnAssignBadge = (tags) => {
    let badge = "";
    let text;
    if (tags.includes("webdev")) {
      badge = "primary";
      text = "Web Development";
    }
    if (tags.includes("av")) {
      badge = "danger";
      text = "A/V";
    }
    if (tags.includes("art")) {
      badge = "info";
      text = "Creative Coding";
    }
    if (tags.includes("audio")) {
      badge = "light";
      text = "Audio";
    }
    if (tags.includes("design")) {
      badge = "success";
      text = "Design";
    }
    if (tags.includes("other")) {
      badge = "secondary";
      text = "Other";
    }

    return (
      <>
        <Badge variant={badge}>{text}</Badge>{" "}
      </>
    );
  };

  render() {
    return (
      <>
        <Container>
          <br></br>
          <CardColumns>
            {projects.map((item, index) => {
              if (!(item.id === 0)) {
                return (
                  <Card style={styles} key={item.index}>
                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + item.image}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{/* {item.description} */}</Card.Text>
                      {item.tags.map((tag,i) => {
                        console.log(i)
                        return this.fnAssignBadge(tag)
                      })}
                      {/* {this.fnAssignBadge(item.tags)} */}
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{item.update}</small>
                    </Card.Footer>
                  </Card>
                );
              }
            })}
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
