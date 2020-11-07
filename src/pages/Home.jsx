import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Parallax, Background } from "react-parallax";
import Portfolio from "../components/PortfolioGallery"

const image1 = "./assets/images/processing/jumbo-1.png";
const image2 = "./assets/images/processing/jumbo-2.png";
const image3 = "./assets/images/processing/jumbo-3.png";
const image4 = "./assets/images/processing/jumbo-4.png";
const image5 = "./assets/images/processing/jumbo-5.png";
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
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
        <Parallax bgImage={image5} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Jumbotron>
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: 500 }}>
            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
          </div>
        </Parallax>
        
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>{/* <Button variant="primary">Learn more</Button> */}</p>
        </Jumbotron>
        <Portfolio></Portfolio>
        
        <Parallax bgImage={image3} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>{/* <Button variant="primary">Learn more</Button> */}</p>
        </Jumbotron>
        
        <Parallax bgImage={image4} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>{/* <Button variant="primary">Learn more</Button> */}</p>
        </Jumbotron>
      </>
    );
  }
}

export default Home;
