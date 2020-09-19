import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./css/style.css";
import About from "./components/About";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Works from "./components/Works";
import Hire from "./components/Hire";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portofolio />
      <Works />
      <Hire />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
