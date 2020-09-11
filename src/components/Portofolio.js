import React, { useEffect } from "react";
import Title from "./Title";
import Project from "./Project";

function Portofolio() {
  const subtitle =
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur";

  const title = (
    <Title
      parentClass={"portofolio__header"}
      labelClass={"portofolio__label"}
      label={"latest works"}
      subtitle={subtitle}
      subtitleClass={"portofolio__subtitle"}
    />
  );

  const portoItem = [
    {
      id: 1,
      img: "/img/logo hc.png",
      title: "HC Wiki",
      company: "PT Telkom Indonesia",
    },
    {
      id: 2,
      img: "/img/logo refresh.png",
      title: "Refresh",
      company: "PT Telkom Indonesia",
    },
    {
      id: 3,
      img: "/img/logo simarak.png",
      title: "Simarak",
      company: "Bea Cukai",
    },
  ];

  const portos = portoItem.map((item) => (
    <Project
      key={item.id}
      img={item.img}
      title={item.title}
      company={item.company}
    />
  ));

  useEffect(() => {
    const containers = document.querySelectorAll(".portofolio__container");

    containers[0].classList.add("first-porto");

    containers.forEach((container) => {
      const title = container.children[1].children[1].innerHTML;
      if (title === "HC Wiki") {
        container.style.backgroundColor = "#b4f3eb";
      } else if (title === "Simarak") {
        container.style.backgroundColor = "#4bccf6";
      } else if (title === "Refresh") {
        container.style.backgroundColor = "#fedb5d";
      }
    });
  });

  return (
    <div className="portofolio" id="portofolio">
      {title}
      <div className="portofolio__main">
        <div className="portofolio__porto">{portos}</div>
      </div>
    </div>
  );
}

export default Portofolio;
