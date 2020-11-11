import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import projects from "../../projects.js";

// view/access public images in build
// {/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} /> */}

const image1 = "./assets/images/processing/jumbo-1.png";
const styles = {
  backgroundColor: "black",
  // color: "#edddd4",
};

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects,
      hoverId: 0,
    };
  }

  // When this component mounts
  componentDidMount() {
    this.setState({ results: projects });
  }

  // change bg on hover
  onHover = (e) => {
    this.setState({
      hoverId: e.target.id
    });


    console.log(e.target);
  };

  onMouseLeave = (e) => {
    this.setState({
      hoverId: e.target.id
    });
  };

  // assign badge for each project item
  fnAssignBadge = (tags, i) => {
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
        <Badge key={i} variant={badge}>
          {text}
        </Badge>{" "}
      </>
    );
  };

  render() {
    console.log(this.state)
    return (
      <>
        <Container>
          <br></br>
          <CardColumns>
            {projects.map((item, index) => {
              if (!(item.id === 0)) {
                return (
                  <Card
                    style={styles}
                    key={item.index}
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onMouseLeave}
                  >
                    {/* {(item.id === parseInt(this.state.hoverId)) && (
                      <Card.Header>
                        <Card.Title>test</Card.Title>
                      </Card.Header>
                    )} */}

                    <Card.Img
                      variant="top"
                      src={process.env.PUBLIC_URL + item.image}
                      style={{
                        opacity: .5,
                        opacity: (item.id === parseInt(this.state.hoverId)) && 1,
                      }}
                    />
                    <Card.ImgOverlay
                      id={item.id}
                      style={{
                        opacity: 0,
                        opacity: (item.id === parseInt(this.state.hoverId)) && 1,
                      }}
                    >
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.brief}</Card.Text>
                      {item.tags.map((tag, i) => {
                        return this.fnAssignBadge(tag, i);
                      })}
                    </Card.ImgOverlay>

                    {/* <Card.Body>
                        <Card.Text>{item.brief}</Card.Text>
                        {item.tags.map((tag, i) => {
                          return this.fnAssignBadge(tag, i);
                        })}
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{item.update}</small>
                      </Card.Footer> */}
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
