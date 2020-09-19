import React, { useEffect } from "react";
import LayoutSection from "./LayoutSection";
import { portos, subtitle } from "./misc/PortoMisc";

function Portofolio() {
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
  }, []);

  return (
    <LayoutSection
      sectionName={"portofolio"}
      label={"latest works"}
      subtitle={subtitle}
    >
      <div className="portofolio__porto">{portos}</div>
    </LayoutSection>
  );
}

export default Portofolio;
