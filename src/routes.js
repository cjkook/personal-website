import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/Home.jsx";
// import UserPalette from "views/UserPalette.jsx";
// import About from "views/About.jsx";
// import SketchOne from "views/SketchOne.jsx";
// import SketchTwo from "views/SketchTwo.jsx";
// import SketchThree from "views/SketchThree.jsx";
const routes = [
  {
    path: "/\d\d",
    name: "Project View ",
    icon: "pe-7s-notebook",
    component: ProjectPage,
    layout: "/public",
  }, 
  {
    path: "/",
    name: "Home",
    icon: "pe-7s-notebook",
    component: Home,
    layout: "/public",
  },  
];

export default routes;
