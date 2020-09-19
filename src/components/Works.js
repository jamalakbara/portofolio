import React from "react";
import LayoutSection from "./LayoutSection";
import { experiences, subtitle } from "./misc/WorkMisc";

function Works() {
  return (
    <LayoutSection
      sectionName={"work"}
      label={"work experiences"}
      subtitle={subtitle}
    >
      {experiences}
    </LayoutSection>
  );
}

export default Works;
