import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

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
