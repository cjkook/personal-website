import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Parallax, Background } from "react-parallax";
import PortfolioGallery from "../components/PortfolioGallery";
import Sketch from "../components/Sketches/BG-Boxes/index.js";

// palette used
// https://coolors.co/283d3b-197278-83a8a6-edddd4-d99185-c44536-b592a0-772e25

const image1 = "./assets/images/processing/jumbo-1.png";
const image2 = "./assets/images/processing/jumbo-2.png";
const image3 = "./assets/images/processing/jumbo-3.png";
const image4 = "./assets/images/processing/jumbo-4.png";
const image5 = "./assets/images/processing/jumbo-5.png";
const insideStyles = {
  background: "black",
  color: "#EDDDD4",
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
  backgroundColor: "black",
  color: "#edddd4",
};
const jumboStylesAlt = {
  backgroundColor: "#edddd4",
  color: "grey",
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
        <Parallax style={primeJumboStyle} bgImage={image5} strength={500}>
          <div style={{ height: 200 }}></div>
        </Parallax>

        <Jumbotron style={jumboStyles} id="portfolio">
          <Container>
            <h1>Portfolio</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>{/* <Button variant="primary">Learn more</Button> */}</p>
          </Container>
          <PortfolioGallery
            style={{ position: "relative", zIndex: 1 }}
          ></PortfolioGallery>
        </Jumbotron>

        {/* <Jumbotron style={jumboStyles}>
          <video width="100%" height="400" autoPlay muted>
            <source
              src="./assets/images/portfolioPics/axidraw_demo.mp4"
              type="video/mp4"
            />
          </video>
        </Jumbotron> */}

        {/* <Jumbotron style={jumboStyles}>
          <Container>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <iframe
              margin="0"
              padding="0"
              src="https://player.vimeo.com/video/371297479"
              width="100%"
              height="720"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </Container>
        </Jumbotron>

        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax> */}

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

        <Jumbotron style={jumboStyles} id="about">
          <Container>
            <h1>Corey J. Kothenbeutel</h1>
            <p>
              A problem solver at my core, I also harness my curiosity to explore the landscapes of technology.  My experience spans music technology, interactive art installations, the A/V industry, education, and web development.
            </p>
          </Container>
        </Jumbotron>

        <Parallax bgImage={image4} strength={500}>
          <div style={{ height: 500 }}></div>
        </Parallax>
        <Jumbotron style={jumboStylesAlt}>
          <h1>Thanks!</h1>
          <p>Copyright.</p>
          <p>{/* <Button variant="primary">Learn more</Button> */}</p>
        </Jumbotron>
      </>
    );
  }
}

export default Home;
