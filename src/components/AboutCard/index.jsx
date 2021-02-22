import React from "react";
import Image from 'react-bootstrap/Image'
import "./style.css"

const image1 = "./assets/images/personal/CKS_Mem_Picture_01_crop.jpg";
const styles = {
  backgroundColor: "black",
};

class AboutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // When this component mounts
  componentDidMount() {
    console.log('about log')
  }

  render() {
    return (
      <>
        <Image className="photo" fluid src={image1} roundedCircle />
      </>
    );
  }
}

export default AboutCard;
