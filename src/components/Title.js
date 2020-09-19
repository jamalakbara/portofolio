import React from "react";

function Title(props) {
  const { parentClass, labelClass, subtitleClass, label, subtitle } = props;

  return (
    <div className={parentClass}>
      <h1 className={labelClass}>{label}</h1>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
}

export default Title;
