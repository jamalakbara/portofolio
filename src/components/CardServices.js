import React, { useEffect } from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import WebIcon from "@material-ui/icons/Web";

function CardServices(props) {
  const { style, title, isi } = props;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 1195 && window.pageYOffset < 2000) {
        const cards = document.querySelectorAll(".services__card");
        cards.forEach((card) => {
          card.classList.add("appear-up");
        });
      }
    });
  });

  return (
    <div className="services__card" style={style}>
      <div className="services__card-container">
        <div className="services__card-header">
          {title == "web development" ? <WebIcon /> : <DeveloperModeIcon />}
        </div>
        <h1 className="services__card-title">{title}</h1>
      </div>
      <p className="services__card-isi">{isi}</p>
    </div>
  );
}

export default CardServices;
