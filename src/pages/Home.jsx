import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Parallax, Background } from "react-parallax";
// import PortfolioGallery from "../components/PortfolioGallery"; 
import AboutCard from "../components/AboutCard";
import Sketch from "../components/Sketches/BG-Boxes/index.js";
// import Sketch from "../components/Sketches/slider-cards/index.js";

// palette used
// https://coolors.co/283d3b-197278-83a8a6-edddd4-d99185-c44536-b592a0-772e25

const image1 = "./assets/images/audio/Moog Sub 37 Blurry.jpg";
const image2 = "./assets/images/processing/jumbo-2.png";
const image3 = "./assets/images/processing/jumbo-3.png";
const image4 = './assets/images/processing/jumbo-4.png';
const image5 = "./assets/images/processing/jumbo-5.png";
const insideStyles = {
  background: "#83a8a6",
  color: "#283d3b",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const videoStyles = {
  width: "100%",
};
const primeJumboStyle = {
  height: "100%",
};
const jumboStyles = {
  backgroundColor: "#edddd4",
  color: "#283d3b",
};
const jumboStylesAlt = {
  backgroundColor: "#edddd4",
  color: "#283d3b",
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <Sketch
          className="position-sticky"
          // style={sketchStyles}
          paletteUrl={
            "https://coolors.co/283d3b-197278-83a8a6-edddd4-d99185-c44536-b592a0-772e25"
          }
        />

        <Jumbotron style={jumboStyles} id="about">
          <Container>
            <AboutCard></AboutCard>
            <h1>Corey J. Kothenbeutel</h1>
            <p>
              I see myself as a problem solver at my core. To that end I harness
              my natural curiosity to explore the landscapes of technology, art,
              education, and music. My experience spans recording studios,
              interactive art installations, the A/V industry, classrooms, and
              web development.
            </p>
          </Container>
        </Jumbotron>

        {/* <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}></div>
        </Parallax> */}

        <Jumbotron style={jumboStyles} id="portfolio">
          <Container>
            <h1>Portfolio</h1>
            <p></p>
            <p>{/* <Button variant="primary">Learn more</Button> */}</p>
          </Container>
        </Jumbotron>

        

        <Parallax bgImage={image5} strength={500}>
          {/* <PortfolioGallery></PortfolioGallery> */}
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <blockquote>
                "To practice any art, no matter how well or badly, is a way to
                make your soul grow. So do it."
              </blockquote>
            </div>
          </div>
        </Parallax>

        <Jumbotron style={jumboStylesAlt}>
          <h1>Thanks!</h1>
          <p>	&copy; 2021 Corey J. Kothenbeutel</p>
          <p>{/* <Button variant="primary">Learn more</Button> */}</p>
        </Jumbotron>
      </>
    );
  }
}

export default Home;
