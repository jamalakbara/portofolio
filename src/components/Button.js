import React from "react";

function Button(props) {
  const { className, href, name } = props;

  return (
    <a href={href} className={className}>
      {name}
    </a>
  );
}

export default Button;
