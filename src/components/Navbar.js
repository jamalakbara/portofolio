import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";

function Navbar() {
  const navLinksItem = [
    {
      key: 1,
      href: "#home",
      name: "home",
      className:
        window.pageYOffset >= 0 && window.pageYOffset < 646
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 2,
      href: "#about",
      name: "about",
      className:
        window.pageYOffset >= 646 && window.pageYOffset < 1195
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 3,
      href: "#services",
      name: "services",
      className:
        window.pageYOffset >= 1195 && window.pageYOffset < 1907
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 4,
      href: "#portofolio",
      name: "portofolio",
      className:
        window.pageYOffset >= 1907 && window.pageYOffset < 3000
          ? "navbar__links--active"
          : "navbar__links",
    },
    {
      key: 5,
      href: "#contact",
      name: "contact",
      className: "navbar__links",
    },
  ];

  const Links = navLinksItem.map((item) => (
    <NavLink
      key={item.key}
      href={item.href}
      name={item.name}
      id={item.id}
      className={item.className}
    />
  ));

  const [backCol, setBackCol] = useState({ transition: "all .2s ease-in" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setBackCol({
          ...backCol,
          backgroundColor: "#1a1a1a",
          boxShadow: "0 5.9px 7.5px rgba(0, 0, 0, 0.291)",
        });
      } else {
        setBackCol((prevState) => 
          ({
            ...prevState,
            backgroundColor: "unset",
            boxShadow: "unset"
          })

        );
      }
    });
  }, []);

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
