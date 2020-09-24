import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "../../logo.svg";
import "./style.css";
import routes from "../../routes.js";

class PublicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "filler",
    };
  }

  componentDidUpdate(e) {
    document.title = "cjko-ok";

    // responsive navbar
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname // &&
      // document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      // document.documentElement.classList.toggle("nav-open");
    }

    // scrolling
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  // ! routing logic
  getRoutes = (routes) => {
    //console.log(routes)
    return routes.map((prop, key) => {
      if (prop.layout === "/public") {
        return (
          <Route
            path={prop.path}
            render={(props) => (
              <prop.component
                {...props}
                // handleClick={this.handleNotificationClick}
                // palette={this.state.palette}
                // handleInputChange={this.handleInputChange}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  // ! filtering logic
  // handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   e.preventDefault();
  //   const { name, value } = e.target;

  //   // API.getPalette({
  //   //   palette: this.state.colorPalettes[0],
  //   //   // user:
  //   //   // title: titleRef.current.value,
  //   //   // body: bodyRef.current.value,
  //   //   // author: authorRef.current.value,
  //   // })
  //   //   .then((result) => {})
  //   //   .catch((err) => console.log(err));
  //   API.savePalette({
  //     palette: value,
  //     // user: this.state.user || "testUser" // !
  //     // title: titleRef.current.value,
  //     // body: bodyRef.current.value,
  //     // author: authorRef.current.value,
  //   })
  //     .then((result) => {
  //       this.setState(result);
  //     })
  //     .catch((err) => console.log(err));

  //   // Updating the input's state
  //   // * match up name attribute to state property
  //   this.setState(
  //     {
  //       [name]: value,
  //     }
  //     // console.log(this.state)
  //   );
  // };

  render() {
    // ! auto sidebar
    // <Sidebar
    //       {...this.props}
    //       routes={routes}
    //       image={this.state.image}
    //       color={this.state.color}
    //       hasImage={this.state.hasImage}
    //     />

    // <Switch>{this.getRoutes(routes)} </Switch>
    return (
      <>
        
        {/* <Sidebar></Sidebar> */}
        {/* <NavBar></NavBar> */}
        
        <Router>
          <Switch>{this.getRoutes(routes)} </Switch>
        </Router>
      </>
    );
  }
}

export default PublicLayout;
