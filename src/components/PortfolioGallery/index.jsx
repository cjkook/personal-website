import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import projects from "../../projects.js";

// view/access public images in build
// {/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} /> */}

let tagLookup = (cl) => {
  if (cl === "primary") {
    return "webdev";
  }
  if (cl === "danger") {
    return "av";
  }
  if (cl === "info") {
    return "art";
  }
  if (cl === "light") {
    return "audio";
  }
  if (cl === "success") {
    return "design";
  }
  if (cl === "warning") {
    return "storytelling";
  }
  if (cl === "secondary") {
    return "other";
  }
};

const styles = {
  backgroundColor: "black",
};

const hoverStyles = {
  backgroundColor: "black",
  opacity: 0.75,
};

class PortfolioGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects,
      results: [],
      hoverId: 0,
    };
  }

  // When this component mounts
  componentDidMount() {
    let projectsSorted = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };
    this.setState({ results: projectsSorted(projects) });
  }

  // change bg on hover
  onHover = (e) => {
    this.setState({ hoverId: e.target.id });

    // console.log(e.target);
  };

  projectLink = (e) => {
    let id = this.state.hoverId;

    this.state.projects.forEach((item) => {
      if (item.id == id) {
        // open project in new tab
        const newWindow = window.open(item.projectLink, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      }
    });
  };

  onMouseLeave = (e) => {
    // this.setState({ hoverId: 0 });
  };

  // filter the gallery by the selected tag
  filterByBadge = (e) => {
    // derive tag from class name
    let text = e.target.className;
    let badge = text.slice(text.indexOf("e-") + 2);
    badge = tagLookup(badge);
    console.log(badge);

    // filter function
    let projectsFiltered = (array) => {
      let results = [];
      array.forEach((item) => {
        let found = item.tags.find((tag) => tag === badge);
        if (found) {
          results.push(item);
        }
      });
      console.log(results);
      if (results) {
        return results;
      }
    };

    this.setState({
      filteredBadge: badge,
      results: projectsFiltered(projects),
    });
  };

  // assign badge for each project item
  fnAssignBadge = (tag, i) => {
    let badge = "";
    let text;
    if (tag.includes("webdev")) {
      badge = "primary";
      text = "Web Development";
    }
    if (tag.includes("av")) {
      badge = "danger";
      text = "A/V";
    }
    if (tag.includes("art")) {
      badge = "info";
      text = "Creative Coding";
    }
    if (tag.includes("audio")) {
      badge = "light";
      text = "Audio";
    }
    if (tag.includes("design")) {
      badge = "success";
      text = "Design";
    }
    if (tag.includes("other")) {
      badge = "secondary";
      text = "Other";
    }

    return (
      <>
        <Badge
          style={{
            margin: 2,
          }}
          key={i}
          variant={badge}
          badge={tag}
        >
          {text}
        </Badge>
      </>
    );
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Container>
          <CardColumns>
            {this.state.results.map((item, index) => {
              let values = [0.65, 0];
              if (item.id == this.state.hoverId) {
                values = [1, 1];
              }

              if (!(item.id === 0)) {
                return (
                  <Card
                    style={styles}
                    key={item.index}
                    onClick={this.projectLink}
                  >
                    {/* <Card.Header>
                      <Card.Title></Card.Title>
                    </Card.Header> */}

                    <Card.Img
                      src={process.env.PUBLIC_URL + item.image}
                      style={{
                        opacity: values[0],
                      }}
                    />

                    <Card.ImgOverlay
                      id={item.id}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.onMouseLeave}
                      style={{
                        opacity: values[1],
                      }}
                    >
                      <div style={hoverStyles}>
                        <Card.Title
                          style={{
                            padding: 10,
                          }}
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Body
                          style={{
                            padding: 10,
                          }}
                        >
                          {item.brief}
                        </Card.Body>
                        <Card.Footer>
                          {item.tags.map((tag, i) => {
                            return this.fnAssignBadge(tag, i);
                          })}
                          <br></br>
                          <small className="text-muted">{item.update}</small>
                        </Card.Footer>
                      </div>
                    </Card.ImgOverlay>
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

export default PortfolioGallery;

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
