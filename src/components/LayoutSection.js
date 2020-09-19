import React from "react";
import Title from "./Title";

function LayoutSection({ sectionName, children, label, subtitle }) {
  const title = (
    <Title
      parentClass={`${sectionName}__header`}
      labelClass={`${sectionName}__label`}
      label={label}
      subtitle={subtitle}
      subtitleClass={`${sectionName}__subtitle`}
    />
  );

  return (
    <div className={sectionName} id={sectionName}>
      {title}
      <div className={`${sectionName}__main`}>{children}</div>
    </div>
  );
}

export default LayoutSection;
