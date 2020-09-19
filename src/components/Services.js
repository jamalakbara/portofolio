import React from "react";
import LayoutSection from "./LayoutSection";
import { card, subtitle } from "./misc/ServicesMisc";

function Services() {
  return (
    <LayoutSection
      sectionName={"services"}
      label={"services"}
      subtitle={subtitle}
    >
      {card}
    </LayoutSection>
  );
}

export default Services;
