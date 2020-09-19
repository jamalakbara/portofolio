import React from "react";
import Button from "./Button";
import LayoutSection from "./LayoutSection";

function Hire() {
  const button = (
    <Button
      name={"hire me"}
      className={"button-negative hire__button"}
      href={"#"}
    />
  );

  return (
    <LayoutSection sectionName={"hire"} label={"have any project in mind?"}>
      {button}
    </LayoutSection>
  );
}

export default Hire;
