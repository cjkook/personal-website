import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Parallax, Background } from "react-parallax";
import PortfolioGallery from "../components/PortfolioGallery";

// palette used
// https://coolors.co/283d3b-197278-83a8a6-edddd4-d99185-c44536-b592a0-772e25

const image1 = "./assets/images/processing/jumbo-1.png";

// const insideStyles = {
//   background: "black",
//   color: "#EDDDD4",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)",
// };
// const videoStyles = {
//   width: "100%",
// };
// const primeJumboStyle = {
//   height: "100%",
// };
// const jumboStyles = {
//   backgroundColor: "black",
//   color: "#edddd4",
// };
// const jumboStylesAlt = {
//   backgroundColor: "#edddd4",
//   color: "grey",
// };

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(window.location.pathname)
  }

  render() {
    return (
      <>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 200 }}></div>
        </Parallax>
        <PortfolioGallery></PortfolioGallery>

      </>
    );
  }
}

export default ProjectPage;
