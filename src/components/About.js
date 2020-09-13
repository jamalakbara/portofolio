import React from "react";
import Button from "./Button";

function About() {
  const buttonItem = [
    {
      id: 1,
      name: "view works",
      className: "about__works",
      href: "#",
    },
    {
      id: 2,
      name: "download resume",
      className: "about__cv",
      href: "/docs/CV.pdf",
    },
  ];

  const button = buttonItem.map((item) => (
    <Button
      key={item.id}
      name={item.name}
      className={item.className}
      href={item.href}
    />
  ));

  return (
    <div className="about" id="about">
      <div className="about__label">
        <h1 className="about__title">about me</h1>
      </div>
      <div className="about__paragraph">
        <div className="about__container">
          <div className="about__isi">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
            </p>
          </div>
        </div>
        <div className="about__button">{button}</div>
      </div>
    </div>
  );
}

export default About;
