import React from "react";
import Sketch from "react-p5";
import "./styles.css";
import fnc from "../functions";

// * AUTHOR: Sayama (https://www.openprocessing.org/user/159668)

//* PALETTE VARS
let gra;
let palette = "";
let tempPalette;
let columns;
// * SKETCH VARS
const CYCLE = 400;

class SketchBox extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  // When this component mounts
  componentDidMount() {
    console.log(this.props.paletteUrl);
    palette = this.props.paletteUrl;
    tempPalette = fnc.createCols(palette);
    // lineCol = tempPalette.splice(1, tempPalette.length - 1);
  }

  render() {
    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <Sketch
          preload={() => {}}
          /////////////////////////////
          // * SETUP
          setup={(p5, parentRef) => {
            // instantiate graphics
            gra = p5.createGraphics(100, p5.height * 20);

            columns = p5.int(p5.random(0,4));

            fnc.drawPat = function (gra, x, y, w, h, count) {
              const maxCount = 7;
              const noiseSp = 1 / 2000;
              const noiseScaleY = 1 / 8000;
              let nv = p5.noise(x, y * noiseScaleY, noiseSp * p5.frameCount);
              let divRatio = p5.constrain(nv, 0.1, 0.9);
              let h1 = divRatio * h;
              let h2 = h - h1;

              if (count < maxCount) {
                fnc.drawPat(gra, x, y, w, h1, count + 1);
                fnc.drawPat(gra, x, y + h1, w, h2, count + 1);
              } else {
                // gra.noStroke();
                gra.stroke(255);
                gra.fill(p5.random(tempPalette));
                gra.rect(x, y+p5.random(400), w, h1*5);
                gra.fill(p5.random(tempPalette));
                gra.rect(x, y + h1, w, h2*8);
              }
            };

            p5.createCanvas(window.innerWidth, window.innerHeight).parent(
              parentRef
            );
          }}
          ////////////////////////////////////
          // * DRAW
          draw={(p5) => {
            p5.randomSeed(0);
            fnc.drawPat(gra, 0, 0, gra.width, gra.height, 0);
            let x = 0;
            let count = 0;
            while (x < p5.width) {
              let w = p5.random(50, 150);
              let ratio = gra.width / w;
              let yOffset = w / 2;
              let h = p5.height + yOffset * 2;
              let sh = p5.height * ratio;
              let sy = p5.random(gra.height - sh);

              p5.push();
              p5.translate(x, -yOffset);
              let shaerRad = count % columns == 0 ? -p5.PI / columns : p5.PI / columns / 2;
              p5.shearY(shaerRad);
              p5.image(gra, 0, 0, w, h, 0, sy, gra.width, sh);
              p5.pop();
              if (count % 2 == 0) {
                // noStroke();
                p5.fill(0, 20);
                p5.rect(x, 0, w, p5.height);
              }
              x += w;
              count++;
            }
          }}
          ///////////////////////
          mousePressed={() => {}}
        />
      </div>
    );
  }
}

export default SketchBox;
