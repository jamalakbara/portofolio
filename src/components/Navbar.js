import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [
    { homeHeight, aboutHeight, servicesHeight, portofolioHeight },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setBackCol({
          ...backCol,
          backgroundColor: "#1a1a1a",
          boxShadow: "0 5.9px 7.5px rgba(0, 0, 0, 0.291)",
        });
      } else {
        setBackCol((prevState) => ({
          ...prevState,
          backgroundColor: "unset",
          boxShadow: "unset",
        }));
      }
    });
  }, []);

  useEffect(() => {
    // set scroll home value
    dispatch({
      type: actionTypes.SET_HOME_HEIGHT,
      height: document.getElementById("home").offsetTop,
    });

    // set scroll about value
    dispatch({
      type: actionTypes.SET_ABOUT_HEIGHT,
      height:
        document.getElementById("about").offsetTop -
        document.querySelector(".navbar").offsetHeight,
    });

    // set scroll services value
    dispatch({
      type: actionTypes.SET_SERVICES_HEIGHT,
      height:
        document.getElementById("services").offsetTop -
        document.querySelector(".navbar").offsetHeight,
    });

    // set scroll portofolio value
    dispatch({
      type: actionTypes.SET_PORTOFOLIO_HEIGHT,
      height:
        document.getElementById("portofolio").offsetTop -
        document.querySelector(".navbar").offsetHeight,
    });
  }, []);

  const navLinksItem = [
    {
      key: 1,
      yHeight: homeHeight,
      name: "home",
      className:
        window.pageYOffset >= homeHeight && window.pageYOffset < aboutHeight
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 2,
      yHeight: aboutHeight,
      name: "about",
      className:
        window.pageYOffset >= aboutHeight && window.pageYOffset < servicesHeight
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 3,
      yHeight: servicesHeight,
      name: "services",
      className:
        window.pageYOffset >= servicesHeight &&
        window.pageYOffset < portofolioHeight
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 4,
      yHeight: portofolioHeight,
      name: "portofolio",
      className:
        window.pageYOffset >= portofolioHeight && window.pageYOffset < 4000
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 5,
      yHeight: 646,
      name: "contact",
      className: "navbar__links",
    },
  ];

  const Links = navLinksItem.map((item) => (
    <NavLink
      key={item.key}
      name={item.name}
      yHeight={item.yHeight}
      id={item.id}
      className={item.className}
    />
  ));

  const [backCol, setBackCol] = useState({ transition: "all .2s ease-in" });

  return (
    <nav className="navbar" style={backCol}>
      <div className="navbar__logo">
        <a href="#home">jaa.</a>
      </div>
      <div className="navbar__menu">{Links}</div>
    </nav>
  );
}

export default Navbar;
