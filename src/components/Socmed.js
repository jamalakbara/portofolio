import React from "react";

function Socmed({ href, Icon }) {
  return (
    <a
      href={href}
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noopener noreferrer" : undefined}
    >
      {Icon}
    </a>
  );
}

export default Socmed;
