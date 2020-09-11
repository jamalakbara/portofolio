import React from "react";

function NavLink(props) {
  const { href, name, className } = props;

  return (
    <a href={href} className={className}>
      {name}
    </a>
  );
}

export default NavLink;
