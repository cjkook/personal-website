import React from "react";
import Sketch from "react-p5";
import "./styles.css";
import fnc from "../functions/coolors-index";

// * AUTHOR: Sayama (https://www.openprocessing.org/user/159668)

//* PALETTE VARS
let gra;
let palette = "";
let tempPalette;

// * SKETCH VARS
const CYCLE = 1200;

class SketchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // _onMouseMove(e) {
  //   this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  // }

  // When this component mounts
  componentDidMount() {
    palette = this.props.paletteUrl;
    tempPalette = fnc.createCols(palette);
    // lineCol = tempPalette.splice(1, tempPalette.length - 1);
  }

  render() {
    return (
      // <div onMouseMove={this._onMouseMove.bind(this)}>
        <Sketch
          preload={() => {}}
          /////////////////////////////
          // * SETUP
          setup={(p5, parentRef) => {
            // instantiate graphics
            gra = p5.createGraphics(p5.width, p5.height, p5.WEBGL);

            fnc.getRatio = function (count) {
              let frameRatio = (count % CYCLE) / CYCLE;

              return frameRatio;
            };

            fnc.getRatioEased = function (count) {
              let ratio = fnc.getRatio(count);
              let easeRatio =
                fnc.easingEaseInOutQuint(ratio) * .9 + ratio * 0.1;

              return easeRatio;
            };

            fnc.easingEaseInOutCubic = function (x) {
              if (x < 0.5) return 0.5 * p5.pow(2 * x, 3);
              else return 0.5 * p5.pow(2 * (x - 1), 3) + 1;
            };

            fnc.easingEaseInOutQuint = function (x) {
              if (x < 0.5) {
                return 0.5 * p5.pow(2 * x, 5);
              } else {
                return 0.5 * p5.pow(2 * (x - 1), 5) + 1;
              }
            };

            fnc.easingEaseInOutBack = function (x) {
              const c1 = 1.70158;
              const c2 = c1 * 1.525;

              return x < 0.5
                ? (p5.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
                : (p5.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) /
                    2;
            };

            let s = p5.min(p5.windowWidth, p5.windowHeight) * 1;
            p5.createCanvas(p5.windowWidth, 400, p5.WEBGL).parent(parentRef);

            //ortho
            let dep = p5.max(p5.width, p5.width);
            p5.ortho(
              -p5.width / 2,
              p5.width / 2,
              -p5.height / 2,
              p5.height / 2,
              -dep * 3,
              dep * 3
            );

            p5.noStroke();
            // p5.createCanvas(window.innerWidth, 500, p5.WEBGL).parent(parentRef);
          }}
          ////////////////////////////////////
          // * DRAW
          draw={(p5) => {
            let span = gra.width * 10.5;
            let frameSpan = CYCLE / 20;
            p5.scale(2)
            p5.background("#edddd4");
            p5.orbitControl();
            p5.push();
            p5.rotateX(-p5.PI / 6);
            p5.rotateY(p5.PI / 5);
            p5.fill(70);
            p5.push();
            p5.translate(0, 0, 0.125 * gra.width);
            // box(span, 3, 0.25 * width);
            p5.pop();
            // for (let i = 0; i < CYCLE; i += frameSpan) {
            //   let color = tempPalette[(i / frameSpan) % tempPalette.length];
            //   if (color === "#edddd4") {
            //     p5.stroke("#83a8a6");
            //   } else {
            //     p5.stroke("#edddd4");
            //   }

            //   let x = fnc.getRatioEased(p5.frameCount + i) * -span; // reverse
            //   if (x > span / 2) x -= span;

            //   let w = (p5.sin((i / CYCLE) * p5.TAU) * 0.1 + 0.15) * p5.width;
            //   let h =
            //     (p5.sin((i / CYCLE) * p5.TAU + p5.PI) * 0.1 + 0.15) * p5.height;

            //   p5.fill(color);
            //   p5.push();
            //   p5.translate(x-200, -h / 2, w / 2-200);
            //   p5.rotateY(p5.PI / 2);
            //   p5.box(w, h, 4);
            //   p5.pop();
            // }
            for (let i = 0; i < CYCLE; i += frameSpan) {
              let color = tempPalette[(i / frameSpan) % tempPalette.length];
              if (color === "#edddd4") {
                p5.stroke("#83a8a6");
              } else {
                p5.stroke("#edddd4");
              }

              let x = fnc.getRatioEased(p5.frameCount + i) * span;
              if (x > span / 2) x -= span;

              let w = (p5.sin((i / CYCLE) * p5.TAU) * 0.1 + 0.15) * p5.width-100;
              let h =
                (p5.sin((i / CYCLE) * p5.TAU + p5.PI) * 0.1 + 0.15) * p5.height;

              p5.fill(color);
              p5.push();
              p5.translate(x+120, -h / 2+100, w / 2-200);
              p5.rotateY(p5.PI / 2);
              p5.box(w, h, 4);
              p5.pop();
            }
            p5.pop();
          }}
          ///////////////////////
          // mousePressed={() => {}}
        />
      // </div>
    );
  }
}

export default SketchBox;
