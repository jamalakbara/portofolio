import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./css/style.css";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
    </React.Fragment>
  );
}

export default App;
